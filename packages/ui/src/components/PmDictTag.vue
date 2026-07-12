<template>
  <n-tag round size="small" :type="resolvedTagType" :bordered="false" :style="tagStyle">
    {{ resolvedLabel }}
  </n-tag>
</template>

<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue'
import { NTag } from 'naive-ui'
import {
  getCachedDictionaryOptions,
  resolveDictionaryOptions,
  type DictionaryOption,
  type DictionaryValue
} from '@bag/core'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number, Boolean] as PropType<DictionaryValue>,
    required: true
  },
  fallback: {
    type: String,
    default: '--'
  }
})

const options = ref<DictionaryOption[]>([])

const syncOptions = async () => {
  const cachedOptions = getCachedDictionaryOptions(props.code)
  if (cachedOptions.length > 0) {
    options.value = cachedOptions
  }

  try {
    options.value = await resolveDictionaryOptions(props.code)
  } catch (error) {
    console.error(`[PmDictTag] failed to resolve dictionary: ${props.code}`, error)
  }
}

const matchedOption = computed(() => options.value.find((option) => option.value === props.value))

const resolvedLabel = computed(() => matchedOption.value?.label ?? props.fallback)

const resolvedTagType = computed(() => matchedOption.value?.tagType ?? 'default')

const tagStyle = computed(() => {
  const option = matchedOption.value
  if (!option?.color && !option?.textColor) return undefined

  return {
    backgroundColor: option.color,
    color: option.textColor
  }
})

watch(
  () => props.code,
  () => {
    syncOptions()
  },
  { immediate: true }
)
</script>
