import type { App, DirectiveBinding, ObjectDirective } from 'vue'
import type { PermissionRequirement } from '@bag/core'
import { canAccess } from '../access'

type PermissionBindingValue = string | string[] | PermissionRequirement | undefined

// 指令允许三种写法：单权限、权限数组、完整权限对象。
const normalizeRequirement = (value: PermissionBindingValue): PermissionRequirement => {
  if (!value) return {}
  if (typeof value === 'string') {
    return { permissions: [value] }
  }
  if (Array.isArray(value)) {
    return { permissions: value }
  }
  return value
}

// 用 display 控制显隐，避免直接移除节点导致事件和状态频繁重建。
const updateElementVisibility = (
  el: HTMLElement,
  binding: DirectiveBinding<PermissionBindingValue>
) => {
  const requirement = normalizeRequirement(binding.value)
  const hasAccess = canAccess(requirement)

  if (hasAccess) {
    el.style.display = ''
    return
  }

  el.style.display = 'none'
}

const permissionDirective: ObjectDirective<HTMLElement, PermissionBindingValue> = {
  mounted(el, binding) {
    updateElementVisibility(el, binding)
  },
  updated(el, binding) {
    updateElementVisibility(el, binding)
  }
}

export const registerPermissionDirective = (app: App) => {
  // 使用方式：v-permission="'shop.read'" 或 v-permission="{ permissions: ['shop.read'] }"
  app.directive('permission', permissionDirective)
}
