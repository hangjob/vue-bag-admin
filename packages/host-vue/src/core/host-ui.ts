import { inject, type App, type Component, type FunctionalComponent, type InjectionKey } from 'vue'

export interface HostBrandingConfig {
  title: string
  compactTitle?: string
  logo?: string
  logoAlt?: string
  homePath?: string
  showTitle?: boolean
  badge?: string
}

export interface HostLayoutSlots {
  brand?: Component | FunctionalComponent
}

export interface HostMessageItem {
  id: string | number
  title: string
  time?: string
  read?: boolean
  icon?: string
  type?: string
  color?: string
  link?: string
  extra?: Record<string, unknown>
}

export interface HostMessageTab {
  key: string
  label: string
  emptyText?: string
}

export interface HostMessageCenterConfig {
  tabs?: HostMessageTab[]
  getList?: (tab: string) => Promise<HostMessageItem[]> | HostMessageItem[]
  getUnreadCount?: () => Promise<number> | number
  markAllRead?: (tab: string) => Promise<void> | void
  onItemClick?: (item: HostMessageItem, tab: string) => Promise<void> | void
  onViewAll?: (tab: string) => Promise<void> | void
}

export interface ResolvedHostMessageCenterConfig extends HostMessageCenterConfig {
  tabs: HostMessageTab[]
}

export interface HostUiConfig {
  branding?: Partial<HostBrandingConfig>
  messageCenter?: HostMessageCenterConfig
  slots?: HostLayoutSlots
}

export interface ResolvedHostUiConfig {
  branding: HostBrandingConfig
  messageCenter: ResolvedHostMessageCenterConfig
  slots: HostLayoutSlots
}

export const defaultHostBranding: HostBrandingConfig = {
  title: 'Vue Bag Admin',
  compactTitle: 'VBA',
  logoAlt: 'Vue Bag Admin',
  homePath: '/dashboard',
  showTitle: true
}

export const defaultHostMessageTabs: HostMessageTab[] = [
  { key: 'notify', label: '通知', emptyText: '暂无新通知' },
  { key: 'system', label: '系统', emptyText: '暂无系统消息' },
  { key: 'todo', label: '待办', emptyText: '暂无待办事项' }
]

const createDefaultHostMessages = (): Record<string, HostMessageItem[]> => ({
  notify: [
    {
      id: 1,
      title: '您有一个新的订单，请及时处理',
      time: '10分钟前',
      type: 'order',
      read: false,
      icon: '📦',
      color: 'bg-orange-100 dark:bg-orange-500/20 text-orange-500'
    },
    {
      id: 2,
      title: '库存预警：商品“高级旅行背包”库存不足',
      time: '1小时前',
      type: 'warning',
      read: false,
      icon: '⚠️',
      color: 'bg-rose-100 dark:bg-rose-500/20 text-rose-500'
    },
    {
      id: 3,
      title: '您的提现申请已通过',
      time: '昨天',
      type: 'success',
      read: true,
      icon: '💰',
      color: 'bg-green-100 dark:bg-green-500/20 text-green-500'
    }
  ],
  system: [
    {
      id: 1,
      title: '系统升级通知：今晚凌晨2点进行停机维护',
      time: '2天前',
      type: 'system',
      read: true,
      icon: '🔔',
      color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-500'
    }
  ],
  todo: []
})

const createDefaultMessageCenter = (): ResolvedHostMessageCenterConfig => {
  // 默认消息仅用于宿主演示，真实项目应在使用方传入自己的消息配置。
  const defaultMessages = createDefaultHostMessages()

  return {
    tabs: defaultHostMessageTabs.map((tab) => ({ ...tab })),
    getList: (tab) => (defaultMessages[tab] ?? []).map((item) => ({ ...item })),
    getUnreadCount: () =>
      Object.values(defaultMessages)
        .flat()
        .filter((item) => !item.read).length,
    markAllRead: (tab) => {
      ;(defaultMessages[tab] ?? []).forEach((item) => {
        item.read = true
      })
    }
  }
}

export const HOST_UI_CONFIG_KEY: InjectionKey<ResolvedHostUiConfig> = Symbol('bag-host-ui-config')

export function resolveHostUiConfig(config?: HostUiConfig): ResolvedHostUiConfig {
  const defaultMessageCenter = createDefaultMessageCenter()

  return {
    branding: {
      ...defaultHostBranding,
      ...config?.branding
    },
    messageCenter: {
      ...defaultMessageCenter,
      ...config?.messageCenter,
      tabs:
        config?.messageCenter?.tabs && config.messageCenter.tabs.length > 0
          ? config.messageCenter.tabs
          : defaultMessageCenter.tabs
    },
    slots: {
      ...config?.slots
    }
  }
}

export function setupHostUi(app: App, config?: HostUiConfig) {
  app.provide(HOST_UI_CONFIG_KEY, resolveHostUiConfig(config))
}

export function useHostUiConfig() {
  return inject(HOST_UI_CONFIG_KEY, resolveHostUiConfig())
}
