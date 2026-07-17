import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export type ThemeMode = 'light' | 'dark'
export type ContentWidthMode = 'fluid' | 'compact'
export type AppearancePresetKey = 'default' | 'compact' | 'custom'

type ThemePreset = {
  name: string
  value: string
  colorClass: string
}

export type AppearancePreset = {
  key: Exclude<AppearancePresetKey, 'custom'>
  name: string
  description: string
  theme: ThemeMode
  themeColor: string
  contentWidth: ContentWidthMode
  showTabBar: boolean
  showFooter: boolean
  enablePageTransition: boolean
  menuCollapsed: boolean
  enableTabCache: boolean
  enableTabPersist: boolean
}

export const themePresets: ThemePreset[] = [
  { name: '默认橘', value: '#f97316', colorClass: 'bg-orange-500' },
  { name: '科技蓝', value: '#3b82f6', colorClass: 'bg-blue-500' },
  { name: '护眼绿', value: '#10b981', colorClass: 'bg-emerald-500' },
  { name: '浪漫紫', value: '#8b5cf6', colorClass: 'bg-violet-500' },
  { name: '玫瑰红', value: '#f43f5e', colorClass: 'bg-rose-500' }
]

const themeColorMap: Record<string, { hover: string; pressed: string }> = {
  '#f97316': { hover: '#fb923c', pressed: '#ea580c' },
  '#3b82f6': { hover: '#60a5fa', pressed: '#2563eb' },
  '#10b981': { hover: '#34d399', pressed: '#059669' },
  '#8b5cf6': { hover: '#a78bfa', pressed: '#7c3aed' },
  '#f43f5e': { hover: '#fb7185', pressed: '#e11d48' }
}

const defaultThemeColor = '#f97316'

export const appearancePresets: AppearancePreset[] = [
  {
    key: 'default',
    name: '默认后台',
    description: '适合日常后台管理，保留完整导航与标签栏。',
    theme: 'light',
    themeColor: '#f97316',
    contentWidth: 'fluid',
    showTabBar: true,
    showFooter: true,
    enablePageTransition: true,
    menuCollapsed: false,
    enableTabCache: true,
    enableTabPersist: true
  },
  {
    key: 'compact',
    name: '紧凑工作台',
    description: '更聚焦内容区，适合高频操作与数据录入。',
    theme: 'light',
    themeColor: '#3b82f6',
    contentWidth: 'fluid',
    showTabBar: true,
    showFooter: false,
    enablePageTransition: false,
    menuCollapsed: true,
    enableTabCache: true,
    enableTabPersist: true
  }
]

const getAppearancePreset = (presetKey: Exclude<AppearancePresetKey, 'custom'>) =>
  appearancePresets.find((preset) => preset.key === presetKey)

export const useAppConfigStore = defineStore('app-config', {
  state: () => ({
    presetKey: useLocalStorage<AppearancePresetKey>('bag.layout.presetKey', 'default'),
    theme: useLocalStorage<ThemeMode>('bag.theme', 'light'),
    themeColor: useLocalStorage('bag.themeColor', defaultThemeColor),
    contentWidth: useLocalStorage<ContentWidthMode>('bag.layout.contentWidth', 'fluid'),
    showTabBar: useLocalStorage('bag.layout.showTabBar', true),
    showFooter: useLocalStorage('bag.layout.showFooter', true),
    enablePageTransition: useLocalStorage('bag.layout.enablePageTransition', true),
    settingsDrawerOpen: false
  }),
  getters: {
    isDarkTheme: (state) => state.theme === 'dark'
  },
  actions: {
    ensureValidPresetKey() {
      if (this.presetKey === 'custom') return

      const isValidPreset = appearancePresets.some((preset) => preset.key === this.presetKey)
      if (!isValidPreset) {
        this.presetKey = 'default'
      }
    },
    syncPresetState() {
      this.ensureValidPresetKey()
      if (this.presetKey === 'custom') return

      const preset = getAppearancePreset(this.presetKey)
      if (!preset) return

      this.theme = preset.theme
      this.themeColor = preset.themeColor
      this.contentWidth = preset.contentWidth
      this.showTabBar = preset.showTabBar
      this.showFooter = preset.showFooter
      this.enablePageTransition = preset.enablePageTransition
    },
    markAsCustom() {
      this.presetKey = 'custom'
    },
    setTheme(theme: ThemeMode) {
      this.markAsCustom()
      this.theme = theme
      this.applyThemeClass()
    },
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    },
    setThemeColor(color: string) {
      this.markAsCustom()
      this.themeColor = color
      this.applyThemeColorVariables()
    },
    setContentWidth(mode: ContentWidthMode) {
      this.markAsCustom()
      this.contentWidth = mode
    },
    setShowTabBar(visible: boolean) {
      this.markAsCustom()
      this.showTabBar = visible
    },
    setShowFooter(visible: boolean) {
      this.markAsCustom()
      this.showFooter = visible
    },
    setEnablePageTransition(enabled: boolean) {
      this.markAsCustom()
      this.enablePageTransition = enabled
    },
    setPresetKey(presetKey: AppearancePresetKey) {
      this.presetKey = presetKey
    },
    openSettingsDrawer() {
      this.settingsDrawerOpen = true
    },
    closeSettingsDrawer() {
      this.settingsDrawerOpen = false
    },
    resetAppearance() {
      this.presetKey = 'default'
      this.applyAppearance()
    },
    applyAppearance() {
      this.syncPresetState()
      this.applyThemeClass()
      this.applyThemeColorVariables()
    },
    applyThemeClass() {
      if (typeof document === 'undefined') return
      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    applyThemeColorVariables() {
      if (typeof document === 'undefined') return

      const palette = themeColorMap[this.themeColor] ?? {
        hover: this.themeColor,
        pressed: this.themeColor
      }

      document.documentElement.style.setProperty('--primary-color', this.themeColor)
      document.documentElement.style.setProperty('--primary-color-400', palette.hover)
      document.documentElement.style.setProperty('--primary-color-600', palette.pressed)
    }
  }
})
