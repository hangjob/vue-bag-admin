import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'

export type AccessMode = 'any' | 'all'

export interface AccessContext {
  roles: string[]
  permissions: string[]
  user?: Record<string, unknown>
  route?: unknown
}

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

export interface PermissionRequirement {
  roles?: string[]
  roleMode?: AccessMode
  permissions?: string[]
  permissionMode?: AccessMode
  policy?: (context: AccessContext) => boolean
}

export interface AdminRouteMeta extends PermissionRequirement {
  title?: string
  layout?: string
  public?: boolean
  hidden?: boolean
  activeMenu?: string
  noCache?: boolean
  cacheKey?: string
}

export type AdminRouteRecordRaw = Omit<RouteRecordRaw, 'meta' | 'children'> & {
  meta?: AdminRouteMeta
  children?: AdminRouteRecordRaw[]
}

export interface PluginContext {
  app: App
  router: Router
  enabledPluginIds: string[]
  config?: Record<string, unknown>
}

export interface PluginManifest {
  enabled?: boolean
  order?: number
  dependsOn?: string[]
  compatibility?: {
    host?: string
    vue?: string
  }
}

export interface PluginPermissionDefinition {
  code: string
  title: string
  description?: string
  group?: string
}

export interface PluginSettingDefinition {
  field: string
  label: string
  component?: string
  defaultValue?: unknown
  description?: string
  required?: boolean
  options?: Array<{ label: string; value: string | number | boolean }>
}

export interface PluginContributions {
  [extensionPoint: string]: unknown[]
}

export interface AdminPlugin extends PluginManifest {
  /** 插件唯一标识 */
  id: string
  /** 插件名称 */
  name: string
  /** 插件版本 */
  version: string
  /** 插件提供的路由 */
  routes?: AdminRouteRecordRaw[]
  /** 插件提供的菜单配置 */
  menus?: MenuConfig[]
  /** 插件提供的多语言字典 */
  locales?: {
    'zh-CN'?: Record<string, any>
    en?: Record<string, any>
  }
  /** 插件声明的权限点，供宿主汇总到角色/权限后台 */
  permissions?: PluginPermissionDefinition[]
  /** 插件声明的配置项，供宿主生成插件配置页 */
  settings?: PluginSettingDefinition[]
  /** 插件向宿主扩展点贡献的能力，例如工具栏动作、卡片、快捷入口等 */
  contributes?: PluginContributions
  /** 插件初始化钩子 */
  install?: (app: App, context: PluginContext) => void | Promise<void>
  /** 插件卸载/应用重引导前的清理钩子 */
  dispose?: (context: PluginContext) => void | Promise<void>
}
