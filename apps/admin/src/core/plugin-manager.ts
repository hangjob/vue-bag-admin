import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import i18n from '../locales'
import {
  type AdminPlugin,
  type AdminRouteRecordRaw,
  type MenuConfig,
  isPluginEnabled,
  registerRuntimePlugins
} from '@bag/core'
import { useMenuStore } from '../stores/menu'
import { useUserStore } from '../stores/user'
import { useTabBarStore } from '../stores/tabbar'
import { createDiscreteApi } from 'naive-ui'
const { loadingBar } = createDiscreteApi(['loadingBar'])

// 假设我们有一个默认的路由
const defaultRoutes: AdminRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'blank',
      public: true
    }
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('../views/Forbidden.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      title: 'menu.dashboard',
      layout: 'default'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: '个人中心',
      layout: 'default'
    }
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import('../views/Redirect.vue'),
    meta: {
      layout: 'blank',
      public: true,
      hidden: true,
      noCache: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      layout: 'default',
      public: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoutes as RouteRecordRaw[]
})

router.beforeEach(async (to) => {
  const user = useUserStore()
  loadingBar.start()
  const isPublic = Boolean(to.meta?.public)
  if (!isPublic && !user.isAuthenticated) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  if (!isPublic && user.isAuthenticated && !user.profileLoaded) {
    try {
      await user.fetchProfile()
    } catch {
      user.logout()
      return { path: '/login', query: { redirect: to.fullPath } }
    }
  }

  const roles = to.meta?.roles as string[] | undefined
  const permissions = to.meta?.permissions as string[] | undefined
  if (!user.hasRole(roles) || !user.hasPermission(permissions)) {
    return { path: '/403' }
  }
  return true
})

router.afterEach((to) => {
  loadingBar.finish()
  const tabStore = useTabBarStore()
  tabStore.addTab(to)
})

router.onError(() => {
  loadingBar.error()
})

export async function bootstrapPlugins(app: App, plugins: AdminPlugin[]) {
  registerRuntimePlugins(plugins)
  const globalMenus: MenuConfig[] = []
  const enabledPlugins = resolveEnabledPlugins(plugins)
  assertPluginConflicts(enabledPlugins)
  const enabledPluginIds = enabledPlugins.map((plugin) => plugin.id)

  for (const plugin of enabledPlugins) {
    // 1. 注册路由
    if (plugin.routes) {
      plugin.routes.forEach((route) => router.addRoute(route as RouteRecordRaw))
    }

    // 2. 收集菜单
    if (plugin.menus) {
      globalMenus.push(...plugin.menus)
    }

    // 3. 动态合并语言包
    if (plugin.locales) {
      ;(Object.keys(plugin.locales) as Array<'zh-CN' | 'en'>).forEach((lang) => {
        const messages = plugin.locales?.[lang]
        if (messages) i18n.global.mergeLocaleMessage(lang, messages)
      })
    }

    // 4. 执行插件安装钩子
    if (plugin.install) {
      await plugin.install(app, { router, enabledPluginIds })
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

const walkRoutes = (routes: AdminRouteRecordRaw[] = []) => {
  const entries: Array<{ path: string; name?: string | symbol | null }> = []
  routes.forEach((route) => {
    entries.push({ path: route.path, name: route.name })
    if (route.children?.length) {
      entries.push(...walkRoutes(route.children))
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

const assertPluginConflicts = (plugins: AdminPlugin[]) => {
  const pluginIds = new Set<string>()
  const routePaths = new Set<string>()
  const routeNames = new Set<string>()
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
