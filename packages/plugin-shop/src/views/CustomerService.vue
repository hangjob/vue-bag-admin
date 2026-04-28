<template>
  <div class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
        客服消息
        <span class="px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-500 text-xs font-bold">12 未读</span>
      </h2>
      <div class="flex items-center gap-4 text-sm font-medium">
        <span class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
          在线接待中
        </span>
        <button @click="openSettings" class="px-3 py-1.5 bg-slate-50 dark:bg-gray-800/50 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors">设置</button>
      </div>
    </div>

    <!-- Chat Container -->
    <div class="flex-1 flex border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-slate-50 dark:bg-gray-800/30">
      
      <!-- Session List (Left) -->
      <div class="w-80 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A1120] flex flex-col">
        <div class="p-3 border-b border-gray-100 dark:border-gray-800">
          <div class="relative">
            <input type="text" placeholder="搜索联系人..." class="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-50 dark:bg-gray-800/50 border border-transparent focus:border-orange-500 focus:bg-white dark:focus:bg-[#0A1120] outline-none text-sm transition-all dark:text-slate-200">
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
        </div>
        
        <div class="flex-1 overflow-y-auto custom-scrollbar">
          <div v-for="session in sessions" :key="session.id" 
               @click="handleSelectSession(session.id)"
               :class="activeSessionId === session.id ? 'bg-orange-50 dark:bg-orange-500/10 border-l-4 border-orange-500' : 'hover:bg-slate-50 dark:hover:bg-gray-800/50 border-l-4 border-transparent'"
               class="p-4 border-b border-gray-50 dark:border-gray-800/50 cursor-pointer transition-colors flex gap-3">
            <div class="relative">
              <img :src="session.avatar" class="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-700" />
              <div v-if="session.unread" class="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white dark:border-[#0A1120] text-[8px] font-bold text-white flex items-center justify-center">{{ session.unread }}</div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-1">
                <span class="font-bold text-slate-800 dark:text-slate-200 text-sm truncate">{{ session.name }}</span>
                <span class="text-xs text-slate-400 shrink-0">{{ session.time }}</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate">{{ session.lastMsg }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Window (Right) -->
      <div class="flex-1 flex flex-col bg-slate-50 dark:bg-gray-800/30">
        <!-- Chat Header -->
        <div class="h-16 px-6 bg-white dark:bg-[#0A1120] border-b border-gray-100 dark:border-gray-800 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-3">
            <h3 class="font-bold text-slate-800 dark:text-slate-200">{{ activeSession.name }}</h3>
            <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-50 text-amber-500 border border-amber-100">VIP{{ Math.floor(Math.random() * 4) + 1 }}</span>
          </div>
          <button @click="showProfileDrawer = true" class="text-sm text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            查看客户资料
          </button>
        </div>

        <!-- Messages Area -->
        <div class="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar">
          <div class="text-center">
            <span class="text-xs text-slate-400 bg-slate-100 dark:bg-gray-800 px-2 py-1 rounded">今天 {{ activeSession.time }}</span>
          </div>
          
          <!-- Received -->
          <div class="flex gap-3">
            <img :src="activeSession.avatar" class="w-8 h-8 rounded-full border border-gray-200" />
            <div>
              <div class="bg-white dark:bg-[#0A1120] p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-800 text-sm text-slate-700 dark:text-slate-300">
                {{ activeSession.lastMsg }}
              </div>
            </div>
          </div>
          
          <!-- Sent (Only show if it's the first session as a demo) -->
          <div v-if="activeSession.id === 1" class="flex gap-3 flex-row-reverse">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="w-8 h-8 rounded-full border border-gray-200" />
            <div>
              <div class="bg-gradient-to-br from-orange-500 to-rose-500 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white">
                您好，{{ activeSession.name }}！这款商品目前还有最后 2 件库存哦，您可以直接下单。
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="bg-white dark:bg-[#0A1120] border-t border-gray-100 dark:border-gray-800 p-4 shrink-0">
          <div class="flex gap-2 mb-3">
            <button class="p-1.5 text-slate-400 hover:text-orange-500 rounded hover:bg-slate-50 transition-colors"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></button>
            <button class="p-1.5 text-slate-400 hover:text-orange-500 rounded hover:bg-slate-50 transition-colors"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></button>
            <button class="p-1.5 text-slate-400 hover:text-orange-500 rounded hover:bg-slate-50 transition-colors"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg></button>
          </div>
          <div class="flex gap-4 items-end">
            <textarea rows="3" placeholder="输入消息回复用户..." class="flex-1 resize-none px-3 py-2 rounded-lg bg-slate-50 dark:bg-gray-800/50 border border-transparent focus:border-orange-500 focus:bg-white outline-none text-sm transition-all custom-scrollbar dark:text-slate-200"></textarea>
            <button class="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all mb-1">发送</button>
          </div>
        </div>
      </div>
      
    </div>

    <!-- 客户资料抽屉 -->
    <n-drawer v-model:show="showProfileDrawer" :width="360" placement="right">
      <n-drawer-content title="客户资料" closable>
        <div class="space-y-6">
          <!-- 基本信息 -->
          <div class="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
            <img :src="activeSession.avatar" class="w-16 h-16 rounded-full border border-gray-200 dark:border-gray-700" />
            <div>
              <div class="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">{{ activeSession.name }}</div>
              <div class="text-sm text-slate-500 mb-2">138****5678</div>
              <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-50 text-amber-500 border border-amber-100">VIP会员</span>
            </div>
          </div>
          
          <!-- 交易数据 -->
          <div class="grid grid-cols-2 gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
            <div class="bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl text-center">
              <div class="text-xs text-slate-500 mb-1">累计消费</div>
              <div class="text-lg font-bold text-orange-500">¥ 12,840.00</div>
            </div>
            <div class="bg-slate-50 dark:bg-gray-800/50 p-4 rounded-xl text-center">
              <div class="text-xs text-slate-500 mb-1">订单数</div>
              <div class="text-lg font-bold text-slate-800 dark:text-slate-200">45 <span class="text-xs font-normal text-slate-500">笔</span></div>
            </div>
          </div>
          
          <!-- 用户标签 -->
          <div>
            <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">用户标签</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-rose-50 text-rose-500 dark:bg-rose-500/10 rounded text-xs">高频复购</span>
              <span class="px-3 py-1.5 bg-blue-50 text-blue-500 dark:bg-blue-500/10 rounded text-xs">品质偏好</span>
              <span class="px-3 py-1.5 bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 rounded text-xs">极少退货</span>
            </div>
          </div>
          
          <!-- 快捷操作 -->
          <div class="pt-4 flex gap-3">
            <button @click="router.push(`/user/profile/${activeSession.id}`)" class="flex-1 py-2 bg-slate-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors font-medium text-sm">完整画像</button>
            <button @click="router.push(`/user/orders/${activeSession.id}`)" class="flex-1 py-2 bg-slate-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors font-medium text-sm">历史订单</button>
          </div>
        </div>
      </n-drawer-content>
    </n-drawer>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NDrawer, NDrawerContent } from 'naive-ui'

const router = useRouter()

const sessions = ref([
  { id: 1, name: '张先生', lastMsg: '好的，那如果大小不合适支持退换吗？', time: '10:26', unread: 2, active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
  { id: 2, name: '李小姐', lastMsg: '麻烦帮我催一下发货', time: '09:15', unread: 1, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
  { id: 3, name: '陈同学', lastMsg: '[图片]', time: '昨天', unread: 0, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie' },
  { id: 4, name: '王阿姨', lastMsg: '已经收到货了，非常满意！', time: '昨天', unread: 0, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace' },
  { id: 5, name: '刘老板', lastMsg: '批量采购有优惠吗？', time: '星期一', unread: 0, active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank' }
])

const activeSessionId = ref(1)

const activeSession = computed(() => {
  return sessions.value.find(s => s.id === activeSessionId.value) || sessions.value[0]
})

const handleSelectSession = (id: number) => {
  activeSessionId.value = id
  const session = sessions.value.find(s => s.id === id)
  if (session) {
    session.unread = 0 // 点击后清空未读数
  }
}

const showProfileDrawer = ref(false)

const openSettings = () => {
  router.push('/store/settings/service')
}
</script>