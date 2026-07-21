<template>
  <n-grid :cols="cols" :x-gap="xGap" :y-gap="yGap">
    <template v-for="formSchema in visibleSchemas" :key="formSchema.field">
      <n-form-item-gi
        :span="formSchema.span ?? 24"
        :path="formSchema.field"
        :label="formSchema.label"
        v-bind="formSchema.formItemProps"
      >
        <template v-if="formSchema.component === 'slot'">
          <slot
            :name="formSchema.slotName || formSchema.field"
            :schema="formSchema"
            :values="modelValue"
            :set-field-value="setFieldValue"
          />
        </template>

        <template v-else-if="formSchema.component === 'radio'">
          <n-radio-group
            :value="getScalarFieldValue(formSchema.field)"
            :disabled="isFieldDisabled(formSchema)"
            v-bind="getComponentProps(formSchema)"
            @update:value="
              (value: string | number | boolean | null) => setFieldValue(formSchema.field, value)
            "
          >
            <div class="flex flex-wrap gap-3">
              <n-radio
                v-for="option in getSchemaOptions(formSchema)"
                :key="`${formSchema.field}-${String(option.value)}`"
                :value="option.value"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </n-radio>
            </div>
          </n-radio-group>
        </template>

        <template v-else-if="formSchema.component === 'checkbox'">
          <n-checkbox-group
            :value="getCheckboxGroupValue(formSchema.field)"
            :disabled="isFieldDisabled(formSchema)"
            v-bind="getComponentProps(formSchema)"
            @update:value="
              (value: Array<string | number>) => setFieldValue(formSchema.field, value)
            "
          >
            <div class="flex flex-wrap gap-3">
              <n-checkbox
                v-for="option in getCheckboxOptions(formSchema)"
                :key="`${formSchema.field}-${String(option.value)}`"
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
            :is="resolveComponent(formSchema.component)"
            :value="getFieldValue(formSchema.field)"
            :disabled="isFieldDisabled(formSchema)"
            v-bind="getComponentProps(formSchema)"
            @update:value="(value: unknown) => setFieldValue(formSchema.field, value)"
          />
        </template>

        <p
          v-if="formSchema.description"
          class="mt-2 text-xs leading-5 text-slate-400 dark:text-slate-500"
        >
          {{ formSchema.description }}
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
  type ProFormOption,
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
type SchemaOption = Pick<ProFormOption, 'label' | 'value' | 'disabled'>
type CheckboxOption = Omit<SchemaOption, 'value'> & { value: string | number }

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

const visibleSchemas = computed<ProFormSchema[]>(() =>
  props.schemas.filter((schema) => {
    if (typeof schema.visible === 'function') {
      return schema.visible(props.modelValue, schema)
    }
    return schema.visible !== false
  })
)

const getFieldValue = (field: string) => props.modelValue[field]

const getScalarFieldValue = (field: string): string | number | boolean | null | undefined => {
  const value = getFieldValue(field)
  return typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value == null
    ? value
    : undefined
}

const getCheckboxGroupValue = (field: string): Array<string | number> => {
  const value = getFieldValue(field)
  if (!Array.isArray(value)) return []
  return value.filter(
    (item): item is string | number => typeof item === 'string' || typeof item === 'number'
  )
}

const normalizeOption = (option: ProFormOption | DictionaryOption): SchemaOption => ({
  label: option.label,
  value: option.value,
  disabled: 'disabled' in option ? option.disabled : undefined
})

const getSchemaOptions = (schema: ProFormSchema): SchemaOption[] => {
  const options =
    schema.options ?? (schema.dictCode ? (dictOptionsMap.value[schema.dictCode] ?? []) : [])
  return options.map(normalizeOption)
}

const getCheckboxOptions = (schema: ProFormSchema): CheckboxOption[] =>
  getSchemaOptions(schema).filter(
    (option): option is CheckboxOption =>
      typeof option.value === 'string' || typeof option.value === 'number'
  )

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
