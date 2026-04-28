<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">{{ $t('shop.store.settings') }}</h2>
      <button class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">
        {{ $t('common.save') || '保存修改' }}
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Settings Nav -->
      <div class="w-full md:w-64 shrink-0 space-y-1">
        <button 
          v-for="tab in tabs" 
          :key="tab.path" 
          @click="router.push(tab.path)"
          :class="[
            route.path === tab.path 
              ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 font-medium'
          ]"
          class="w-full text-left px-4 py-3 rounded-xl transition-colors"
        >
          {{ $t(tab.name) }}
        </button>
      </div>

      <!-- Settings Content -->
      <div class="flex-1 bg-slate-50 dark:bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()

const tabs = [
  { name: 'shop.store.base', path: '/store/settings/base' },
  { name: 'shop.store.trade', path: '/store/settings/trade' },
  { name: 'shop.store.logistics', path: '/store/settings/logistics' },
  { name: 'shop.store.service', path: '/store/settings/service' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>