<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020817]" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabBarStore } from '../stores/tabbar'

const route = useRoute()
const router = useRouter()
const tabbarStore = useTabBarStore()

onMounted(async () => {
  const target = typeof route.query.target === 'string' ? route.query.target : '/dashboard'

  // 在跳回目标页前恢复 KeepAlive include，让新实例能够重新进入缓存。
  tabbarStore.restoreCache(target)
  await router.replace(target)
})
</script>
