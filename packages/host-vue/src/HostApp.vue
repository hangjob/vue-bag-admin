<template>
  <BagUiProvider
    :lang="locale"
    :theme="theme"
    :theme-color="themeTokens.color.primary"
    :theme-color-hover="themeTokens.color.primaryHover"
    :theme-color-pressed="themeTokens.color.primaryPressed"
    :theme-color-suppl="themeTokens.color.primarySuppl"
  >
    <AppLayout />
    <AppSettingsDrawer v-if="!slots.settings" />
    <slot name="settings" />
  </BagUiProvider>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, useSlots } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { BagUiProvider } from '@bag/ui'
import AppLayout from './layouts/AppLayout.vue'
import AppSettingsDrawer from './components/AppSettingsDrawer.vue'
import { useAppConfigStore } from './stores/app-config'
import { useTabBarStore } from './stores/tabbar'
import { getHostNavigationConfig } from './core/navigation'

const { locale } = useI18n()
const appConfigStore = useAppConfigStore()
const tabbarStore = useTabBarStore()
const { theme } = storeToRefs(appConfigStore)
const themeTokens = computed(() => appConfigStore.themeTokens)
const router = useRouter()
const navigation = getHostNavigationConfig()
const slots = useSlots()

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
    if (
      router.currentRoute.value.path !== navigation.homePath &&
      router.currentRoute.value.path !== '/'
    ) {
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
