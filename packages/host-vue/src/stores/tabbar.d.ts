import type { RouteLocationNormalizedLoaded } from 'vue-router'
export interface TabItem {
  fullPath: string
  path: string
  name?: string
  cacheKey?: string
  title?: string
  noCache?: boolean
}
export declare const useTabBarStore: import('pinia').StoreDefinition<
  'tabbar',
  {
    tabs: import('@vueuse/core').RemovableRef<TabItem[]>
    enableTabCache: import('@vueuse/core').RemovableRef<boolean>
    enableTabPersist: import('@vueuse/core').RemovableRef<boolean>
    refreshingViews: string[]
  },
  {
    cachedViews: (
      state: {
        tabs: TabItem[]
        enableTabCache: boolean
        enableTabPersist: boolean
        refreshingViews: string[]
      } & import('pinia').PiniaCustomStateProperties<{
        tabs: import('@vueuse/core').RemovableRef<TabItem[]>
        enableTabCache: import('@vueuse/core').RemovableRef<boolean>
        enableTabPersist: import('@vueuse/core').RemovableRef<boolean>
        refreshingViews: string[]
      }>
    ) => string[]
  },
  {
    syncRefreshingViews(): void
    addTab(route: RouteLocationNormalizedLoaded): void
    removeTab(fullPath: string): void
    clearTabs(): void
    closeOtherTabs(fullPath: string): void
    closeLeftTabs(fullPath: string): void
    closeRightTabs(fullPath: string): void
    evictCache(fullPath: string): Promise<void>
    restoreCache(fullPath: string): void
  }
>
