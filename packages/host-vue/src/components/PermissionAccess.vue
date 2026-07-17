<template>
  <slot v-if="hasAccess" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { canAccess } from '../access'

const props = defineProps<{
  roles?: string[]
  permissions?: string[]
}>()

// 组件版权限包裹器，适合包一整块按钮区或操作区。
const hasAccess = computed(() => {
  return canAccess({
    roles: props.roles,
    permissions: props.permissions
  })
})
</script>
