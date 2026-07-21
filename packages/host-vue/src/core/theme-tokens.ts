export type ThemeTokenMode = 'light' | 'dark'

export type ThemeColorTokens = {
  primary: string
  primaryHover: string
  primaryPressed: string
  primarySuppl: string
  primarySoft: string
  primarySofter: string
  accent: string
  accentHover: string
  accentSoft: string
  success: string
  warning: string
  danger: string
  info: string
  bg: string
  bgSoft: string
  surface: string
  surfaceMuted: string
  surfaceElevated: string
  surfaceOverlay: string
  border: string
  borderMuted: string
  text: string
  textMuted: string
  textSubtle: string
  icon: string
}

export type LayoutTokens = {
  headerHeight: string
  sidebarWidth: string
  sidebarCollapsedWidth: string
  contentMaxWidth: string
  radiusSm: string
  radiusMd: string
  radiusLg: string
  radiusXl: string
}

export type ShadowTokens = {
  focus: string
  header: string
  sidebar: string
  card: string
  menuActive: string
}

export type ThemeTokens = {
  mode: ThemeTokenMode
  color: ThemeColorTokens
  layout: LayoutTokens
  shadow: ShadowTokens
}

export type ThemeTokenOverrides = Partial<{
  color: Partial<ThemeColorTokens>
  layout: Partial<LayoutTokens>
  shadow: Partial<ShadowTokens>
}>

const knownPrimaryPalettes: Record<
  string,
  { hover: string; pressed: string; accent: string; accentHover: string }
> = {
  '#f97316': { hover: '#fb923c', pressed: '#ea580c', accent: '#f43f5e', accentHover: '#fb7185' },
  '#3b82f6': { hover: '#60a5fa', pressed: '#2563eb', accent: '#06b6d4', accentHover: '#22d3ee' },
  '#10b981': { hover: '#34d399', pressed: '#059669', accent: '#14b8a6', accentHover: '#2dd4bf' },
  '#8b5cf6': { hover: '#a78bfa', pressed: '#7c3aed', accent: '#ec4899', accentHover: '#f472b6' },
  '#f43f5e': { hover: '#fb7185', pressed: '#e11d48', accent: '#f97316', accentHover: '#fb923c' }
}

const defaultLayoutTokens: LayoutTokens = {
  headerHeight: '64px',
  sidebarWidth: '256px',
  sidebarCollapsedWidth: '72px',
  contentMaxWidth: '1280px',
  radiusSm: '8px',
  radiusMd: '12px',
  radiusLg: '16px',
  radiusXl: '24px'
}

