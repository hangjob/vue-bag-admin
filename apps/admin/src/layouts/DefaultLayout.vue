<template>
  <div class="app-layout bg-orange-50/50 dark:bg-[#050B14] text-slate-800 dark:text-slate-300 min-h-screen relative overflow-hidden font-sans transition-colors duration-300">
    <!-- Warm E-commerce Background Accents -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-orange-200/40 dark:bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/30 dark:bg-rose-500/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300"></div>

    <!-- 顶部导航栏 -->
    <header class="bg-white/90 dark:bg-[#0A1120]/90 backdrop-blur-xl border-b border-orange-100 dark:border-gray-800 flex justify-between items-center h-16 shrink-0 relative z-20 px-4 md:px-6 shadow-[0_4px_20px_rgba(251,146,60,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-colors duration-300">
      <!-- 左侧：Logo + 标题 + 分割线 + 左侧导航 -->
      <div class="flex items-center h-full">
        <!-- 移动端汉堡菜单按钮 -->
        <button 
          v-if="isMobile" 
          @click="menuStore.toggleMobileDrawer()"
          class="p-2 -ml-2 mr-2 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors md:hidden text-orange-500 dark:text-orange-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div class="flex items-center gap-3 cursor-pointer group">
          <div class="relative flex items-center justify-center h-10 w-10 bg-gradient-to-br from-orange-400 to-rose-500 rounded-xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 group-hover:-translate-y-0.5 transition-all duration-300">
            <svg viewBox="0 0 24 24" class="h-6 w-6 text-white" fill="currentColor">
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4zm-6-2h4v2h-4V4zm10 14H4V8h16v10z"/>
              <path d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/>
            </svg>
          </div>
          <h1 class="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-500 dark:from-orange-400 dark:to-rose-400">
            Vue Bag Admin
          </h1>
        </div>
        
        <div class="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-700 mx-6 transition-colors duration-300"></div>
        
        <!-- 左侧菜单: 动态显示当前菜单 -->
        <div class="hidden md:flex items-center text-sm font-bold text-slate-700 dark:text-slate-200">
          <div class="flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-gray-800 rounded-full text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-gray-700 transition-colors duration-300">
            {{ currentMenuTitle || '商城总览' }}
          </div>
        </div>
      </div>
      
      <!-- 右侧：工具栏 -->
      <div class="flex items-center space-x-4 md:space-x-6 text-slate-500 dark:text-slate-400 font-medium">
        <!-- 首页 -->
        <div class="hidden sm:flex items-center gap-1.5 cursor-pointer hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm group" @click="router.push('/dashboard')">
          <div class="p-1.5 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span class="hidden lg:inline">首页</span>
        </div>

        <!-- 通知 -->
        <NPopover trigger="click" placement="bottom-end" :width="320" style="padding: 0; border-radius: 12px; overflow: hidden;">
          <template #trigger>
            <div class="hidden sm:flex items-center gap-1.5 cursor-pointer hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm group relative">
              <div class="p-1.5 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <span class="hidden lg:inline">消息</span>
            </div>
          </template>
          
          <!-- 弹出框内容 -->
          <div class="bg-white dark:bg-[#0A1120] flex flex-col">
            <div class="px-4 py-3 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
              <span class="font-bold text-slate-700 dark:text-slate-200">消息通知</span>
              <span @click="handleMarkAllRead" class="text-xs text-orange-500 cursor-pointer hover:text-orange-600 transition-colors">全部已读</span>
            </div>
            
            <NTabs v-model:value="messageTabs" type="line" justify-content="space-evenly" class="mt-1" pane-style="padding: 0;">
              <NTabPane name="notify" :tab="`通知 (${unreadCount})`">
                <div class="max-h-[300px] overflow-y-auto custom-scrollbar">
                  <div v-if="notifications.length > 0" class="flex flex-col">
                    <div 
                      v-for="item in notifications" 
                      :key="item.id"
                      class="px-4 py-3 hover:bg-orange-50/50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors flex gap-3 group relative"
                      :class="{ 'opacity-60': item.read }"
                    >
                      <div v-if="!item.read" class="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                      <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" :class="item.color">
                        <span class="text-lg">{{ item.icon }}</span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ item.title }}</p>
                        <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">{{ item.time }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="py-10">
                    <NEmpty description="暂无新通知" />
                  </div>
                </div>
              </NTabPane>
              
              <NTabPane name="system" tab="系统">
                <div class="max-h-[300px] overflow-y-auto custom-scrollbar">
                  <div v-if="systemMessages.length > 0" class="flex flex-col">
                    <div 
                      v-for="item in systemMessages" 
                      :key="item.id"
                      class="px-4 py-3 hover:bg-orange-50/50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors flex gap-3 group"
                      :class="{ 'opacity-60': item.read }"
                    >
                      <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" :class="item.color">
                        <span class="text-lg">{{ item.icon }}</span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{{ item.title }}</p>
                        <p class="text-xs text-slate-400 dark:text-slate-500 mt-1">{{ item.time }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="py-10">
                    <NEmpty description="暂无系统消息" />
                  </div>
                </div>
              </NTabPane>
              
              <NTabPane name="todo" tab="待办">
                <div class="max-h-[300px] overflow-y-auto custom-scrollbar py-10">
                  <NEmpty description="暂无待办事项" />
                </div>
              </NTabPane>
            </NTabs>
            
            <div class="border-t border-gray-100 dark:border-gray-800 p-2">
              <button class="w-full py-2 text-sm text-center text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                查看全部消息
              </button>
            </div>
          </div>
        </NPopover>

        <!-- 多语言 -->
        <NDropdown trigger="click" :options="langOptions" @select="handleLangSelect">
          <div class="flex items-center gap-1.5 cursor-pointer hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm group">
            <div class="p-1.5 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <span class="hidden md:inline">{{ locale === 'en' ? 'EN' : '中' }}</span>
          </div>
        </NDropdown>

        <!-- 暗黑模式切换 -->
        <div class="flex items-center gap-1.5 cursor-pointer transition-colors text-sm group" @click="userStore.toggleTheme()">
          <div class="p-1.5 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-gray-800 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            <!-- 太阳图标 (亮色模式显示) -->
            <svg v-if="userStore.theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <!-- 月亮图标 (暗色模式显示) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </div>
        </div>

        <!-- 用户名 -->
        <NDropdown trigger="click" :options="userOptions" @select="handleUserSelect">
          <div class="flex items-center gap-2 cursor-pointer hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm pl-4 border-l border-gray-200 dark:border-gray-700 group">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffedd5" alt="avatar" class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-sm group-hover:border-orange-200 dark:group-hover:border-orange-500/50 transition-colors" />
            <span class="font-bold text-slate-700 dark:text-slate-200">{{ userStore.username || 'Admin' }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </NDropdown>
      </div>
    </header>

    <main class="flex h-[calc(100vh-64px)] relative z-10">
      <!-- 移动端遮罩层 -->
      <div 
        v-if="isMobile && menuStore.mobileDrawerOpen"
        class="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm z-20 md:hidden transition-opacity"
        @click="menuStore.setMobileDrawer(false)"
      ></div>

      <!-- 侧边栏 -->
      <aside 
        class="bg-white dark:bg-[#0A1120] border-r border-gray-100 dark:border-gray-800 flex flex-col transition-all duration-300 z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]"
        :class="[
          isMobile ? 'fixed inset-y-0 left-0 h-full w-64 -translate-x-full' : (collapsed ? 'w-[72px]' : 'w-64'),
          isMobile && menuStore.mobileDrawerOpen ? '!translate-x-0 pt-16' : ''
        ]"
      >
        <!-- PC端折叠按钮 -->
        <div class="p-3 hidden md:flex items-center overflow-hidden border-b border-gray-50 dark:border-gray-800/50 transition-all duration-300"
             :class="collapsed ? 'justify-center' : 'justify-between'"
        >
          <div class="flex items-center gap-2 pl-1 transition-all duration-300"
               :class="collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'"
          >
            <div class="w-1.5 h-4 bg-gradient-to-b from-orange-400 to-rose-500 rounded-full flex-shrink-0 shadow-sm"></div>
            <span class="text-sm font-bold text-slate-600 dark:text-slate-300 tracking-wider whitespace-nowrap">
              导航菜单
            </span>
          </div>
          <button
            class="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 transition-all shadow-sm"
            type="button"
            @click="menuStore.toggleCollapsed()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300" :class="{ 'rotate-180': collapsed }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto custom-scrollbar p-3">
          <NMenu
            :collapsed="!isMobile && collapsed"
            :collapsed-width="48"
            :collapsed-icon-size="22"
            :icon-size="20"
            :expanded-keys="menuStore.expandedKeys"
            :options="menuOptions"
            :value="activeKey"
            @update:value="handleMenuSelect"
            @update:expanded-keys="menuStore.setExpandedKeys"
            class="ecommerce-menu"
          />
        </div>
      </aside>

      <!-- 主要内容区 -->
      <section class="flex-1 flex flex-col min-w-0 overflow-hidden bg-transparent">
        <TabBar class="hidden sm:flex border-b border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-[#0A1120]/60 backdrop-blur-md transition-colors duration-300" />
        <div class="flex-1 overflow-auto custom-scrollbar relative flex flex-col">
          <div class="flex-1 p-4 md:p-6">
            <slot />
          </div>
          <!-- 底部版权信息 -->
          <footer class="py-4 text-center text-sm text-slate-400 dark:text-slate-500 border-t border-slate-200/50 dark:border-gray-800/50 mt-auto">
            <p>Copyright © {{ new Date().getFullYear() }} Vue Bag Admin. All rights reserved.</p>
            <p class="text-xs mt-1 opacity-75">Made with ❤️ by Vue-Bag-Admin</p>
          </footer>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
/* Custom scrollbar for clean UI */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #f97316;
}

