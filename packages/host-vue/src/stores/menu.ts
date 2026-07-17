import { defineStore } from 'pinia'
import type { MenuConfig } from '@bag/core'
import { useLocalStorage } from '@vueuse/core'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [] as MenuConfig[],
    // 使用 vueuse 的 useLocalStorage，自动处理持久化和响应式
    collapsed: useLocalStorage('bag.menu.collapsed', false),
    expandedKeys: useLocalStorage<string[]>('bag.menu.expandedKeys', []),
    // 新增：用于移动端的抽屉菜单状态
    mobileDrawerOpen: false
  }),
  actions: {
    setMenus(menus: MenuConfig[]) {
      this.menus = menus
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    setCollapsed(val: boolean) {
      this.collapsed = val
    },
    toggleMobileDrawer() {
      this.mobileDrawerOpen = !this.mobileDrawerOpen
    },
    setMobileDrawer(val: boolean) {
      this.mobileDrawerOpen = val
    },
    setExpandedKeys(keys: string[]) {
      this.expandedKeys = keys
    }
  }
})
