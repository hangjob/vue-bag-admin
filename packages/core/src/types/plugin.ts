import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'

export interface MenuConfig {
  path: string
  title: string
  icon?: string
  sort?: number
  hidden?: boolean
  badge?: string // 徽标，如 '新'、'New' 或数字
  roles?: string[]
  permissions?: string[]
  children?: MenuConfig[]
}

export interface PluginContext {
  router: Router
}

export interface AdminPlugin {
  /** 插件唯一标识 */
  id: string
  /** 插件名称 */
  name: string
  /** 插件版本 */
  version: string
  /** 插件提供的路由 */
  routes?: RouteRecordRaw[]
  /** 插件提供的菜单配置 */
  menus?: MenuConfig[]
  /** 插件提供的多语言字典 */
  locales?: {
    'zh-CN'?: Record<string, any>
    'en'?: Record<string, any>
  }
  /** 插件初始化钩子 */
  install?: (app: App, context: PluginContext) => void | Promise<void>
}
