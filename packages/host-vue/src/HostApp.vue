<template>
  <BagUiProvider :lang="locale" :theme="theme" :theme-color="themeColor">
    <AppLayout />
    <AppSettingsDrawer />
    <slot name="settings" />
  </BagUiProvider>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { BagUiProvider } from '@bag/ui'
import AppLayout from './layouts/AppLayout.vue'
import AppSettingsDrawer from './components/AppSettingsDrawer.vue'
import { useAppConfigStore } from './stores/app-config'
import { useTabBarStore } from './stores/tabbar'

const { locale } = useI18n()
const appConfigStore = useAppConfigStore()
const tabbarStore = useTabBarStore()
const { theme, themeColor } = storeToRefs(appConfigStore)
const router = useRouter()

const handleThemeColorChange = (event: Event) => {
  const customEvent = event as CustomEvent<string>
  appConfigStore.setThemeColor(customEvent.detail)
}

const handleOpenSettingsDrawer = () => {
  appConfigStore.openSettingsDrawer()
}

onMounted(() => {
  appConfigStore.applyAppearance()

  if (!tabbarStore.enableTabPersist) {
    tabbarStore.clearTabs()
    if (router.currentRoute.value.path !== '/dashboard' && router.currentRoute.value.path !== '/') {
      tabbarStore.addTab(router.currentRoute.value)
    }
  }

  window.addEventListener('bag-theme-color-change', handleThemeColorChange as EventListener)
  window.addEventListener('bag-open-settings-drawer', handleOpenSettingsDrawer)
})

onUnmounted(() => {
  window.removeEventListener('bag-theme-color-change', handleThemeColorChange as EventListener)
  window.removeEventListener('bag-open-settings-drawer', handleOpenSettingsDrawer)
})
</script>
