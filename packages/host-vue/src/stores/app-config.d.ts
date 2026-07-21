import type { ThemeTokens } from '../core/theme-tokens'

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
export declare const themePresets: ThemePreset[]
export declare const appearancePresets: AppearancePreset[]
export declare const useAppConfigStore: import('pinia').StoreDefinition<
  'app-config',
  {
    presetKey: import('@vueuse/core').RemovableRef<AppearancePresetKey>
    theme: import('@vueuse/core').RemovableRef<ThemeMode>
    themeColor: import('@vueuse/core').RemovableRef<string>
    contentWidth: import('@vueuse/core').RemovableRef<ContentWidthMode>
    showTabBar: import('@vueuse/core').RemovableRef<boolean>
    showFooter: import('@vueuse/core').RemovableRef<boolean>
    enablePageTransition: import('@vueuse/core').RemovableRef<boolean>
    settingsDrawerOpen: boolean
  },
  {
    isDarkTheme: (
      state: {
        presetKey: AppearancePresetKey
        theme: ThemeMode
        themeColor: string
        contentWidth: ContentWidthMode
        showTabBar: boolean
        showFooter: boolean
        enablePageTransition: boolean
        settingsDrawerOpen: boolean
      } & import('pinia').PiniaCustomStateProperties<{
        presetKey: import('@vueuse/core').RemovableRef<AppearancePresetKey>
        theme: import('@vueuse/core').RemovableRef<ThemeMode>
        themeColor: import('@vueuse/core').RemovableRef<string>
        contentWidth: import('@vueuse/core').RemovableRef<ContentWidthMode>
        showTabBar: import('@vueuse/core').RemovableRef<boolean>
        showFooter: import('@vueuse/core').RemovableRef<boolean>
        enablePageTransition: import('@vueuse/core').RemovableRef<boolean>
        settingsDrawerOpen: boolean
      }>
    ) => boolean
    themeTokens: (
      state: {
        presetKey: AppearancePresetKey
        theme: ThemeMode
        themeColor: string
        contentWidth: ContentWidthMode
        showTabBar: boolean
        showFooter: boolean
        enablePageTransition: boolean
        settingsDrawerOpen: boolean
      } & import('pinia').PiniaCustomStateProperties<{
        presetKey: import('@vueuse/core').RemovableRef<AppearancePresetKey>
        theme: import('@vueuse/core').RemovableRef<ThemeMode>
        themeColor: import('@vueuse/core').RemovableRef<string>
        contentWidth: import('@vueuse/core').RemovableRef<ContentWidthMode>
        showTabBar: import('@vueuse/core').RemovableRef<boolean>
        showFooter: import('@vueuse/core').RemovableRef<boolean>
        enablePageTransition: import('@vueuse/core').RemovableRef<boolean>
        settingsDrawerOpen: boolean
      }>
    ) => ThemeTokens
  },
  {
    ensureValidPresetKey(): void
    syncPresetState(): void
    markAsCustom(): void
    setTheme(theme: ThemeMode): void
    toggleTheme(): void
    setThemeColor(color: string): void
    setContentWidth(mode: ContentWidthMode): void
    setShowTabBar(visible: boolean): void
    setShowFooter(visible: boolean): void
    setEnablePageTransition(enabled: boolean): void
    setPresetKey(presetKey: AppearancePresetKey): void
    openSettingsDrawer(): void
    closeSettingsDrawer(): void
    resetAppearance(): void
    applyAppearance(): void
    applyThemeClass(): void
    applyThemeColorVariables(): void
  }
>
export {}
