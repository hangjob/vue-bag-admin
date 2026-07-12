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

const disabledPluginsStorageKey = 'bag.admin.disabledPlugins'
const runtimePlugins = new Map<string, AdminPlugin>()

const countRoutes = (routes: AdminPlugin['routes'] = []) =>
  routes.reduce((total, route) => total + 1 + countRoutes(route.children), 0)

const countMenus = (menus: AdminPlugin['menus'] = []) =>
  menus.reduce((total, menu) => total + 1 + countMenus(menu.children), 0)

export const registerRuntimePlugins = (plugins: AdminPlugin[]) => {
  runtimePlugins.clear()
  plugins.forEach((plugin) => {
    runtimePlugins.set(plugin.id, plugin)
  })
}

export const getStoredDisabledPluginIds = () => {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(disabledPluginsStorageKey)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

export const isPluginEnabled = (plugin: AdminPlugin) => {
  const disabledPluginIds = getStoredDisabledPluginIds()
  const enabledByConfig = plugin.enabled !== false
  return enabledByConfig && !disabledPluginIds.includes(plugin.id)
}

export const setPluginEnabledState = (pluginId: string, enabled: boolean) => {
  if (typeof window === 'undefined') return

  const disabledPluginIds = new Set(getStoredDisabledPluginIds())
  if (enabled) {
    disabledPluginIds.delete(pluginId)
  } else {
    disabledPluginIds.add(pluginId)
  }

  window.localStorage.setItem(disabledPluginsStorageKey, JSON.stringify([...disabledPluginIds]))
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
      menuCount: countMenus(plugin.menus)
    }))
}
