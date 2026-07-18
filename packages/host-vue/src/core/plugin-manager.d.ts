import type { App } from 'vue'
import type { Router, RouterHistory } from 'vue-router'
import type { I18n } from 'vue-i18n'
import { type AdminPlugin, type AdminRouteRecordRaw } from '@bag/core'
export interface CreateHostRouterOptions {
  routes: AdminRouteRecordRaw[]
  history?: RouterHistory
}
export declare const createHostRouter: ({ routes, history }: CreateHostRouterOptions) => Router
export interface BootstrapPluginsOptions {
  app: App
  router: Router
  plugins: AdminPlugin[]
  i18n?: I18n
}
export declare function bootstrapPlugins({
  app,
  router,
  plugins,
  i18n
}: BootstrapPluginsOptions): Promise<void>
