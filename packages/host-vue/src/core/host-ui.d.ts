import type { App, Component, FunctionalComponent, InjectionKey } from 'vue'
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
export declare const defaultHostBranding: HostBrandingConfig
export declare const defaultHostMessageTabs: HostMessageTab[]
export declare const HOST_UI_CONFIG_KEY: InjectionKey<ResolvedHostUiConfig>
export declare function resolveHostUiConfig(config?: HostUiConfig): ResolvedHostUiConfig
export declare function setupHostUi(app: App, config?: HostUiConfig): void
export declare function useHostUiConfig(): ResolvedHostUiConfig
