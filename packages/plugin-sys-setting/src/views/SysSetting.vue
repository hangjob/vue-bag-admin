<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">系统常规设置</h2>
      <button class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all font-bold">
        保存配置
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Settings Nav -->
      <div class="w-full md:w-64 shrink-0 space-y-1">
        <button class="w-full text-left px-4 py-3 rounded-xl font-bold bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 transition-colors">基础配置</button>
        <button class="w-full text-left px-4 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">SEO 设置</button>
        <button class="w-full text-left px-4 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">文件上传</button>
        <button class="w-full text-left px-4 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">通知公告</button>
      </div>

      <!-- Settings Content -->
      <div class="flex-1 bg-slate-50 dark:bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
        <h3 class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-6">
          <div class="w-1 h-4 bg-orange-500 rounded-full"></div>
          基础参数配置
        </h3>
        
        <div class="space-y-6">
          <!-- Logo & Favicon -->
          <div class="flex flex-col sm:flex-row items-start gap-8">
            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">系统 Logo</label>
              </div>
              <div>
                <div class="w-24 h-24 rounded-xl bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm relative group cursor-pointer overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/shapes/svg?seed=sys&backgroundColor=ffedd5" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-white text-xs font-bold">更换</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">Favicon</label>
              </div>
              <div>
                <div class="w-12 h-12 rounded-lg bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm relative group cursor-pointer overflow-hidden">
                  <span class="text-xl font-black text-orange-500">B</span>
                  <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-700/50">

          <!-- Site Name -->
          <div class="flex items-start gap-6">
            <div class="space-y-1 w-24 pt-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">网站名称</label>
            </div>
            <div class="flex-1">
              <input type="text" value="Vue-Bag-Admin 中后台系统" class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-700/50">

          <!-- Copyright -->
          <div class="flex items-start gap-6">
            <div class="space-y-1 w-24 pt-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">版权信息</label>
            </div>
            <div class="flex-1">
              <input type="text" value="Copyright © 2024 Vue Bag Admin All rights reserved." class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-700/50">

          <!-- ICP -->
          <div class="flex items-start gap-6">
            <div class="space-y-1 w-24 pt-2">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">备案号</label>
            </div>
            <div class="flex-1">
              <input type="text" placeholder="如：京ICP备00000000号-1" value="浙ICP备2023012345号" class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
          </div>
          
          <hr class="border-gray-200 dark:border-gray-700/50">

          <!-- System Status -->
          <div class="flex items-center gap-6">
            <div class="space-y-1 w-24">
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">系统状态</label>
            </div>
            <div class="flex-1 flex gap-4">
              <label class="flex items-center gap-2 cursor-pointer group">
                <div class="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div class="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
                <span class="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-orange-500 transition-colors">正常运行</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer group">
                <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                </div>
                <span class="text-sm font-medium text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">维护中</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>