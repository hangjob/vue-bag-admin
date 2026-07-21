import type { App } from 'vue'
import type { Router, RouterHistory } from 'vue-router'
import { type AdminPlugin, type AdminRouteRecordRaw } from '@bag/core'
import type { HostUiConfig } from './host-ui'
export interface CreateHostRouterOptions {
  routes: AdminRouteRecordRaw[]
  history?: RouterHistory
}
export declare const createHostRouter: ({ routes, history }: CreateHostRouterOptions) => Router
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
}
export declare function bootstrapPlugins({
  app,
  router,
  plugins,
  i18n,
  ui
}: BootstrapPluginsOptions): Promise<void>
