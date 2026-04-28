<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center gap-4">
        <button @click="router.back()" class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        </button>
        <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">售后详情</h2>
      </div>
      <div class="flex gap-2">
        <span class="px-4 py-1.5 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold rounded-lg border border-orange-100 dark:border-orange-500/20">待商家处理</span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <!-- Return Details -->
        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
          <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-4 bg-orange-500 rounded-full"></div>退款信息
          </div>
          <div class="p-5">
            <div class="flex gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop" class="w-20 h-20 rounded-lg object-cover border border-gray-100 dark:border-gray-700 shadow-sm" />
              <div class="flex-1">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-base mb-1 hover:text-orange-600 transition-colors cursor-pointer">韩版宽松慵懒风毛衣</div>
                <div class="text-xs text-slate-500 mb-2">米白色 / L码</div>
                <div class="text-sm text-slate-600 dark:text-slate-300">退款金额：<span class="font-bold text-rose-500 text-lg">¥159.00</span></div>
              </div>
            </div>
            
            <hr class="border-gray-100 dark:border-gray-800 mb-6">
            
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div><span class="text-slate-500 w-20 inline-block">售后单号：</span><span class="text-slate-800 dark:text-slate-200 font-medium">RET202410280001</span></div>
              <div><span class="text-slate-500 w-20 inline-block">申请时间：</span><span class="text-slate-800 dark:text-slate-200 font-medium">2024-10-28 15:20:11</span></div>
              <div><span class="text-slate-500 w-20 inline-block">售后类型：</span><span class="text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded font-bold">仅退款</span></div>
              <div><span class="text-slate-500 w-20 inline-block">退款原因：</span><span class="text-slate-800 dark:text-slate-200 font-medium">七天无理由退款</span></div>
              <div class="col-span-2">
                <span class="text-slate-500 block mb-2">买家说明：</span>
                <div class="p-3 bg-slate-50 dark:bg-gray-800/50 rounded-lg text-slate-700 dark:text-slate-300">拍错颜色了，重新拍</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Negotiation History -->
        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
          <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-4 bg-blue-500 rounded-full"></div>协商历史
          </div>
          <div class="p-5 space-y-6">
            <div class="flex gap-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-gray-800" />
              <div class="flex-1">
                <div class="flex justify-between items-baseline mb-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200">买家发起了退款申请</span>
                  <span class="text-xs text-slate-400">2024-10-28 15:20:11</span>
                </div>
                <div class="text-sm text-slate-600 dark:text-slate-400">原因：七天无理由退款 | 金额：¥159.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Panel -->
      <div class="space-y-6">
        <div class="border border-orange-100 dark:border-orange-500/20 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
          <div class="px-5 py-4 border-b border-orange-100 dark:border-orange-500/20 bg-orange-50/50 dark:bg-orange-500/10 font-bold text-orange-600 dark:text-orange-400">
            处理退款申请
          </div>
          <div class="p-5 flex flex-col gap-4">
            <button class="w-full py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">同意退款</button>
            <button class="w-full py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors font-medium">拒绝申请</button>
            <hr class="border-gray-100 dark:border-gray-800 my-2">
            <button class="w-full py-2.5 text-slate-500 hover:text-orange-500 transition-colors text-sm font-medium">联系买家</button>
          </div>
        </div>

        <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120]">
          <div class="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <div class="w-1 h-4 bg-emerald-500 rounded-full"></div>关联订单
          </div>
          <div class="p-5 text-sm">
            <div class="flex justify-between items-center mb-3">
              <span class="text-slate-500">订单号</span>
              <span class="text-orange-500 cursor-pointer hover:underline">ORD2024102600889</span>
            </div>
            <div class="flex justify-between items-center mb-3">
              <span class="text-slate-500">订单状态</span>
              <span class="font-bold text-slate-700 dark:text-slate-300">待发货</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500">实付总额</span>
              <span class="font-bold text-slate-700 dark:text-slate-300">¥159.00</span>
            </div>
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