const normalizeHex = (value: string) => {
  const hex = value.trim().toLowerCase()
  if (/^#[0-9a-f]{6}$/.test(hex)) return hex
  return '#f97316'
}

const hexToRgb = (value: string) => {
  const hex = normalizeHex(value).slice(1)
  return {
    r: Number.parseInt(hex.slice(0, 2), 16),
    g: Number.parseInt(hex.slice(2, 4), 16),
    b: Number.parseInt(hex.slice(4, 6), 16)
  }
}

export const toRgbChannel = (value: string) => {
  const { r, g, b } = hexToRgb(value)
  return `${r} ${g} ${b}`
}

export const toAlphaColor = (value: string, alpha: number) => {
  const { r, g, b } = hexToRgb(value)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const mergeTokens = <T extends Record<string, string>>(base: T, override?: Partial<T>): T => ({
  ...base,
  ...(override ?? {})
})

export const createThemeTokens = (
  mode: ThemeTokenMode,
  primaryColor = '#f97316',
  overrides: ThemeTokenOverrides = {}
): ThemeTokens => {
  const primary = normalizeHex(primaryColor)
  const palette = knownPrimaryPalettes[primary] ?? {
    hover: primary,
    pressed: primary,
    accent: primary,
    accentHover: primary
  }

  const common = {
    primary,
    primaryHover: palette.hover,
    primaryPressed: palette.pressed,
    primarySuppl: palette.hover,
    primarySoft: toAlphaColor(primary, 0.12),
    primarySofter: toAlphaColor(primary, 0.06),
    accent: palette.accent,
    accentHover: palette.accentHover,
    accentSoft: toAlphaColor(palette.accent, 0.12),
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#f43f5e',
    info: '#3b82f6'
  }

  const lightColors: ThemeColorTokens = {
    ...common,
    bg: '#fff7ed',
    bgSoft: '#fffdf8',
    surface: '#ffffff',
    surfaceMuted: '#f8fafc',
    surfaceElevated: 'rgba(255, 255, 255, 0.9)',
    surfaceOverlay: 'rgba(255, 255, 255, 0.78)',
    border: '#e5e7eb',
    borderMuted: 'rgba(226, 232, 240, 0.74)',
    text: '#1e293b',
    textMuted: '#64748b',
    textSubtle: '#94a3b8',
    icon: '#64748b'
  }

  const darkColors: ThemeColorTokens = {
    ...common,
    bg: '#050b14',
    bgSoft: '#0b1220',
    surface: '#0a1120',
    surfaceMuted: 'rgba(255, 255, 255, 0.04)',
    surfaceElevated: 'rgba(15, 23, 42, 0.92)',
    surfaceOverlay: 'rgba(255, 255, 255, 0.06)',
    border: '#1f2937',
    borderMuted: 'rgba(30, 41, 59, 0.78)',
    text: '#e2e8f0',
    textMuted: '#94a3b8',
    textSubtle: '#64748b',
    icon: '#cbd5e1'
  }

  const color = mergeTokens(mode === 'dark' ? darkColors : lightColors, overrides.color)
  const layout = mergeTokens(defaultLayoutTokens, overrides.layout)
  const shadow = mergeTokens(
    {
      focus: `0 0 0 2px ${toAlphaColor(primary, 0.22)}`,
      header:
        mode === 'dark'
          ? '0 4px 20px rgba(0, 0, 0, 0.2)'
          : `0 4px 20px ${toAlphaColor(primary, 0.06)}`,
      sidebar:
        mode === 'dark' ? '4px 0 24px rgba(0, 0, 0, 0.2)' : '4px 0 24px rgba(15, 23, 42, 0.03)',
      card: mode === 'dark' ? 'none' : '0 14px 40px rgba(15, 23, 42, 0.06)',
      menuActive: `0 4px 12px ${toAlphaColor(primary, mode === 'dark' ? 0.16 : 0.25)}`
    },
    overrides.shadow
  )

  return { mode, color, layout, shadow }
}

export const createThemeCssVariables = (tokens: ThemeTokens): Record<string, string> => ({
  '--primary-color': tokens.color.primary,
  '--primary-color-400': tokens.color.primaryHover,
  '--primary-color-600': tokens.color.primaryPressed,
  '--bag-color-primary': tokens.color.primary,
  '--bag-color-primary-hover': tokens.color.primaryHover,
  '--bag-color-primary-pressed': tokens.color.primaryPressed,
  '--bag-color-primary-suppl': tokens.color.primarySuppl,
  '--bag-color-primary-rgb': toRgbChannel(tokens.color.primary),
  '--bag-color-primary-soft': tokens.color.primarySoft,
  '--bag-color-primary-softer': tokens.color.primarySofter,
  '--bag-color-accent': tokens.color.accent,
  '--bag-color-accent-hover': tokens.color.accentHover,
  '--bag-color-accent-soft': tokens.color.accentSoft,
  '--bag-color-success': tokens.color.success,
  '--bag-color-warning': tokens.color.warning,
  '--bag-color-danger': tokens.color.danger,
  '--bag-color-info': tokens.color.info,
  '--bag-color-bg': tokens.color.bg,
  '--bag-color-bg-soft': tokens.color.bgSoft,
  '--bag-color-surface': tokens.color.surface,
  '--bag-color-surface-muted': tokens.color.surfaceMuted,
  '--bag-color-surface-elevated': tokens.color.surfaceElevated,
  '--bag-color-surface-overlay': tokens.color.surfaceOverlay,
  '--bag-color-border': tokens.color.border,
  '--bag-color-border-muted': tokens.color.borderMuted,
  '--bag-color-text': tokens.color.text,
  '--bag-color-text-muted': tokens.color.textMuted,
  '--bag-color-text-subtle': tokens.color.textSubtle,
  '--bag-color-icon': tokens.color.icon,
  '--bag-layout-header-height': tokens.layout.headerHeight,
  '--bag-layout-sidebar-width': tokens.layout.sidebarWidth,
  '--bag-layout-sidebar-collapsed-width': tokens.layout.sidebarCollapsedWidth,
  '--bag-layout-content-max-width': tokens.layout.contentMaxWidth,
  '--bag-radius-sm': tokens.layout.radiusSm,
  '--bag-radius-md': tokens.layout.radiusMd,
  '--bag-radius-lg': tokens.layout.radiusLg,
  '--bag-radius-xl': tokens.layout.radiusXl,
  '--bag-shadow-focus': tokens.shadow.focus,
  '--bag-shadow-header': tokens.shadow.header,
  '--bag-shadow-sidebar': tokens.shadow.sidebar,
  '--bag-shadow-card': tokens.shadow.card,
  '--bag-shadow-menu-active': tokens.shadow.menuActive
})

export const applyThemeTokens = (
  tokens: ThemeTokens,
  target: HTMLElement = document.documentElement
) => {
  const variables = createThemeCssVariables(tokens)
  Object.entries(variables).forEach(([name, value]) => {
    target.style.setProperty(name, value)
  })
}
