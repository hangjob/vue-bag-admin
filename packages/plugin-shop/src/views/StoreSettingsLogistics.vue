<template>
  <div class="space-y-8">
    <!-- Logistics Companies -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>物流公司配置
        </div>
        <button class="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">管理物流公司库</button>
      </div>
      <div class="p-6 space-y-6">
        <p class="text-sm text-slate-500">勾选启用的物流公司将在订单发货时作为选项出现</p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <label class="flex items-center gap-3 p-4 border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 rounded-xl cursor-pointer transition-colors hover:border-orange-300">
            <input type="checkbox" checked class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
            <span class="text-sm font-bold text-slate-800 dark:text-slate-200">顺丰速运</span>
          </label>
          <label class="flex items-center gap-3 p-4 border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 rounded-xl cursor-pointer transition-colors hover:border-orange-300">
            <input type="checkbox" checked class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
            <span class="text-sm font-bold text-slate-800 dark:text-slate-200">中通快递</span>
          </label>
          <label class="flex items-center gap-3 p-4 border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 rounded-xl cursor-pointer transition-colors hover:border-orange-300">
            <input type="checkbox" checked class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
            <span class="text-sm font-bold text-slate-800 dark:text-slate-200">圆通速递</span>
          </label>
          <label class="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 bg-slate-50/50 dark:bg-[#0A1120] rounded-xl cursor-pointer transition-colors hover:border-gray-300">
            <input type="checkbox" class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
            <span class="text-sm font-medium text-slate-600 dark:text-slate-400">韵达快递</span>
          </label>
          <label class="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 bg-slate-50/50 dark:bg-[#0A1120] rounded-xl cursor-pointer transition-colors hover:border-gray-300">
            <input type="checkbox" class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
            <span class="text-sm font-medium text-slate-600 dark:text-slate-400">申通快递</span>
          </label>
          <label class="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 bg-slate-50/50 dark:bg-[#0A1120] rounded-xl cursor-pointer transition-colors hover:border-gray-300">
            <input type="checkbox" class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
            <span class="text-sm font-medium text-slate-600 dark:text-slate-400">极兔速递</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Freight Settings -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-emerald-500 rounded-full"></div>运费模板与包邮规则
      </div>
      <div class="p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-36 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">默认运费</label>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-sm text-slate-600 dark:text-slate-400">全场默认运费</span>
              <input type="number" value="10.00" class="w-24 px-3 py-1.5 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <span class="text-sm text-slate-600 dark:text-slate-400">元</span>
            </div>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-36 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">满额包邮</label>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
                <span class="text-sm text-slate-600 dark:text-slate-400">启用，单笔订单满</span>
              </label>
              <input type="number" value="99.00" class="w-24 px-3 py-1.5 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <span class="text-sm text-slate-600 dark:text-slate-400">元包邮</span>
            </div>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-36 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">偏远地区设置</label>
          </div>
          <div class="flex-1">
            <div class="p-5 bg-slate-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl space-y-4">
              <div class="flex justify-between items-center">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">新疆、西藏、内蒙古、青海等地区</div>
                <button class="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">编辑地区</button>
              </div>
              <div class="flex flex-wrap items-center gap-4">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div class="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  <span class="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-orange-500 transition-colors">不包邮，运费附加</span>
                </label>
                <input type="number" value="20.00" class="w-24 px-3 py-1 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                <span class="text-sm text-slate-600 dark:text-slate-400">元</span>
              </div>
              <div class="flex items-center gap-4">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                  </div>
                  <span class="text-sm font-medium text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">不发货（买家无法下单）</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>