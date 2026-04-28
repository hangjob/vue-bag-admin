<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-4">
        <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        </button>
        <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">订单详情</h2>
      </div>
      <div class="flex gap-2">
        <span class="px-4 py-1.5 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold rounded-lg border border-orange-100 dark:border-orange-500/20">待发货</span>
      </div>
    </div>

    <!-- Steps -->
    <div class="mb-10 px-8 py-6 bg-slate-50 dark:bg-gray-800/30 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center relative">
      <div class="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
      <div class="absolute left-16 right-1/2 top-1/2 -translate-y-1/2 h-0.5 bg-orange-500 z-0"></div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-2 shadow-sm shadow-orange-500/30">✓</div>
        <div class="text-sm font-bold text-slate-800 dark:text-slate-200">买家下单</div>
        <div class="text-xs text-slate-500 mt-1">2024-10-28 14:30:22</div>
      </div>
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-2 shadow-sm shadow-orange-500/30">✓</div>
        <div class="text-sm font-bold text-slate-800 dark:text-slate-200">买家付款</div>
        <div class="text-xs text-slate-500 mt-1">2024-10-28 14:35:10</div>
      </div>
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-8 h-8 rounded-full bg-white dark:bg-[#0A1120] border-2 border-orange-500 text-orange-500 flex items-center justify-center font-bold mb-2">3</div>
        <div class="text-sm font-bold text-orange-600 dark:text-orange-400">商家发货</div>
        <div class="text-xs text-slate-500 mt-1">待处理</div>
      </div>
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-8 h-8 rounded-full bg-white dark:bg-[#0A1120] border-2 border-gray-200 dark:border-gray-700 text-slate-400 flex items-center justify-center font-bold mb-2">4</div>
        <div class="text-sm font-bold text-slate-500">交易完成</div>
        <div class="text-xs text-slate-500 mt-1">-</div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column (Order Info) -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Products -->
        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
          <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-4 bg-orange-500 rounded-full"></div>商品信息
          </div>
          <div class="p-5">
            <div class="flex gap-4">
              <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop" class="w-20 h-20 rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm" />
              <div class="flex-1">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-base mb-1 hover:text-orange-600 transition-colors cursor-pointer">秋季法式高级感收腰风衣</div>
                <div class="text-xs text-slate-500 mb-2">卡其色 / M码 | 编码：W-001</div>
                <div class="text-xs text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded w-fit">七天无理由退换</div>
              </div>
              <div class="text-right">
                <div class="font-bold text-slate-800 dark:text-slate-200">¥458.00</div>
                <div class="text-sm text-slate-400 mt-1">x1</div>
              </div>
            </div>
          </div>
          <div class="px-5 py-4 bg-slate-50/50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-6 text-sm">
            <div class="text-slate-500">商品总价：<span class="text-slate-700 dark:text-slate-300 font-bold">¥458.00</span></div>
            <div class="text-slate-500">运费：<span class="text-slate-700 dark:text-slate-300 font-bold">¥0.00</span></div>
            <div class="text-slate-500">实付款：<span class="text-orange-600 dark:text-orange-400 font-black text-lg">¥458.00</span></div>
          </div>
        </div>

        <!-- Base Info -->
        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
          <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-4 bg-blue-500 rounded-full"></div>订单信息
          </div>
          <div class="p-5 grid grid-cols-2 gap-4 text-sm">
            <div><span class="text-slate-500 w-20 inline-block">订单编号：</span><span class="text-slate-800 dark:text-slate-200 font-medium">ORD2024102800123</span></div>
            <div><span class="text-slate-500 w-20 inline-block">支付方式：</span><span class="text-slate-800 dark:text-slate-200 font-medium">微信支付</span></div>
            <div><span class="text-slate-500 w-20 inline-block">创建时间：</span><span class="text-slate-800 dark:text-slate-200 font-medium">2024-10-28 14:30:22</span></div>
            <div><span class="text-slate-500 w-20 inline-block">付款时间：</span><span class="text-slate-800 dark:text-slate-200 font-medium">2024-10-28 14:35:10</span></div>
            <div class="col-span-2"><span class="text-slate-500 w-20 inline-block">买家留言：</span><span class="text-slate-800 dark:text-slate-200 font-medium">请尽快发货，谢谢！发顺丰可以吗？</span></div>
          </div>
        </div>
      </div>

      <!-- Right Column (Buyer Info) -->
      <div class="space-y-6">
        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
          <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-4 bg-emerald-500 rounded-full"></div>收货信息
          </div>
          <div class="p-5 space-y-4 text-sm">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              <div>
                <div class="font-bold text-slate-800 dark:text-slate-200 mb-1">林女士 <span class="font-medium text-slate-500 ml-2">138****5678</span></div>
                <div class="text-slate-600 dark:text-slate-400 leading-relaxed">浙江省 杭州市 西湖区 某某街道 某某小区 1号楼 1201室</div>
              </div>
            </div>
            <hr class="border-gray-100 dark:border-gray-800">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div class="text-slate-600 dark:text-slate-400">买家已实名认证</div>
            </div>
          </div>
        </div>

        <!-- Action Card -->
        <div class="border border-orange-100 dark:border-orange-500/20 rounded-xl overflow-hidden bg-gradient-to-b from-orange-50 to-white dark:from-orange-500/10 dark:to-[#0A1120]">
          <div class="p-5 flex flex-col gap-3">
            <button @click="router.push('/order/ship/1')" class="w-full py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">立即去发货</button>
            <button class="w-full py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">联系买家</button>
            <button class="w-full py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">修改地址</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>