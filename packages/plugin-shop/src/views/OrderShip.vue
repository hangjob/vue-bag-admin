<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
      </button>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">订单发货</h2>
    </div>

    <!-- Order Info -->
    <div class="mb-8 p-5 bg-slate-50 dark:bg-gray-800/30 rounded-xl border border-gray-100 dark:border-gray-800">
      <div class="flex flex-col md:flex-row gap-6 justify-between">
        <div>
          <div class="text-sm text-slate-500 mb-1">订单编号</div>
          <div class="font-bold text-slate-800 dark:text-slate-200">ORD2024102800123</div>
        </div>
        <div>
          <div class="text-sm text-slate-500 mb-1">收货人</div>
          <div class="font-bold text-slate-800 dark:text-slate-200">林女士 138****5678</div>
        </div>
        <div class="flex-1 md:max-w-xs">
          <div class="text-sm text-slate-500 mb-1">收货地址</div>
          <div class="font-medium text-slate-700 dark:text-slate-300 text-sm">浙江省 杭州市 西湖区 某某街道 某某小区 1号楼</div>
        </div>
      </div>
    </div>

    <form class="space-y-8" @submit.prevent>
      <!-- Shipping Info -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
          物流信息
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">物流公司 <span class="text-rose-500">*</span></label>
            <select class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <option value="">请选择物流公司</option>
              <option value="sf">顺丰速运</option>
              <option value="zt">中通快递</option>
              <option value="yd">韵达快递</option>
              <option value="yt">圆通速递</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">快递单号 <span class="text-rose-500">*</span></label>
            <input type="text" placeholder="请输入快递单号" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
        </div>
      </div>

      <!-- Products to ship -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
          发货商品
        </h3>
        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
          <div class="p-4 flex gap-4 items-center bg-white dark:bg-[#0A1120]">
            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop" class="w-16 h-16 rounded-lg object-cover border border-gray-100 dark:border-gray-700" />
            <div class="flex-1">
              <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">秋季法式高级感收腰风衣</div>
              <div class="text-xs text-slate-500 mt-1">卡其色 / M码</div>
            </div>
            <div class="text-right">
              <div class="font-medium text-slate-700 dark:text-slate-300">x1</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-4 pt-6 mt-8 border-t border-gray-100 dark:border-gray-800">
        <button type="button" @click="router.back()" class="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-bold">取消</button>
        <button type="button" class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">确认发货</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>