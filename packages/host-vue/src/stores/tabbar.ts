import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

export interface TabItem {
  fullPath: string
  path: string
  name?: string
  cacheKey?: string
  title?: string
  noCache?: boolean
}

const tabStorageKey = 'bag.admin.tabs'

export const useTabBarStore = defineStore('tabbar', {
  state: () => ({
    // 标签页列表需要跨刷新和重开浏览器恢复，因此使用 localStorage 持久化。
    tabs: useLocalStorage<TabItem[]>(tabStorageKey, []),
    // 设置项可能由宿主或独立插件页修改，因此统一走 localStorage 做同步。
    enableTabCache: useLocalStorage<boolean>('bag.admin.enableTabCache', true),
    enableTabPersist: useLocalStorage<boolean>('bag.admin.enableTabPersist', true),
    // 刷新页面时会临时把目标视图从 KeepAlive include 中移除，确保重新挂载。
    refreshingViews: [] as string[]
  }),
  getters: {
    cachedViews: (state) => {
      if (!state.enableTabCache) return []

      return [
        ...new Set(
          state.tabs
            .filter((tab) => {
              const cacheKey = tab.cacheKey || tab.name
              return !tab.noCache && cacheKey && !state.refreshingViews.includes(cacheKey)
            })
            .map((tab) => (tab.cacheKey || tab.name) as string)
        )
      ]
    }
  },
  actions: {
    syncRefreshingViews() {
      const activeNames = new Set(
        this.tabs.map((tab) => tab.cacheKey || tab.name).filter(Boolean) as string[]
      )
      this.refreshingViews = this.refreshingViews.filter((name) => activeNames.has(name))
    },
    addTab(route: RouteLocationNormalizedLoaded) {
      // 忽略不需要加入 tab 的页面，比如重定向、登录页等
      if (['Login', 'NotFound', 'Forbidden', 'Redirect'].includes(route.name as string)) return
      if (!route.name) return

      const isExists = this.tabs.some((tab) => tab.fullPath === route.fullPath)
      if (!isExists) {
        const title = route.meta?.title as string | undefined
        const noCache = route.meta?.noCache as boolean | undefined
        const cacheKey = route.meta?.cacheKey as string | undefined

        this.tabs.push({
          fullPath: route.fullPath,
          path: route.path,
          name: route.name as string,
          cacheKey,
          title: title || (route.name as string),
          noCache: !!noCache
        })
      }
    },
    removeTab(fullPath: string) {
      const tab = this.tabs.find((item) => item.fullPath === fullPath)
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        this.tabs.splice(index, 1)
      }
      const cacheKey = tab?.cacheKey || tab?.name
      if (cacheKey) {
        this.refreshingViews = this.refreshingViews.filter((name) => name !== cacheKey)
      }
    },
    clearTabs() {
      this.refreshingViews = []
      this.tabs = this.tabs.filter((tab) => tab.path === '/dashboard')
    },
    closeOtherTabs(fullPath: string) {
      this.tabs = this.tabs.filter((tab) => tab.fullPath === fullPath || tab.path === '/dashboard')
      this.syncRefreshingViews()
    },
    closeLeftTabs(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        // 保留当前及其右侧的，还要保留 /dashboard (通常在第一个)
        this.tabs = this.tabs.filter((tab, i) => i >= index || tab.path === '/dashboard')
        this.syncRefreshingViews()
      }
    },
    closeRightTabs(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        // 保留当前及其左侧的
        this.tabs = this.tabs.filter((tab, i) => i <= index || tab.path === '/dashboard')
        this.syncRefreshingViews()
      }
    },
    async evictCache(fullPath: string) {
      const tab = this.tabs.find((item) => item.fullPath === fullPath)
      const cacheKey = tab?.cacheKey || tab?.name
      if (!cacheKey || tab.noCache) return
      if (!this.refreshingViews.includes(cacheKey)) {
        this.refreshingViews.push(cacheKey)
      }

      await nextTick()
    },
    restoreCache(fullPath: string) {
      const tab = this.tabs.find((item) => item.fullPath === fullPath)
      const cacheKey = tab?.cacheKey || tab?.name
      if (!cacheKey) return
      this.refreshingViews = this.refreshingViews.filter((name) => name !== cacheKey)
    }
  }
})
