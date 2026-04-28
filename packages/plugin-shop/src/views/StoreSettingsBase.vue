<template>
  <div class="space-y-8">
    <!-- Basic Info -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-orange-500 rounded-full"></div>基础信息设置
      </div>
      <div class="p-6 space-y-6">
        <!-- Logo -->
        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-32 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">店铺 Logo</label>
            <p class="text-xs text-slate-500 mt-1">将在店铺主页及分享时展示</p>
          </div>
          <div class="flex-1">
            <div class="w-20 h-20 rounded-xl bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm relative group cursor-pointer overflow-hidden">
              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=store&backgroundColor=ffedd5" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-white text-xs font-bold">更换</span>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2">建议尺寸 200x200 像素，支持 jpg、png 格式，大小不超过 2MB</p>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <!-- Name -->
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-32 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">店铺名称</label>
          </div>
          <div class="flex-1">
            <input type="text" value="Vue Bag Admin 官方旗舰店" class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <!-- Desc -->
        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-32 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">店铺简介</label>
          </div>
          <div class="flex-1">
            <textarea rows="3" class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none dark:text-slate-200">为您提供优质的服饰箱包商品，全场包邮，7天无理由退换。</textarea>
            <p class="text-xs text-slate-500 mt-1 flex justify-between max-w-md">
              <span>展示在店铺详情页，吸引用户关注</span>
              <span>25/100</span>
            </p>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <!-- Status -->
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-32 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">营业状态</label>
          </div>
          <div class="flex-1 flex gap-6">
            <label class="flex items-center gap-2 cursor-pointer group">
              <div class="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div class="w-2 h-2 rounded-full bg-orange-500"></div>
              </div>
              <span class="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-orange-500 transition-colors">正常营业</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer group">
              <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
              </div>
              <span class="text-sm font-medium text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">暂停营业</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-blue-500 rounded-full"></div>联系与地址
      </div>
      <div class="p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div class="w-full md:w-32 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">联系电话</label>
          </div>
          <div class="flex-1">
            <input type="text" placeholder="请输入手机号或座机" value="400-123-4567" class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-32 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">发货/退货地址</label>
          </div>
          <div class="flex-1 space-y-3 max-w-md">
            <div class="flex gap-2">
              <select class="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                <option value="广东">广东省</option>
              </select>
              <select class="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                <option value="广州">广州市</option>
              </select>
              <select class="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
                <option value="天河">天河区</option>
              </select>
            </div>
            <textarea rows="2" placeholder="请输入详细地址，如街道、门牌号、小区等" class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none dark:text-slate-200">珠江新城XXX大厦A座</textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>