<template>
  <div class="pm-pro-form space-y-5">
    <div
      v-if="title || description || $slots.extra"
      class="flex flex-wrap items-start justify-between gap-4"
    >
      <div>
        <h3 v-if="title" class="text-lg font-semibold text-slate-900 dark:text-white">
          {{ title }}
        </h3>
        <p v-if="description" class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {{ description }}
        </p>
      </div>

      <slot name="extra" :values="innerModel" />
    </div>

    <n-form
      ref="formRef"
      :model="innerModel"
      :rules="mergedRules"
      :label-placement="labelPlacement"
      :require-mark-placement="requireMarkPlacement"
      class="space-y-1"
    >
      <PmSchemaForm
        v-model="innerModel"
        :schemas="schemas"
        :cols="cols"
        :x-gap="xGap"
        :y-gap="yGap"
      >
        <template
          v-for="schema in schemas"
          :key="`schema-slot-${schema.field}`"
          v-slot:[schema.slotName||schema.field]="slotProps"
        >
          <slot :name="schema.slotName || schema.field" v-bind="slotProps" />
        </template>
      </PmSchemaForm>
    </n-form>

    <div
      v-if="showActions || $slots.actions"
      class="flex flex-wrap gap-3 border-t border-slate-200/70 pt-5 dark:border-slate-800/80"
      :class="actionsAlignClass"
    >
      <slot name="actions" :values="innerModel" :submit="handleSubmit" :reset="reset" />

      <template v-if="showActions">
        <n-button v-if="showReset" secondary size="large" @click="reset">
          {{ resetText }}
        </n-button>
        <n-button
          v-if="showSubmit"
          type="primary"
          size="large"
          :loading="submitLoading"
          @click="handleSubmit"
        >
          {{ submitText }}
        </n-button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue'
import { NButton, NForm, type FormInst, type FormRules } from 'naive-ui'
import type { ProFormInstance, ProFormSchema, ProFormSubmitContext } from '@bag/core'
import PmSchemaForm from './PmSchemaForm.vue'

const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, unknown>>,
    default: () => ({})
  },
  schemas: {
    type: Array as PropType<ProFormSchema[]>,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
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
  },
  showActions: {
    type: Boolean,
    default: true
  },
  showSubmit: {
    type: Boolean,
    default: true
  },
  showReset: {
    type: Boolean,
    default: true
  },
  submitText: {
    type: String,
    default: '保存'
  },
  resetText: {
    type: String,
    default: '重置'
  },
  submitLoading: {
    type: Boolean,
    default: false
  },
  labelPlacement: {
    type: String as PropType<'left' | 'top'>,
    default: 'top'
  },
  requireMarkPlacement: {
    type: String as PropType<'left' | 'right' | 'right-hanging'>,
    default: 'right-hanging'
  },
  actionsAlign: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  }
})

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, unknown>]
  submit: [context: ProFormSubmitContext]
  reset: [value: Record<string, unknown>]
}>()

const formRef = ref<FormInst | null>(null)
const innerModel = ref<Record<string, unknown>>({})

const cloneDefaultValue = (value: unknown) => {
  if (Array.isArray(value)) return [...value]
  if (value && typeof value === 'object') return { ...(value as Record<string, unknown>) }
  return value
}

const buildDefaultModel = (schemas: ProFormSchema[], model: Record<string, unknown>) => {
  const nextModel = { ...model }
  schemas.forEach((schema) => {
    if (!(schema.field in nextModel) && schema.defaultValue !== undefined) {
      nextModel[schema.field] = cloneDefaultValue(schema.defaultValue)
    }
  })
  return nextModel
}

watch(
  () => [props.modelValue, props.schemas] as const,
  ([modelValue, schemas]) => {
    innerModel.value = buildDefaultModel(schemas, modelValue)
  },
  { deep: true, immediate: true }
)

watch(
  innerModel,
  (value) => {
    emit('update:modelValue', { ...value })
  },
  { deep: true }
)

const mergedRules = computed<FormRules>(() => {
  const rules: FormRules = {}

  props.schemas.forEach((schema) => {
    const schemaRules = [...((schema.rules as NonNullable<FormRules[string]>) ?? [])]

    if (schema.required) {
      schemaRules.unshift({
        required: true,
        message:
          schema.placeholder ||
          (schema.component === 'select' || schema.component === 'date'
            ? `请选择${schema.label ?? schema.field}`
            : `请输入${schema.label ?? schema.field}`),
        trigger: ['input', 'blur', 'change']
      })
    }

    if (schemaRules.length > 0) {
      rules[schema.field] = schemaRules
    }
  })

  return rules
})

const actionsAlignClass = computed(() =>
  props.actionsAlign === 'right' ? 'justify-end' : 'justify-start'
)

const validate = async () => {
  try {
    await formRef.value?.validate()
    return true
  } catch {
    return false
  }
}

const reset = () => {
  innerModel.value = buildDefaultModel(props.schemas, {})
  formRef.value?.restoreValidation()
  emit('reset', { ...innerModel.value })
}

const handleSubmit = async () => {
  const valid = await validate()
  if (!valid) return

  emit('submit', {
    values: { ...innerModel.value },
    reset
  })
}

const setValues: ProFormInstance['setValues'] = (values) => {
  innerModel.value = {
    ...innerModel.value,
    ...values
  }
}

const getValues: ProFormInstance['getValues'] = () => ({ ...innerModel.value })

defineExpose<ProFormInstance>({
  validate,
  reset,
  setValues,
  getValues
})
</script>
