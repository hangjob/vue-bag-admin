import { defineStore } from 'pinia'
import { http } from '@bag/request'

// 存储在 localStorage 中的 token 键名
const tokenKey = 'bag.auth.token'

// 登录请求参数类型
type LoginPayload = {
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

/**
 * 统一提取接口错误信息
 */
const getErrorMessage = (e: any) => {
  const msg = e?.response?.data?.error?.message ?? e?.response?.data?.message ?? e?.message
  return msg ? String(msg) : 'Request failed'
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem(tokenKey) || '',
    username: '',
    roles: [] as string[],
    permissions: [] as string[],
    profileLoaded: false, // 标记用户信息是否已经加载完成
    theme: (localStorage.getItem('bag.theme') as 'light' | 'dark') || 'light', // 主题状态
    themeColor: localStorage.getItem('bag.themeColor') || '#f97316' // 主题颜色
  }),
  getters: {
    // 判断用户是否已登录
    isAuthenticated: (state) => Boolean(state.token)
  },
  actions: {
    /**
     * 设置主题颜色
     */
    setThemeColor(color: string) {
      this.themeColor = color
      localStorage.setItem('bag.themeColor', color)
      document.documentElement.style.setProperty('--primary-color', color)

      // 简单模拟生成 hover/active 颜色，用于 Tailwind primary 调色板
      // 在实际项目中可以使用 tinycolor2 等库来精确计算
      let color400 = color
      let color600 = color
      if (color === '#f97316') {
        color400 = '#fb923c'
        color600 = '#ea580c'
      } // 默认橘
      if (color === '#3b82f6') {
        color400 = '#60a5fa'
        color600 = '#2563eb'
      } // 科技蓝
      if (color === '#10b981') {
        color400 = '#34d399'
        color600 = '#059669'
      } // 护眼绿
      if (color === '#8b5cf6') {
        color400 = '#a78bfa'
        color600 = '#7c3aed'
      } // 浪漫紫
      if (color === '#f43f5e') {
        color400 = '#fb7185'
        color600 = '#e11d48'
      } // 玫瑰红

      document.documentElement.style.setProperty('--primary-color-400', color400)
      document.documentElement.style.setProperty('--primary-color-600', color600)
    },

    /**
     * 切换主题
     */
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('bag.theme', this.theme)

      // 在 HTML 标签上切换 Tailwind 的 dark 类名
      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },

    /**
     * 初始化主题 (在应用加载时调用)
     */
    initTheme() {
      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      this.setThemeColor(this.themeColor) // 复用方法初始化 CSS 变量
    },

    /**
     * 登录逻辑 (对接 Strapi 5)
     */
    async login(payload: LoginPayload) {
      try {
        // 演示环境测试账号直接放行
        if (payload.username === 'admin' && payload.password === '123456') {
          this.token = 'mock-token-for-demo'
          localStorage.setItem(tokenKey, this.token)
          await this.fetchProfile()
          return
        }

        const res = await http.post<any, StrapiAuthLocalResponse>('/api/auth/local', {
          identifier: payload.username,
          password: payload.password
        })

        this.token = res.jwt
        localStorage.setItem(tokenKey, this.token)

        // 登录成功后立刻拉取用户资料
        await this.fetchProfile()
      } catch (e) {
        throw new Error(getErrorMessage(e))
      }
    },

    /**
     * 退出登录
     */
    logout() {
      this.token = ''
      this.username = ''
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
        // 演示环境测试账号使用本地 mock 数据
        if (this.token === 'mock-token-for-demo') {
          this.username = 'admin'
          this.roles = ['admin', 'authenticated']
          this.permissions = ['*']
          this.profileLoaded = true
          return
        }

        const res = await http.get<any, StrapiMeResponse>('/api/users/me', {
          params: { populate: 'role' }
        })

        const roles: string[] = []

        // 提取角色的 name 和 type
        if (res.role?.type) roles.push(res.role.type)
        if (res.role?.name && res.role.name !== res.role.type) roles.push(res.role.name)
        // 兜底角色
        if (roles.length === 0) roles.push('authenticated')
        this.username = res.username || ''
        this.roles = roles
        this.permissions = Array.isArray(res.permissions) ? res.permissions : []
        this.profileLoaded = true
      } catch (e) {
        throw new Error(getErrorMessage(e))
      }
    },

    /**
     * 判断当前用户是否拥有某些角色
     * @param roles 需要判断的角色数组
     * @returns 只要满足其中一个角色即返回 true
     */
    hasRole(roles?: string[]) {
      if (!roles?.length) return true
      return roles.some((r) => this.roles.includes(r))
    },

    /**
     * 判断当前用户是否拥有某些权限
     * @param perms 需要判断的权限点数组
     * @returns 如果拥有 '*' 权限直接返回 true，否则只要满足其中一个权限即返回 true
     */
    hasPermission(perms?: string[]) {
      if (!perms?.length) return true
      if (this.permissions.includes('*')) return true
      return perms.some((p) => this.permissions.includes(p))
    }
  }
})
