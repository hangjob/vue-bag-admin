<template>
  <n-config-provider
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    :theme="naiveTheme"
    :theme-overrides="themeOverrides"
  >
    <n-global-style />
    <n-message-provider>
      <n-dialog-provider>
        <slot />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  NConfigProvider,
  NGlobalStyle,
  NMessageProvider,
  NDialogProvider,
  darkTheme,
  dateEnUS,
  dateZhCN,
  enUS,
  zhCN
} from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

const props = withDefaults(
  defineProps<{
    lang?: string
    theme?: 'light' | 'dark'
    themeColor?: string
    themeColorHover?: string
    themeColorPressed?: string
    themeColorSuppl?: string
  }>(),
  {
    lang: 'zh-CN',
    theme: 'light',
    themeColor: '#f97316',
    themeColorHover: undefined,
    themeColorPressed: undefined,
    themeColorSuppl: undefined
  }
)

const themeOverrides = computed<GlobalThemeOverrides>(() => {
  const primaryColor = props.themeColor
  const primaryColorHover = props.themeColorHover ?? primaryColor
  const primaryColorPressed = props.themeColorPressed ?? primaryColor
  const primaryColorSuppl = props.themeColorSuppl ?? primaryColorHover
  return {
    common: {
      primaryColor: primaryColor,
      primaryColorHover,
      primaryColorPressed,
      primaryColorSuppl
    },
    Select: {
      peers: {
        InternalSelection: {
          borderFocus: `1px solid ${primaryColor}`,
          borderHover: `1px solid ${primaryColorHover}`,
          boxShadowFocus: `0 0 0 2px ${primaryColor}33`,
          boxShadowActive: `0 0 0 2px ${primaryColor}33`
        }
      }
    }
  }
})

const naiveTheme = computed(() => {
  return props.theme === 'dark' ? darkTheme : null
})

const naiveLocale = computed(() => {
  const lang = props.lang?.toLowerCase()
  if (lang === 'en' || lang?.startsWith('en')) return enUS
  return zhCN
})

const naiveDateLocale = computed(() => {
  const lang = props.lang?.toLowerCase()
  if (lang === 'en' || lang?.startsWith('en')) return dateEnUS
  return dateZhCN
})
</script>
