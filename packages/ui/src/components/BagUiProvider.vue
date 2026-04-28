<template>
  <n-config-provider :locale="naiveLocale" :date-locale="naiveDateLocale" :theme="naiveTheme" :theme-overrides="themeOverrides">
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
import { NConfigProvider, NGlobalStyle, NMessageProvider, NDialogProvider, darkTheme, dateEnUS, dateZhCN, enUS, zhCN } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

const props = withDefaults(
  defineProps<{
    lang?: string
    theme?: 'light' | 'dark'
  }>(),
  {
    lang: 'zh-CN',
    theme: 'light',
  },
)

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#f97316', // orange-500
    primaryColorHover: '#fb923c', // orange-400
    primaryColorPressed: '#ea580c', // orange-600
    primaryColorSuppl: '#f97316'
  },
  Select: {
    peers: {
      InternalSelection: {
        borderFocus: '1px solid #f97316',
        borderHover: '1px solid #f97316',
        boxShadowFocus: '0 0 0 2px rgba(249, 115, 22, 0.2)',
        boxShadowActive: '0 0 0 2px rgba(249, 115, 22, 0.2)'
      }
    }
  }
}

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
