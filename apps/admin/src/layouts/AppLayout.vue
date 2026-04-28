<template>
  <component :is="currentLayoutComponent">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getDefaultLayout, getLayout } from './registry'
import { useTabBarStore } from '../stores/tabbar'

const route = useRoute()
const tabbarStore = useTabBarStore()

// 从标签栏状态中获取所有需要缓存的组件名称，如果全局未开启缓存则返回空
const cachedViews = computed(() => {
  return tabbarStore.cachedViews
})

const currentLayoutComponent = computed(() => {
  const layoutName = (route.meta?.layout as string) || 'default'
  return getLayout(layoutName) || getDefaultLayout()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
