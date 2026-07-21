import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, Router, RouterHistory } from 'vue-router'
import { createDiscreteApi } from 'naive-ui'
import {
  type AdminPlugin,
  type AdminRouteRecordRaw,
  type AccessMode,
  type MenuConfig,
  type PluginStateProvider,
  isPluginEnabled,
  registerRuntimePlugins,
  setPluginStateProvider
} from '@bag/core'
import { useMenuStore } from '../stores/menu'
import { useTabBarStore } from '../stores/tabbar'
import { useUserStore } from '../stores/user'
import { setupHostUi, type HostUiConfig } from './host-ui'
import {
  getHostNavigationConfig,
  setupHostNavigation,
  type HostNavigationConfig
} from './navigation'

const { loadingBar } = createDiscreteApi(['loadingBar'])

export interface CreateHostRouterOptions {
  routes: AdminRouteRecordRaw[]
  history?: RouterHistory
  navigation?: Partial<HostNavigationConfig>
}

export const createHostRouter = ({ routes, history, navigation }: CreateHostRouterOptions) => {
  setupHostNavigation(navigation)
  const router = createRouter({
    history: history ?? createWebHashHistory(),
    routes: routes as RouteRecordRaw[]
  })

  router.beforeEach(async (to) => {
    const user = useUserStore()
    loadingBar.start()

    const isPublic = Boolean(to.meta?.public)
    if (!isPublic && !user.isAuthenticated) {
      return { path: getHostNavigationConfig().loginPath, query: { redirect: to.fullPath } }
    }

    if (!isPublic && user.isAuthenticated && !user.profileLoaded) {
      try {
        await user.fetchProfile()
      } catch {
        user.logout()
        return { path: getHostNavigationConfig().loginPath, query: { redirect: to.fullPath } }
      }
    }

    const roles = to.meta?.roles as string[] | undefined
    const permissions = to.meta?.permissions as string[] | undefined
    const roleMode = to.meta?.roleMode as AccessMode | undefined
    const permissionMode = to.meta?.permissionMode as AccessMode | undefined
    const policy = to.meta?.policy
    if (
      !user.hasRole(roles, roleMode) ||
      !user.hasPermission(permissions, permissionMode) ||
      !(typeof policy === 'function'
        ? policy({ roles: user.roles, permissions: user.permissions, user: user.user, route: to })
        : true)
    ) {
      return { path: getHostNavigationConfig().forbiddenPath }
    }

    return true
  })

  router.afterEach((to) => {
    loadingBar.finish()
    const tabbarStore = useTabBarStore()
    const hiddenPaths = router
      .getRoutes()
      .filter((route) => route.meta?.layout === 'blank' || route.meta?.hideInTabBar === true)
      .map((route) => route.path)

    tabbarStore.addTab(to)
    // 顺手清理 localStorage 里历史残留的隐藏页 tab，例如 login / 403。
    tabbarStore.removeTabsByPaths(hiddenPaths)
  })

  router.onError(() => {
    loadingBar.error()
  })

  return router
}

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
  pluginStateProvider?: PluginStateProvider
}

export async function bootstrapPlugins({
  app,
  router,
  plugins,
  i18n,
  ui,
  pluginStateProvider
}: BootstrapPluginsOptions) {
  const resolvedPlugins = plugins ?? []
  if (pluginStateProvider) {
    setPluginStateProvider(pluginStateProvider)
  }
  setupHostUi(app, ui)
  registerRuntimePlugins(resolvedPlugins)
  const globalMenus: MenuConfig[] = []
  const enabledPlugins = resolveEnabledPlugins(resolvedPlugins)
  assertPluginConflicts(
    enabledPlugins,
    router.getRoutes().map((route) => ({
      path: route.path,
      name: typeof route.name === 'string' ? route.name : undefined
    }))
  )
  const enabledPluginIds = enabledPlugins.map((plugin) => plugin.id)

  for (const plugin of enabledPlugins) {
    if (plugin.routes) {
      plugin.routes.forEach((route) => router.addRoute(route as RouteRecordRaw))
    }

    if (plugin.menus) {
      globalMenus.push(...plugin.menus)
    }

    if (plugin.locales && i18n) {
      ;(Object.keys(plugin.locales) as Array<'zh-CN' | 'en'>).forEach((lang) => {
        const messages = plugin.locales?.[lang]
        if (messages) {
          i18n.global.mergeLocaleMessage(lang, messages)
        }
      })
    }

    if (plugin.install) {
      await plugin.install(app, { app, router, enabledPluginIds })
    }
  }

  useMenuStore().setMenus(globalMenus)
  app.use(router)
}

const resolveEnabledPlugins = (plugins: AdminPlugin[]) => {
  const sortedPlugins = [...plugins].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  const enabledPlugins = sortedPlugins.filter(isPluginEnabled)
  const enabledIds = new Set(enabledPlugins.map((plugin) => plugin.id))

  enabledPlugins.forEach((plugin) => {
    const missingDependencies = (plugin.dependsOn ?? []).filter((id) => !enabledIds.has(id))
    if (missingDependencies.length > 0) {
      throw new Error(
        `[Plugin:${plugin.id}] missing dependencies: ${missingDependencies.join(', ')}`
      )
    }
  })

  return enabledPlugins
}

const joinRoutePath = (parentPath: string, routePath: string) => {
  if (routePath.startsWith('/')) return routePath
  if (!parentPath) return routePath
  return `${parentPath.replace(/\/+$/, '')}/${routePath.replace(/^\/+/, '')}`
}

const walkRoutes = (routes: AdminPlugin['routes'] = [], parentPath = '') => {
  const entries: Array<{ path: string; name?: string | symbol | null }> = []
  routes.forEach((route) => {
    const path = joinRoutePath(parentPath, route.path)
    entries.push({ path, name: route.name })
    if (route.children?.length) {
      entries.push(...walkRoutes(route.children, path))
    }
  })
  return entries
}

const walkMenus = (menus: MenuConfig[] = []) => {
  const paths: string[] = []
  menus.forEach((menu) => {
    paths.push(menu.path)
    if (menu.children?.length) {
      paths.push(...walkMenus(menu.children))
    }
  })
  return paths
}

const assertPluginConflicts = (
  plugins: AdminPlugin[],
  existingRoutes: Array<{ path: string; name?: string }>
) => {
  const pluginIds = new Set<string>()
  const routePaths = new Set(existingRoutes.map((route) => route.path))
  const routeNames = new Set(existingRoutes.map((route) => route.name).filter(Boolean) as string[])
  const menuPaths = new Set<string>()

  plugins.forEach((plugin) => {
    if (pluginIds.has(plugin.id)) {
      throw new Error(`[Plugin] duplicate plugin id: ${plugin.id}`)
    }
    pluginIds.add(plugin.id)

    walkRoutes(plugin.routes).forEach((route) => {
      if (routePaths.has(route.path)) {
        throw new Error(`[Plugin:${plugin.id}] duplicate route path: ${route.path}`)
      }
      routePaths.add(route.path)

      if (route.name && typeof route.name === 'string') {
        if (routeNames.has(route.name)) {
          throw new Error(`[Plugin:${plugin.id}] duplicate route name: ${route.name}`)
        }
        routeNames.add(route.name)
      }
    })

    walkMenus(plugin.menus).forEach((path) => {
      if (menuPaths.has(path)) {
        throw new Error(`[Plugin:${plugin.id}] duplicate menu path: ${path}`)
      }
      menuPaths.add(path)
    })
  })
}