/* Override NMenu styles for ecommerce theme */
.ecommerce-menu .n-menu-item-content {
  border-radius: 12px !important;
  transition: all 0.2s ease !important;
  margin-bottom: 4px;
}
.ecommerce-menu .n-menu-item-content:hover {
  background-color: #fff7ed !important; /* orange-50 */
  color: #ea580c !important; /* orange-600 */
}
.dark .ecommerce-menu .n-menu-item-content:hover {
  background-color: #1f2937 !important; /* gray-800 */
  color: #fb923c !important; /* orange-400 */
}
.ecommerce-menu .n-menu-item-content--selected {
  background: linear-gradient(135deg, #f97316 0%, #f43f5e 100%) !important;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.25);
}
.dark .ecommerce-menu .n-menu-item-content--selected {
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.15);
}
.ecommerce-menu .n-menu-item-content--selected,
.ecommerce-menu .n-menu-item-content--selected .n-menu-item-content-header,
.ecommerce-menu .n-menu-item-content--selected .n-menu-item-content-header a,
.ecommerce-menu .n-menu-item-content--selected .n-menu-item-content__icon {
  color: white !important;
}
.ecommerce-menu .n-menu-item-content-header {
  font-weight: 600;
}
</style>

<script setup lang="ts">
import { computed, h, ref, watchEffect } from 'vue'
import { NMenu, NDropdown, NPopover, NTabs, NTabPane, NEmpty } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useMenuStore } from '../stores/menu'
import { useUserStore } from '../stores/user'
import { renderMenuIcon } from '../icons/menu'
import TabBar from './components/TabBar.vue'
import type { MenuConfig } from '@bag/core'

