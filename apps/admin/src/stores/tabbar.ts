import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useSessionStorage, useLocalStorage } from '@vueuse/core'

export interface TabItem {
  fullPath: string
  path: string
  name?: string
  title?: string
  noCache?: boolean
}

export const useTabBarStore = defineStore('tabbar', {
  state: () => ({
    // 默认持久化，并且支持是否开启缓存功能
    tabs: useSessionStorage<TabItem[]>('bag.admin.tabs', []),
    // 因为设置可能来自于 localStorage, 所以这里需要从 localStorage 同步状态
    enableTabCache: useLocalStorage<boolean>('bag.admin.enableTabCache', true),
    enableTabPersist: useLocalStorage<boolean>('bag.admin.enableTabPersist', true)
  }),
  getters: {
    cachedViews: (state) => {
      // 如果全局关闭了缓存，则返回空数组
      if (!state.enableTabCache) return []
      return state.tabs
        .filter(tab => !tab.noCache && tab.name)
        .map(tab => tab.name as string)
    }
  },
  actions: {
    addTab(route: RouteLocationNormalizedLoaded) {
      // 忽略不需要加入 tab 的页面，比如重定向、登录页等
      if (['Login', 'NotFound', 'Forbidden', 'Redirect'].includes(route.name as string)) return
      if (!route.name) return

      const isExists = this.tabs.some((tab) => tab.fullPath === route.fullPath)
      if (!isExists) {
        const title = route.meta?.title as string | undefined
        const noCache = route.meta?.noCache as boolean | undefined
        
        this.tabs.push({
          fullPath: route.fullPath,
          path: route.path,
          name: route.name as string,
          title: title || (route.name as string),
          noCache: !!noCache,
        })
      }
      
      // 如果不启用持久化，可以在每次刷新时通过其他机制清空，但通常我们可以只操作 enableTabPersist 来控制
      if (!this.enableTabPersist) {
        // 如果关闭了持久化，我们可以通过在系统启动时判断并清空
      }
    },
    removeTab(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        this.tabs.splice(index, 1)
      }
    },
    clearTabs() {
      // 保留首页，清空其他
      this.tabs = this.tabs.filter(tab => tab.path === '/dashboard')
    },
    closeOtherTabs(fullPath: string) {
      this.tabs = this.tabs.filter(tab => tab.fullPath === fullPath || tab.path === '/dashboard')
    },
    closeLeftTabs(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        // 保留当前及其右侧的，还要保留 /dashboard (通常在第一个)
        this.tabs = this.tabs.filter((tab, i) => i >= index || tab.path === '/dashboard')
      }
    },
    closeRightTabs(fullPath: string) {
      const index = this.tabs.findIndex((tab) => tab.fullPath === fullPath)
      if (index !== -1) {
        // 保留当前及其左侧的
        this.tabs = this.tabs.filter((tab, i) => i <= index || tab.path === '/dashboard')
      }
    }
  }
})
