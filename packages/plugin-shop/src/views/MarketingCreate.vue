<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
      </button>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">创建营销活动</h2>
    </div>

    <form class="space-y-8" @submit.prevent>
      <!-- Activity Type -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>活动类型
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label class="border-2 border-orange-500 rounded-xl p-4 cursor-pointer bg-orange-50/30 dark:bg-orange-500/10 transition-colors">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
              </div>
              <span class="font-bold text-orange-600 dark:text-orange-400">优惠券</span>
            </div>
            <div class="text-xs text-orange-500/80 dark:text-orange-400/80">满减券、折扣券等</div>
          </label>
          <label class="border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors opacity-60">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-400 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span class="font-bold text-slate-600 dark:text-slate-400">限时折扣</span>
            </div>
            <div class="text-xs text-slate-400">指定商品限时打折</div>
          </label>
          <label class="border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors opacity-60">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-400 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="font-bold text-slate-600 dark:text-slate-400">满件包邮</span>
            </div>
            <div class="text-xs text-slate-400">提升客单价利器</div>
          </label>
        </div>
      </div>

      <hr class="border-gray-100 dark:border-gray-800">

      <!-- Settings -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>活动设置
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2 md:col-span-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">活动名称 <span class="text-rose-500">*</span></label>
            <input type="text" placeholder="例如：双十一专属满减券" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
          
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">使用门槛 (元) <span class="text-rose-500">*</span></label>
            <input type="number" placeholder="满多少元可用，0 表示无门槛" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
          
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">优惠金额 (元) <span class="text-rose-500">*</span></label>
            <input type="number" placeholder="减多少元" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
          
          <div class="space-y-2 md:col-span-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">活动时间 <span class="text-rose-500">*</span></label>
            <div class="flex items-center gap-2">
              <n-date-picker v-model:value="dateRange" type="daterange" clearable />
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-4 pt-6 mt-8 border-t border-gray-100 dark:border-gray-800">
        <button type="button" @click="router.back()" class="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-bold">取消</button>
        <button type="button" class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">创建活动</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NDatePicker } from 'naive-ui'

const router = useRouter()

const dateRange = ref(null)
</script>