const { locale, t } = useI18n()
const currentLang = ref(locale.value)
const menuStore = useMenuStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

// 消息通知数据
const messageTabs = ref('notify')
const notifications = ref([
  { id: 1, title: '您有一个新的订单，请及时处理', time: '10分钟前', type: 'order', read: false, icon: '📦', color: 'bg-orange-100 dark:bg-orange-500/20 text-orange-500' },
  { id: 2, title: '库存预警：商品“高级旅行背包”库存不足', time: '1小时前', type: 'warning', read: false, icon: '⚠️', color: 'bg-rose-100 dark:bg-rose-500/20 text-rose-500' },
  { id: 3, title: '您的提现申请已通过', time: '昨天', type: 'success', read: true, icon: '💰', color: 'bg-green-100 dark:bg-green-500/20 text-green-500' }
])
const systemMessages = ref([
  { id: 1, title: '系统升级通知：今晚凌晨2点进行停机维护', time: '2天前', read: true, icon: '🔔', color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-500' }
])

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const handleMarkAllRead = () => {
  notifications.value.forEach(n => n.read = true)
}

// 响应式断点检测
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md') // 小于 768px 视为移动端

// 监听屏幕尺寸变化，如果是移动端，自动折叠PC端侧边栏以防样式错乱
watchEffect(() => {
  if (isMobile.value) {
    menuStore.setCollapsed(true)
  }
})

const collapsed = computed(() => menuStore.collapsed)

// 如果当前路由在某个父级菜单下且该子路由没有出现在左侧菜单中（比如详情页、内嵌页），我们应该高亮父级菜单。
// 比如 /store/settings/base 应该高亮 /store/settings
const activeKey = computed(() => {
  const path = route.path
  
  // 对于商城插件中的特殊子页面进行降级匹配，保持父级菜单高亮
  if (path.startsWith('/store/settings/')) {
    return '/store/settings'
  }
  if (path.startsWith('/product/edit/')) {
    return '/product/list' // 编辑商品时高亮商品列表
  }
  if (path.startsWith('/product/publish')) {
    return '/product/publish' // 发布商品高亮自身
  }
  if (path.startsWith('/order/detail/') || path.startsWith('/order/ship/')) {
    return '/order/list'
  }
  if (path.startsWith('/order/return/')) {
    return '/order/returns'
  }
  if (path.startsWith('/user/profile/') || path.startsWith('/user/orders/')) {
    return '/user/list'
  }
  if (path === '/marketing/create') {
    return '/marketing/index'
  }
  if (path === '/finance/withdraw') {
    return '/finance/flow/daily'
  }
  
  if (path.startsWith('/sys-setting/advanced')) {
    return '/sys-setting/advanced'
  }
  if (path.startsWith('/sys-setting')) {
    return '/sys-setting'
  }
  
  return path
})

const sortMenus = (menus: MenuConfig[]) => {
  return [...menus].sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0))
}

