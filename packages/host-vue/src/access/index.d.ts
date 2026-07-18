import { type ComputedRef } from 'vue'
import type { PermissionRequirement } from '@bag/core'
export declare const canAccess: (
  requirement: PermissionRequirement,
  userStore?: import('pinia').Store<
    'user',
    {
      token: string
      username: string
      roles: string[]
      permissions: string[]
      profileLoaded: boolean
    },
    {
      isAuthenticated: (
        state: {
          token: string
          username: string
          roles: string[]
          permissions: string[]
          profileLoaded: boolean
        } & import('pinia').PiniaCustomStateProperties<{
          token: string
          username: string
          roles: string[]
          permissions: string[]
          profileLoaded: boolean
        }>
      ) => boolean
    },
    {
      login(payload: { username: string; password: string }): Promise<void>
      logout(): void
      fetchProfile(): Promise<void>
      hasRole(roles?: string[]): boolean
      hasPermission(perms?: string[]): boolean
    }
  >
) => boolean
export declare const useAccess: (requirement: PermissionRequirement) => ComputedRef<boolean>
