import type { App } from 'vue'
import type { RouteLocationNormalized, RouteLocationRaw, Router, RouterHistory } from 'vue-router'
import { type AdminPlugin, type AdminRouteRecordRaw } from '@bag/core'
import type { HostUiConfig } from './host-ui'
import type { HostNavigationConfig } from './navigation'
import type { useUserStore } from '../stores/user'
export interface CreateHostRouterOptions {
  routes: AdminRouteRecordRaw[]
  history?: RouterHistory
  navigation?: Partial<HostNavigationConfig>
  auth?: HostAuthOption
}
export type HostProfileErrorAction = 'logout' | 'ignore' | 'throw'
export interface HostAuthGuardContext {
  to: RouteLocationNormalized
  router: Router
  user: ReturnType<typeof useUserStore>
}
export type HostUnauthenticatedHandler = (
  context: HostAuthGuardContext
) => RouteLocationRaw | false | void | Promise<RouteLocationRaw | false | void>
export type HostProfileErrorHandler = (
  context: HostAuthGuardContext & {
    error: unknown
  }
) =>
  | HostProfileErrorAction
  | RouteLocationRaw
  | false
  | void
  | Promise<HostProfileErrorAction | RouteLocationRaw | false | void>
export interface HostAuthConfig extends Partial<HostNavigationConfig> {
  enabled?: boolean
  onUnauthenticated?: HostUnauthenticatedHandler
  onProfileError?: HostProfileErrorHandler
}
export type HostAuthOption = boolean | HostAuthConfig
export declare const createHostRouter: ({
  routes,
  history,
  navigation,
  auth
}: CreateHostRouterOptions) => Router
export interface BootstrapPluginsOptions {
  app: App
  router: Router
  plugins?: AdminPlugin[]
  i18n?: {
    global: {
      mergeLocaleMessage: (locale: string, message: Record<string, unknown>) => void
    }
  }
  ui?: HostUiConfig
  pluginStateProvider?: import('@bag/core').PluginStateProvider
}
export declare function bootstrapPlugins({
  app,
  router,
  plugins,
  i18n,
  ui,
  pluginStateProvider
}: BootstrapPluginsOptions): Promise<void>
