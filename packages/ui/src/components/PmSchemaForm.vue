<template>
  <n-grid :cols="cols" :x-gap="xGap" :y-gap="yGap">
    <template v-for="schema in visibleSchemas" :key="schema.field">
      <n-form-item-gi
        :span="schema.span ?? 24"
        :path="schema.field"
        :label="schema.label"
        v-bind="schema.formItemProps"
      >
        <template v-if="schema.component === 'slot'">
          <slot
            :name="schema.slotName || schema.field"
            :schema="schema"
            :values="modelValue"
            :set-field-value="setFieldValue"
          />
        </template>

        <template v-else-if="schema.component === 'radio'">
          <n-radio-group
            :value="getFieldValue(schema.field)"
            :disabled="isFieldDisabled(schema)"
            v-bind="getComponentProps(schema)"
            @update:value="(value) => setFieldValue(schema.field, value)"
          >
            <div class="flex flex-wrap gap-3">
              <n-radio
                v-for="option in getSchemaOptions(schema)"
                :key="`${schema.field}-${String(option.value)}`"
                :value="option.value"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </n-radio>
            </div>
          </n-radio-group>
        </template>

        <template v-else-if="schema.component === 'checkbox'">
          <n-checkbox-group
            :value="getFieldValue(schema.field) as Array<string | number | boolean>"
            :disabled="isFieldDisabled(schema)"
            v-bind="getComponentProps(schema)"
            @update:value="(value) => setFieldValue(schema.field, value)"
          >
            <div class="flex flex-wrap gap-3">
              <n-checkbox
                v-for="option in getSchemaOptions(schema)"
                :key="`${schema.field}-${String(option.value)}`"
                :value="option.value"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </n-checkbox>
            </div>
          </n-checkbox-group>
        </template>

        <template v-else>
          <component
            :is="resolveComponent(schema.component)"
            :value="getFieldValue(schema.field)"
            :disabled="isFieldDisabled(schema)"
            v-bind="getComponentProps(schema)"
            @update:value="(value: unknown) => setFieldValue(schema.field, value)"
          />
        </template>

        <p
          v-if="schema.description"
          class="mt-2 text-xs leading-5 text-slate-400 dark:text-slate-500"
        >
          {{ schema.description }}
        </p>
      </n-form-item-gi>
    </template>
  </n-grid>
</template>

<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue'
import {
  NCheckbox,
  NCheckboxGroup,
  NDatePicker,
  NFormItemGi,
  NGrid,
  NInput,
  NInputNumber,
  NRadio,
  NRadioGroup,
  NSelect,
  NSwitch
} from 'naive-ui'
import {
  getCachedDictionaryOptions,
  resolveDictionaryOptions,
  type DictionaryOption,
  type ProFormComponentType,
  type ProFormSchema
} from '@bag/core'

const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, unknown>>,
    required: true
  },
  schemas: {
    type: Array as PropType<ProFormSchema[]>,
    required: true
  },
  cols: {
    type: [String, Number] as PropType<string | number>,
    default: '1 s:1 m:2 l:2'
  },
  xGap: {
    type: Number,
    default: 16
  },
  yGap: {
    type: Number,
    default: 8
  }
})

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, unknown>]
}>()

const dictOptionsMap = ref<Record<string, DictionaryOption[]>>({})

const componentMap: Record<
  Exclude<ProFormComponentType, 'radio' | 'checkbox' | 'slot'>,
  unknown
> = {
  input: NInput,
  textarea: NInput,
  select: NSelect,
  switch: NSwitch,
  date: NDatePicker,
  number: NInputNumber
}

const visibleSchemas = computed(() =>
  props.schemas.filter((schema) => {
    if (typeof schema.visible === 'function') {
      return schema.visible(props.modelValue, schema)
    }
    return schema.visible !== false
  })
)

const getFieldValue = (field: string) => props.modelValue[field]

const getSchemaOptions = (schema: ProFormSchema) =>
  schema.options ?? (schema.dictCode ? (dictOptionsMap.value[schema.dictCode] ?? []) : [])

const setFieldValue = (field: string, value: unknown) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value
  })
}

const isFieldDisabled = (schema: ProFormSchema) => {
  if (typeof schema.disabled === 'function') {
    return schema.disabled(props.modelValue, schema)
  }
  return schema.disabled === true
}

const resolveComponent = (component: ProFormComponentType) => {
  return componentMap[component as keyof typeof componentMap] ?? NInput
}

const syncDictionaryOptions = async () => {
  const nextMap: Record<string, DictionaryOption[]> = {}

  await Promise.all(
    props.schemas.map(async (schema) => {
      if (!schema.dictCode) return

      const cachedOptions = getCachedDictionaryOptions(schema.dictCode)
      if (cachedOptions.length > 0) {
        nextMap[schema.dictCode] = cachedOptions
      }

      try {
        nextMap[schema.dictCode] = await resolveDictionaryOptions(schema.dictCode)
      } catch (error) {
        console.error(`[PmSchemaForm] failed to resolve dictionary: ${schema.dictCode}`, error)
      }
    })
  )

  dictOptionsMap.value = nextMap
}

const getDefaultPlaceholder = (schema: ProFormSchema) => {
  if (schema.placeholder) return schema.placeholder
  if (!schema.label) return undefined

  if (schema.component === 'select' || schema.component === 'date') {
    return `请选择${schema.label}`
  }
  return `请输入${schema.label}`
}

// 统一在这里补齐常用的组件默认参数，避免页面层重复写 size 和 placeholder。
const getComponentProps = (schema: ProFormSchema) => {
  const baseProps: Record<string, unknown> = {
    placeholder: getDefaultPlaceholder(schema)
  }

  const resolvedOptions = getSchemaOptions(schema)

  if (schema.component === 'input') {
    baseProps.size = 'large'
    baseProps.clearable = true
  }

  if (schema.component === 'textarea') {
    baseProps.type = 'textarea'
    baseProps.size = 'large'
    baseProps.clearable = true
    baseProps.autosize = { minRows: 4, maxRows: 6 }
  }

  if (schema.component === 'select') {
    baseProps.size = 'large'
    baseProps.clearable = true
    baseProps.options = resolvedOptions
  }

  if (schema.component === 'date') {
    baseProps.type = 'date'
    baseProps.clearable = true
  }

  if (schema.component === 'number') {
    baseProps.size = 'large'
  }

  return {
    ...baseProps,
    ...schema.componentProps
  }
}

watch(
  () => props.schemas,
  () => {
    syncDictionaryOptions()
  },
  { deep: true, immediate: true }
)
</script>
