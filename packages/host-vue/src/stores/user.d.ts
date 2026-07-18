type LoginPayload = {
  username: string
  password: string
}
export declare const useUserStore: import('pinia').StoreDefinition<
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
    /**
     * 登录逻辑 (对接 Strapi 5)
     */
    login(payload: LoginPayload): Promise<void>
    /**
     * 退出登录
     */
    logout(): void
    /**
     * 获取用户信息（包括角色和权限点）
     */
    fetchProfile(): Promise<void>
    /**
     * 判断当前用户是否拥有某些角色
     * @param roles 需要判断的角色数组
     * @returns 只要满足其中一个角色即返回 true
     */
    hasRole(roles?: string[]): boolean
    /**
     * 判断当前用户是否拥有某些权限
     * @param perms 需要判断的权限点数组
     * @returns 如果拥有 '*' 权限直接返回 true，否则只要满足其中一个权限即返回 true
     */
    hasPermission(perms?: string[]): boolean
  }
>
export {}
