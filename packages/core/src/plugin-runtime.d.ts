import type { AdminPlugin } from './types/plugin'
export interface PluginRuntimeItem {
  id: string
  name: string
  version: string
  order: number
  enabledByConfig: boolean
  enabled: boolean
  dependsOn: string[]
  routeCount: number
  menuCount: number
}
export declare const registerRuntimePlugins: (plugins: AdminPlugin[]) => void
export declare const getStoredDisabledPluginIds: () => string[]
export declare const isPluginEnabled: (plugin: AdminPlugin) => boolean
export declare const setPluginEnabledState: (pluginId: string, enabled: boolean) => void
export declare const listRuntimePlugins: () => PluginRuntimeItem[]
