import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
import { getHostNavigationConfig } from '../core/navigation'

export interface TabItem {
  fullPath: string
  path: string
  name?: string
  cacheKey?: string
  title?: string
  noCache?: boolean
}

const tabStorageKey = 'bag.admin.tabs'

const shouldHideInTabBar = (route: RouteLocationNormalizedLoaded) => {
  return route.meta?.layout === 'blank' || route.meta?.hideInTabBar === true
}

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
      // tab 是否显示统一由路由 meta 控制，避免业务侧改路由名后过滤失效。
      if (shouldHideInTabBar(route)) return
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
    removeTabsByPaths(paths: string[]) {
      if (paths.length === 0) return

      const hiddenPaths = new Set(paths)
      this.tabs = this.tabs.filter((tab) => !hiddenPaths.has(tab.path))
      this.syncRefreshingViews()
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
      const { homePath } = getHostNavigationConfig()
      this.tabs = this.tabs.filter((tab) => tab.path === homePath)
    },
    closeOtherTabs(fullPath: string) {
      const { homePath } = getHostNavigationConfig()
      this.tabs = this.tabs.filter((tab) => tab.fullPath === fullPath || tab.path === homePath)
      this.syncRefreshingViews()
    },
    closeLeftTabs(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        // 保留当前及其右侧的，还要保留首页 (通常在第一个)
        const { homePath } = getHostNavigationConfig()
        this.tabs = this.tabs.filter((tab, i) => i >= index || tab.path === homePath)
        this.syncRefreshingViews()
      }
    },
    closeRightTabs(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        // 保留当前及其左侧的
        const { homePath } = getHostNavigationConfig()
        this.tabs = this.tabs.filter((tab, i) => i <= index || tab.path === homePath)
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
