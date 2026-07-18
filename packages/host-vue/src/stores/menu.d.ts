import type { MenuConfig } from '@bag/core'
export declare const useMenuStore: import('pinia').StoreDefinition<
  'menu',
  {
    menus: MenuConfig[]
    collapsed: import('@vueuse/core').RemovableRef<boolean>
    expandedKeys: import('@vueuse/core').RemovableRef<string[]>
    mobileDrawerOpen: boolean
  },
  {},
  {
    setMenus(menus: MenuConfig[]): void
    toggleCollapsed(): void
    setCollapsed(val: boolean): void
    toggleMobileDrawer(): void
    setMobileDrawer(val: boolean): void
    setExpandedKeys(keys: string[]): void
  }
>
