<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020817]" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabBarStore } from 'vue-bag-admin'

const route = useRoute()
const router = useRouter()
const tabbarStore = useTabBarStore()

onMounted(async () => {
  const target = typeof route.query.target === 'string' ? route.query.target : '/dashboard'
  tabbarStore.restoreCache(target)
  await router.replace(target)
})
</script>
