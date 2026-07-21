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
  permissionCount: number
  settingCount: number
  contributionCount: number
}

const disabledPluginsStorageKey = 'bag.admin.disabledPlugins'
const runtimePlugins = new Map<string, AdminPlugin>()

export interface PluginStateProvider {
  getDisabledPluginIds: () => string[]
  setPluginEnabledState: (pluginId: string, enabled: boolean) => void
}

const countRoutes = (routes: AdminPlugin['routes'] = []): number =>
  routes.reduce((total, route) => total + 1 + countRoutes(route.children), 0)

const countMenus = (menus: AdminPlugin['menus'] = []): number =>
  menus.reduce((total, menu) => total + 1 + countMenus(menu.children), 0)

const countContributions = (plugin: AdminPlugin) =>
  Object.values(plugin.contributes ?? {}).reduce((total, entries) => total + entries.length, 0)

export const registerRuntimePlugins = (plugins: AdminPlugin[]) => {
  runtimePlugins.clear()
  plugins.forEach((plugin) => {
    runtimePlugins.set(plugin.id, plugin)
  })
}

const localStoragePluginStateProvider: PluginStateProvider = {
  getDisabledPluginIds: () => {
    if (typeof window === 'undefined') return []
    try {
      const raw = window.localStorage.getItem(disabledPluginsStorageKey)
      const parsed = raw ? JSON.parse(raw) : []
      return Array.isArray(parsed)
        ? parsed.filter((id): id is string => typeof id === 'string')
        : []
    } catch {
      return []
    }
  },
  setPluginEnabledState: (pluginId, enabled) => {
    if (typeof window === 'undefined') return

    const disabledPluginIds = new Set(pluginStateProvider.getDisabledPluginIds())
    if (enabled) {
      disabledPluginIds.delete(pluginId)
    } else {
      disabledPluginIds.add(pluginId)
    }

    window.localStorage.setItem(disabledPluginsStorageKey, JSON.stringify([...disabledPluginIds]))
  }
}

let pluginStateProvider: PluginStateProvider = localStoragePluginStateProvider

export const setPluginStateProvider = (provider: PluginStateProvider) => {
  pluginStateProvider = provider
}

export const resetPluginStateProvider = () => {
  pluginStateProvider = localStoragePluginStateProvider
}

export const getStoredDisabledPluginIds = () => {
  if (typeof window === 'undefined') return []
  return pluginStateProvider.getDisabledPluginIds()
}

export const isPluginEnabled = (plugin: AdminPlugin) => {
  const disabledPluginIds = getStoredDisabledPluginIds()
  const enabledByConfig = plugin.enabled !== false
  return enabledByConfig && !disabledPluginIds.includes(plugin.id)
}

export const setPluginEnabledState = (pluginId: string, enabled: boolean) => {
  pluginStateProvider.setPluginEnabledState(pluginId, enabled)
}

export const listRuntimePlugins = (): PluginRuntimeItem[] => {
  return [...runtimePlugins.values()]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((plugin) => ({
      id: plugin.id,
      name: plugin.name,
      version: plugin.version,
      order: plugin.order ?? 0,
      enabledByConfig: plugin.enabled !== false,
      enabled: isPluginEnabled(plugin),
      dependsOn: plugin.dependsOn ?? [],
      routeCount: countRoutes(plugin.routes),
      menuCount: countMenus(plugin.menus),
      permissionCount: plugin.permissions?.length ?? 0,
      settingCount: plugin.settings?.length ?? 0,
      contributionCount: countContributions(plugin)
    }))
}
