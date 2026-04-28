<template>
  <div class="space-y-8">
    <!-- Order Settings -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-orange-500 rounded-full"></div>订单交易时间设置
      </div>
      <div class="p-6 space-y-6">
        <!-- Order Auto Cancel -->
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-36 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">自动取消订单</label>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-sm text-slate-600 dark:text-slate-400">拍下未付款，</span>
              <input type="number" value="30" class="w-24 px-3 py-1.5 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <span class="text-sm text-slate-600 dark:text-slate-400">分钟后自动取消订单</span>
            </div>
            <p class="text-xs text-slate-500 mt-2">建议设置 15-30 分钟，过长可能导致库存被恶意占用</p>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <!-- Auto Receive -->
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-36 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">自动确认收货</label>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-sm text-slate-600 dark:text-slate-400">发货后，</span>
              <input type="number" value="7" class="w-24 px-3 py-1.5 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <span class="text-sm text-slate-600 dark:text-slate-400">天内买家未操作自动确认收货</span>
            </div>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <!-- Refund Processing -->
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-36 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">售后申请处理</label>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-sm text-slate-600 dark:text-slate-400">买家发起退款后，</span>
              <input type="number" value="3" class="w-24 px-3 py-1.5 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <span class="text-sm text-slate-600 dark:text-slate-400">天内未处理自动同意退款</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-emerald-500 rounded-full"></div>支付方式配置
      </div>
      <div class="p-6 space-y-4">
        <!-- WeChat Pay -->
        <div class="flex justify-between items-center p-4 bg-slate-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M8.336 6.376c3.211 0 5.814 2.213 5.814 4.943 0 2.729-2.603 4.942-5.814 4.942-.647 0-1.266-.09-1.854-.251l-1.852 1.002.483-1.63c-1.571-1.026-2.59-2.487-2.59-4.063 0-2.73 2.602-4.943 5.813-4.943zm8.01 2.378c.18-.002.361 0 .543.01 3.031.134 5.438 2.25 5.438 4.856 0 1.488-.95 2.862-2.42 3.829l.45 1.52-1.728-.934c-.548.15-1.127.234-1.726.234-3.155 0-5.711-2.15-5.711-4.805 0-.15.01-.299.027-.446.467.242.966.442 1.492.593-.05.22-.078.448-.078.68 0 2.37 2.362 4.29 5.275 4.29.56 0 1.096-.078 1.604-.218l1.378.745-.358-1.214c1.197-.817 1.954-1.942 1.954-3.176 0-2.37-2.36-4.29-5.273-4.29-.395 0-.78.037-1.15.107-.15-.992-.48-1.921-.967-2.75l1.25-.031z"/></svg>
            </div>
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200">微信支付</div>
              <div class="text-xs text-slate-500 mt-1">支持微信公众号、小程序、App支付</div>
            </div>
          </div>
          <div class="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer shadow-inner">
            <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        <!-- Alipay -->
        <div class="flex justify-between items-center p-4 bg-slate-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-500 flex items-center justify-center">
              <span class="font-black text-xl">支</span>
            </div>
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200">支付宝支付</div>
              <div class="text-xs text-slate-500 mt-1">支持支付宝 App 支付与手机网页支付</div>
            </div>
          </div>
          <div class="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer shadow-inner transition-colors">
            <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        <!-- Balance -->
        <div class="flex justify-between items-center p-4 bg-slate-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-orange-200 dark:hover:border-orange-500/30 transition-colors">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <div class="font-bold text-slate-800 dark:text-slate-200">余额支付</div>
              <div class="text-xs text-slate-500 mt-1">允许用户使用平台钱包余额进行支付</div>
            </div>
          </div>
          <div class="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer shadow-inner">
            <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Invoice Settings -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-purple-500 rounded-full"></div>发票设置
      </div>
      <div class="p-6 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">允许买家申请发票</div>
            <div class="text-xs text-slate-500 mt-1">开启后，买家在提交订单时可选择索要发票</div>
          </div>
          <div class="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer shadow-inner">
            <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
        
        <hr class="border-gray-100 dark:border-gray-800">
        
        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-36 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">支持的发票类型</label>
          </div>
          <div class="flex-1 flex gap-4">
            <label class="flex items-center gap-2 p-3 border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 rounded-lg cursor-pointer flex-1 justify-center">
              <input type="checkbox" checked class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
              <span class="text-sm font-bold text-slate-800 dark:text-slate-200">电子普通发票</span>
            </label>
            <label class="flex items-center gap-2 p-3 border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 rounded-lg cursor-pointer flex-1 justify-center">
              <input type="checkbox" checked class="w-4 h-4 text-orange-500 rounded focus:ring-orange-500">
              <span class="text-sm font-bold text-slate-800 dark:text-slate-200">增值税专用发票</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>