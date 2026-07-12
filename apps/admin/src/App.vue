<template>
  <BagUiProvider :lang="locale" :theme="theme" :theme-color="themeColor">
    <AppLayout />
    <AppSettingsDrawer />
  </BagUiProvider>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { BagUiProvider } from '@bag/ui'
import AppLayout from './layouts/AppLayout.vue'
import { useTabBarStore } from './stores/tabbar'
import { useRouter } from 'vue-router'
import AppSettingsDrawer from './components/AppSettingsDrawer.vue'
import { useAppConfigStore } from './stores/app-config'

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

// 应用加载时初始化
onMounted(() => {
  appConfigStore.applyAppearance()

  // 检查是否开启了 TabBar 持久化
  if (!tabbarStore.enableTabPersist) {
    // 未开启，则清空持久化的 tabs，仅保留当前页和 dashboard
    tabbarStore.clearTabs()
    if (router.currentRoute.value.path !== '/dashboard' && router.currentRoute.value.path !== '/') {
      tabbarStore.addTab(router.currentRoute.value)
    }
  }

  // 保留事件桥接，允许独立插件不依赖宿主 store 也能更新主题色。
  window.addEventListener('bag-theme-color-change', handleThemeColorChange as EventListener)
  window.addEventListener('bag-open-settings-drawer', handleOpenSettingsDrawer)
})

onUnmounted(() => {
  window.removeEventListener('bag-theme-color-change', handleThemeColorChange as EventListener)
  window.removeEventListener('bag-open-settings-drawer', handleOpenSettingsDrawer)
})
</script>
