<template>
  <div class="space-y-8">
    <!-- Service Config -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-orange-500 rounded-full"></div>客服基础配置
      </div>
      <div class="p-6 space-y-6">
        <div class="flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-orange-200 transition-colors">
          <div>
            <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">启用智能客服助手</div>
            <div class="text-xs text-slate-500 mt-1">在人工客服不在线时，由智能助手接管用户咨询</div>
          </div>
          <div class="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer shadow-inner">
            <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-36 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">人工工作时间</label>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-4 mb-3">
              <input type="time" value="09:00" class="w-32 px-4 py-2 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
              <span class="text-sm text-slate-600 dark:text-slate-400">至</span>
              <input type="time" value="22:00" class="w-32 px-4 py-2 text-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-slate-200">
            </div>
            <p class="text-xs text-slate-500">工作时间外收到的消息将自动回复离线提示语，或转交智能助手（如启用）</p>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-36 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">离线提示语</label>
          </div>
          <div class="flex-1">
            <textarea rows="3" class="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none dark:text-slate-200">您好，现在是休息时间（22:00 - 次日09:00），客服小助手可能无法及时回复您的消息。您可以先留言，我们上班后会第一时间为您处理，谢谢您的理解与支持！</textarea>
            <p class="text-xs text-slate-500 mt-1 flex justify-between max-w-lg">
              <span>客户在非工作时间咨询时的默认回复</span>
              <span>86/200</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Auto Reply Config -->
    <div class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#0A1120] shadow-sm">
      <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        <div class="w-1 h-4 bg-rose-500 rounded-full"></div>自动回复配置
      </div>
      <div class="p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-36 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">首次欢迎语</label>
          </div>
          <div class="flex-1">
            <textarea rows="2" class="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none dark:text-slate-200">亲，欢迎光临本店！请问有什么可以帮您？如果是关于尺寸问题，可以发送“尺码表”获取帮助哦。</textarea>
          </div>
        </div>

        <hr class="border-gray-100 dark:border-gray-800">

        <div class="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
          <div class="w-full md:w-36 pt-2 shrink-0">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">快捷问题 (Q&A)</label>
            <p class="text-xs text-slate-500 mt-1">展示在聊天框顶部，用户点击可直接获取回复</p>
          </div>
          <div class="flex-1 space-y-4">
            <div class="p-4 bg-slate-50 dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 rounded-xl max-w-lg group hover:border-orange-200 dark:hover:border-orange-500/30 transition-colors">
              <div class="flex justify-between items-start mb-2">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">什么时候发货？</div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button class="text-xs font-medium text-orange-500 hover:text-orange-600">编辑</button>
                  <button class="text-xs font-medium text-rose-500 hover:text-rose-600">删除</button>
                </div>
              </div>
              <div class="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-gray-800/50 p-3 rounded-lg">亲，我们承诺在您付款后48小时内为您发出，默认发顺丰或中通快递，请您耐心等待。</div>
            </div>
            
            <div class="p-4 bg-slate-50 dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 rounded-xl max-w-lg group hover:border-orange-200 dark:hover:border-orange-500/30 transition-colors">
              <div class="flex justify-between items-start mb-2">
                <div class="font-bold text-slate-800 dark:text-slate-200 text-sm">支持退换货吗？</div>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button class="text-xs font-medium text-orange-500 hover:text-orange-600">编辑</button>
                  <button class="text-xs font-medium text-rose-500 hover:text-rose-600">删除</button>
                </div>
              </div>
              <div class="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-gray-800/50 p-3 rounded-lg">亲，本店支持7天无理由退换货（不影响二次销售的情况下），请放心购买。</div>
            </div>

            <button class="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors px-4 py-2 border border-orange-200 dark:border-orange-500/30 rounded-lg bg-orange-50/50 dark:bg-orange-500/10">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              添加快捷问题
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>