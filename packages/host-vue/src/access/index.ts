import { computed, type ComputedRef } from 'vue'
import type { AccessContext, PermissionRequirement } from '@bag/core'
import { useUserStore } from '../stores/user'

// 统一角色与权限点判断，供路由、指令、组件三处复用。
export const canAccess = (requirement: PermissionRequirement, userStore = useUserStore()) => {
  const context: AccessContext = {
    roles: userStore.roles,
    permissions: userStore.permissions,
    user: userStore.user ?? undefined
  }

  return (
    userStore.hasRole(requirement.roles, requirement.roleMode) &&
    userStore.hasPermission(requirement.permissions, requirement.permissionMode) &&
    (requirement.policy?.(context) ?? true)
  )
}

// 需要响应式权限判断时，直接使用这个组合函数。
export const useAccess = (requirement: PermissionRequirement): ComputedRef<boolean> => {
  const userStore = useUserStore()
  return computed(() => canAccess(requirement, userStore))
}