const hasAccess = (menu: MenuConfig) => {
  if (menu.hidden) return false
  if (!userStore.hasRole(menu.roles)) return false
  if (!userStore.hasPermission(menu.permissions)) return false
  return true
}

const filterMenus = (menus: MenuConfig[]): MenuConfig[] => {
  return sortMenus(menus)
    .map((m) => {
      const children = m.children ? filterMenus(m.children) : undefined
      return { ...m, children }
    })
    .filter((m) => {
      if (!hasAccess(m)) return false
      if (m.children?.length) return true
      return true
    })
}

const baseMenus: MenuConfig[] = [
  {
    path: '/dashboard',
    title: 'menu.dashboard',
    icon: 'dashboard',
  },
]

const currentMenuTitle = computed(() => {
  const merged = [...baseMenus, ...menuStore.menus]
  const findTitle = (menus: MenuConfig[], targetPath: string): string | undefined => {
    for (const m of menus) {
      if (m.path === targetPath) return m.title
      if (m.children) {
        const found = findTitle(m.children, targetPath)
        if (found) return found
      }
    }
    return undefined
  }
  
  const titleKey = findTitle(merged, activeKey.value)
  if (titleKey) return String(t(titleKey))
  if (route.meta?.title) return String(t(route.meta.title as string))
  return ''
})

const menuOptions = computed(() => {
  const mapMenu = (menu: MenuConfig): any => {
    const labelText = menu.title ? String(t(menu.title)) : ''
    return {
      key: menu.path,
      label: () => h('div', { class: 'flex items-center justify-between w-full pr-2' }, [
        h('span', labelText || menu.title),
        menu.badge ? h('span', { class: 'px-1.5 py-0.5 text-[10px] font-black leading-none bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded shadow-sm scale-90 origin-right' }, menu.badge) : null
      ]),
      icon: renderMenuIcon(menu.icon),
      children: menu.children?.map(mapMenu),
    }
  }

  const merged = [...baseMenus, ...menuStore.menus]
  return filterMenus(merged).map(mapMenu)
})

const toggleLang = (e: Event) => {
  const lang = (e.target as HTMLSelectElement).value
  locale.value = lang
  localStorage.setItem('lang', lang)
}

const langOptions = [
  { label: '中文', key: 'zh-CN' },
  { label: 'English', key: 'en' }
]

const handleLangSelect = (key: string) => {
  locale.value = key
  localStorage.setItem('lang', key)
}

const userOptions = computed(() => [
  { label: t('sysSetting.profile') || '个人中心', key: 'profile' },
  { label: t('sysSetting.logout') || '退出登录', key: 'logout' }
])

const handleUserSelect = (key: string) => {
  if (key === 'profile') {
    router.push('/profile')
  } else if (key === 'logout') {
    handleLogout()
  }
}

const handleMenuSelect = (key: string) => {
  // 如果是外部链接 (http:// 或 https:// 开头)，则使用 window.open 在新标签页打开
  if (key.startsWith('http://') || key.startsWith('https://')) {
    window.open(key, '_blank', 'noopener,noreferrer')
    return
  }
  
  router.push(key)
  // 在移动端点击菜单后自动关闭抽屉
  if (isMobile.value) {
    menuStore.setMobileDrawer(false)
  }
}

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>
