import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import i18n from '../locales'
import type { AdminPlugin } from '@bag/core'
import { useMenuStore } from '../stores/menu'
import { useUserStore } from '../stores/user'
import { useTabBarStore } from '../stores/tabbar'
import { createDiscreteApi } from 'naive-ui'
const { loadingBar } = createDiscreteApi(['loadingBar'])

// 假设我们有一个默认的路由
const defaultRoutes: RouteRecordRaw[] = [
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
  routes: defaultRoutes
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
  const globalMenus: any[] = []

  for (const plugin of plugins) {
    // 1. 注册路由
    if (plugin.routes) {
      plugin.routes.forEach((route) => router.addRoute(route))
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
      await plugin.install(app, { router })
    }
  }

  useMenuStore().setMenus(globalMenus)
  app.use(router)
}
