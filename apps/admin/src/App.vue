<template>
  <BagUiProvider :lang="locale" :theme="theme">
    <AppLayout />
  </BagUiProvider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { BagUiProvider } from '@bag/ui'
import AppLayout from './layouts/AppLayout.vue'
import { useUserStore } from './stores/user'
import { useTabBarStore } from './stores/tabbar'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const userStore = useUserStore()
const tabbarStore = useTabBarStore()
const { theme } = storeToRefs(userStore)
const router = useRouter()

// 应用加载时初始化
onMounted(() => {
  userStore.initTheme()
  
  // 检查是否开启了 TabBar 持久化
  if (!tabbarStore.enableTabPersist) {
    // 未开启，则清空持久化的 tabs，仅保留当前页和 dashboard
    tabbarStore.clearTabs()
    if (router.currentRoute.value.path !== '/dashboard' && router.currentRoute.value.path !== '/') {
      tabbarStore.addTab(router.currentRoute.value)
    }
  }
})
</script>
