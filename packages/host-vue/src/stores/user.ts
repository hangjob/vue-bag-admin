import { defineStore } from 'pinia'
import { http } from '@bag/request'
import type { AccessMode } from '@bag/core'

// 存储在 localStorage 中的 token 键名
const tokenKey = 'bag.auth.token'

// 登录请求参数类型
export type LoginPayload = {
  username: string
  password: string
}

// Strapi 5 API 响应类型定义
type StrapiAuthLocalResponse = {
  jwt: string
  user?: Record<string, any>
}

type StrapiMeResponse = {
  id?: number
  username?: string
  email?: string
  role?: {
    id?: number
    name?: string
    type?: string
  }
  permissions?: string[]
}

export interface AuthProfile {
  username?: string
  user?: Record<string, unknown>
  roles?: string[]
  permissions?: string[]
}

export interface AuthSession {
  token: string
  profile?: AuthProfile
}

export interface AuthProvider {
  login: (payload: LoginPayload) => Promise<AuthSession>
  fetchProfile: (session: { token: string }) => Promise<AuthProfile>
  logout?: () => void | Promise<void>
}

/**
 * 统一提取接口错误信息
 */
const getErrorMessage = (e: any) => {
  const msg = e?.response?.data?.error?.message ?? e?.response?.data?.message ?? e?.message
  return msg ? String(msg) : 'Request failed'
}

const normalizeStrapiProfile = (res: StrapiMeResponse): AuthProfile => {
  const roles: string[] = []

  // 提取角色的 name 和 type
  if (res.role?.type) roles.push(res.role.type)
  if (res.role?.name && res.role.name !== res.role.type) roles.push(res.role.name)
  // 兜底角色
  if (roles.length === 0) roles.push('authenticated')

  return {
    username: res.username || '',
    user: res as Record<string, unknown>,
    roles,
    permissions: Array.isArray(res.permissions) ? res.permissions : []
  }
}

export const createStrapiAuthProvider = (): AuthProvider => ({
  async login(payload) {
    const res = await http.post<any, StrapiAuthLocalResponse>('/api/auth/local', {
      identifier: payload.username,
      password: payload.password
    })

    return {
      token: res.jwt,
      profile: res.user
        ? {
            username: String(res.user.username ?? ''),
            user: res.user as Record<string, unknown>
          }
        : undefined
    }
  },
  async fetchProfile() {
    const res = await http.get<any, StrapiMeResponse>('/api/users/me', {
      params: { populate: 'role' }
    })

    return normalizeStrapiProfile(res)
  }
})

let authProvider: AuthProvider = createStrapiAuthProvider()

export const setAuthProvider = (provider: AuthProvider) => {
  authProvider = provider
}

export const resetAuthProvider = () => {
  authProvider = createStrapiAuthProvider()
}

const applyAuthProfile = (
  state: {
    username: string
    user: Record<string, unknown> | null
    roles: string[]
    permissions: string[]
    profileLoaded: boolean
  },
  profile: AuthProfile
) => {
  state.username = profile.username || ''
  state.user = profile.user ?? null
  state.roles = profile.roles?.length ? profile.roles : ['authenticated']
  state.permissions = profile.permissions ?? []
  state.profileLoaded = true
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem(tokenKey) || '',
    username: '',
    user: null as Record<string, unknown> | null,
    roles: [] as string[],
    permissions: [] as string[],
    profileLoaded: false // 标记用户信息是否已经加载完成
  }),
  getters: {
    // 判断用户是否已登录
    isAuthenticated: (state) => Boolean(state.token)
  },
  actions: {
    /**
     * 登录逻辑 (对接 Strapi 5)
     */
    async login(payload: LoginPayload) {
      try {
        const session = await authProvider.login(payload)
        this.token = session.token
        localStorage.setItem(tokenKey, this.token)

        if (session.profile) {
          applyAuthProfile(this, session.profile)
        } else {
          // 登录成功后立刻拉取用户资料
          await this.fetchProfile()
        }
      } catch (e) {
        throw new Error(getErrorMessage(e))
      }
    },

    /**
     * 退出登录
     */
    logout() {
      void authProvider.logout?.()
      this.token = ''
      this.username = ''
      this.user = null
      this.roles = []
      this.permissions = []
      this.profileLoaded = false
      localStorage.removeItem(tokenKey)
    },

    /**
     * 获取用户信息（包括角色和权限点）
     */
    async fetchProfile() {
      try {
        const profile = await authProvider.fetchProfile({ token: this.token })
        applyAuthProfile(this, profile)
      } catch (e) {
        throw new Error(getErrorMessage(e))
      }
    },

    /**
     * 判断当前用户是否拥有某些角色
     * @param roles 需要判断的角色数组
     * @returns 只要满足其中一个角色即返回 true
     */
    hasRole(roles?: string[], mode: AccessMode = 'any') {
      if (!roles?.length) return true
      return mode === 'all'
        ? roles.every((r) => this.roles.includes(r))
        : roles.some((r) => this.roles.includes(r))
    },

    /**
     * 判断当前用户是否拥有某些权限
     * @param perms 需要判断的权限点数组
     * @returns 如果拥有 '*' 权限直接返回 true，否则只要满足其中一个权限即返回 true
     */
    hasPermission(perms?: string[], mode: AccessMode = 'any') {
      if (!perms?.length) return true
      if (this.permissions.includes('*')) return true
      return mode === 'all'
        ? perms.every((p) => this.permissions.includes(p))
        : perms.some((p) => this.permissions.includes(p))
    }
  }
})
