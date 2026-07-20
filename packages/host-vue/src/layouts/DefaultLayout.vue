<template>
  <div
    class="app-layout bg-orange-50/50 dark:bg-[#050B14] text-slate-800 dark:text-slate-300 min-h-screen relative overflow-hidden font-sans transition-colors duration-300"
  >
    <!-- Warm E-commerce Background Accents -->
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-orange-200/40 dark:bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/30 dark:bg-rose-500/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300"
    ></div>

    <!-- 顶部导航栏 -->
    <header
      class="bg-white/90 dark:bg-[#0A1120]/90 backdrop-blur-xl border-b border-orange-100 dark:border-gray-800 flex justify-between items-center h-16 shrink-0 relative z-20 px-4 md:px-6 shadow-[0_4px_20px_rgba(251,146,60,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-colors duration-300"
    >
      <!-- 左侧：Logo + 标题 + 分割线 + 左侧导航 -->
      <div class="flex items-center h-full">
        <!-- 移动端汉堡菜单按钮 -->
        <button
          v-if="isMobile"
          @click="menuStore.toggleMobileDrawer()"
          class="p-2 -ml-2 mr-2 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors md:hidden text-orange-500 dark:text-orange-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <component :is="brandSlotComponent" v-if="brandSlotComponent" class="bag-brand-slot" />
        <button
          v-else
          class="bag-brand group"
          :class="{ 'is-static': !branding.homePath }"
          type="button"
          @click="handleBrandClick"
        >
          <span class="bag-brand-logo">
            <img
              v-if="branding.logo"
              :src="branding.logo"
              :alt="branding.logoAlt || branding.title"
              class="bag-brand-logo-image"
            />
            <svg v-else viewBox="0 0 24 24" class="h-6 w-6 text-white" fill="currentColor">
              <path
                d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4zm-6-2h4v2h-4V4zm10 14H4V8h16v10z"
              />
              <path
                d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"
              />
            </svg>
          </span>
          <span v-if="branding.showTitle" class="bag-brand-copy">
            <span class="bag-brand-title">{{ displayBrandTitle }}</span>
            <span v-if="branding.badge" class="bag-brand-badge">{{ branding.badge }}</span>
          </span>
        </button>

        <div
          class="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-700 mx-6 transition-colors duration-300"
        ></div>

        <!-- 左侧菜单: 动态显示当前菜单 -->
        <div
          class="hidden md:flex items-center text-sm font-bold text-slate-700 dark:text-slate-200"
        >
          <div
            class="flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-gray-800 rounded-full text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-gray-700 transition-colors duration-300"
          >
            {{ currentMenuTitle || '商城总览' }}
          </div>
        </div>
      </div>

      <!-- 右侧：工具栏 -->
      <div class="bag-header-actions text-slate-500 dark:text-slate-400 font-medium">
        <!-- 首页 -->
        <div class="bag-header-action hidden sm:flex" @click="router.push('/dashboard')">
          <div class="bag-header-action-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span class="bag-header-action-label hidden lg:inline">首页</span>
        </div>

        <!-- 通知 -->
        <NPopover
          trigger="click"
          placement="bottom-end"
          :width="320"
          style="padding: 0; border-radius: 12px; overflow: hidden"
          @update:show="handleMessagePopoverVisibleChange"
        >
          <template #trigger>
            <div class="bag-header-action hidden sm:flex relative">
              <div class="bag-header-action-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <span class="bag-header-action-label hidden lg:inline">消息</span>
            </div>
          </template>

          <!-- 弹出框内容 -->
          <div class="bg-white dark:bg-[#0A1120] flex flex-col">
            <div
              class="px-4 py-3 flex justify-between items-center border-b border-gray-100 dark:border-gray-800"
            >
              <span class="font-bold text-slate-700 dark:text-slate-200">消息通知</span>
              <button type="button" class="bag-notice-action" @click="handleMarkAllRead">
                全部已读
              </button>
            </div>

            <NTabs
              v-model:value="messageTabs"
              type="line"
              justify-content="space-evenly"
              class="mt-1"
              pane-style="padding: 0;"
            >
              <NTabPane
                v-for="tab in messageTabList"
                :key="tab.key"
                :name="tab.key"
                :tab="formatMessageTabLabel(tab)"
              >
                <div class="max-h-[300px] overflow-y-auto custom-scrollbar">
                  <div
                    v-if="messageLoading"
                    class="flex items-center justify-center py-10 text-sm text-slate-400 dark:text-slate-500"
                  >
                    消息加载中...
                  </div>
                  <div v-else-if="getMessageListByTab(tab.key).length > 0" class="flex flex-col">
                    <div
                      v-for="item in getMessageListByTab(tab.key)"
                      :key="item.id"
                      class="px-4 py-3 hover:bg-orange-50/50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors flex gap-3 group relative"
                      :class="{ 'opacity-60': item.read }"
                      @click="handleMessageItemClick(item, tab.key)"
                    >
                      <div
                        v-if="!item.read"
                        class="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-rose-500"
                      ></div>
                      <div
                        class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        :class="item.color"
                      >
                        <span class="text-lg">{{ item.icon || '🔔' }}</span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p
                          class="text-sm text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
                        >
                          {{ item.title }}
                        </p>
                        <p v-if="item.time" class="text-xs text-slate-400 dark:text-slate-500 mt-1">
                          {{ item.time }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="py-10">
                    <NEmpty :description="tab.emptyText || `暂无${tab.label}`" />
                  </div>
                </div>
              </NTabPane>
            </NTabs>

            <div class="border-t border-gray-100 dark:border-gray-800 p-2">
              <button type="button" class="bag-notice-footer-btn" @click="handleViewAllMessages">
                查看全部消息
              </button>
            </div>
          </div>
        </NPopover>

        <!-- 多语言 -->
        <NDropdown trigger="click" :options="langOptions" @select="handleLangSelect">
          <div class="bag-header-action">
            <div class="bag-header-action-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                />
                <path d="M2 12h20" />
              </svg>
            </div>
            <span class="bag-header-action-label hidden md:inline">
              {{ locale === 'en' ? 'EN' : '中' }}
            </span>
          </div>
        </NDropdown>

        <!-- 主题切换 -->
        <div
          class="bag-header-action bag-header-action--icon"
          @click="appConfigStore.toggleTheme()"
        >
          <div class="bag-header-action-icon">
            <!-- 太阳图标 (亮色模式显示) -->
            <svg
              v-if="appConfigStore.theme === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <!-- 月亮图标 (暗色模式显示) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>

        <!-- 外观配置中心 -->
        <div
          class="bag-header-action bag-header-action--icon"
          @click="appConfigStore.openSettingsDrawer()"
        >
          <div class="bag-header-action-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </div>
        </div>

        <!-- 用户名 -->
        <NDropdown trigger="click" :options="userOptions" @select="handleUserSelect">
          <div class="bag-user-entry">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffedd5"
              alt="avatar"
              class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow-sm group-hover:border-orange-200 dark:group-hover:border-orange-500/50 transition-colors"
            />
            <span class="font-bold text-slate-700 dark:text-slate-200">
              {{ userStore.username || 'Admin' }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
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
          isMobile
            ? 'fixed inset-y-0 left-0 h-full w-64 -translate-x-full'
            : collapsed
              ? 'w-[72px]'
              : 'w-64',
          isMobile && menuStore.mobileDrawerOpen ? '!translate-x-0 pt-16' : ''
        ]"
      >
        <!-- PC端折叠按钮 -->
        <div class="bag-sidebar-toolbar" :class="{ 'is-collapsed': collapsed }">
          <div class="bag-sidebar-toolbar-content" :class="{ 'is-hidden': collapsed }">
            <div class="bag-sidebar-toolbar-accent"></div>
            <span class="bag-sidebar-toolbar-title">导航菜单</span>
          </div>
          <button
            class="bag-sidebar-collapse-btn"
            type="button"
            @click="menuStore.toggleCollapsed()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bag-sidebar-collapse-icon"
              :class="{ 'is-rotated': collapsed }"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
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
        <TabBar
          v-if="appConfigStore.showTabBar"
          class="hidden sm:flex border-b border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-[#0A1120]/60 backdrop-blur-md transition-colors duration-300"
        />
        <div class="flex-1 overflow-auto custom-scrollbar relative flex flex-col">
          <div
            class="flex-1 p-4 md:p-6"
            :class="appConfigStore.contentWidth === 'compact' ? 'mx-auto w-full max-w-7xl' : ''"
          >
            <slot />
          </div>
          <!-- 底部版权信息 -->
          <footer
            v-if="appConfigStore.showFooter"
            class="py-4 text-center text-sm text-slate-400 dark:text-slate-500 border-t border-slate-200/50 dark:border-gray-800/50 mt-auto"
          >
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
import { computed, h, ref, watch, watchEffect } from 'vue'
import { NMenu, NDropdown, NPopover, NTabs, NTabPane, NEmpty } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useMenuStore } from '../stores/menu'
import { useUserStore } from '../stores/user'
import { renderMenuIcon } from '../icons/menu'
import TabBar from './components/TabBar.vue'
import type { MenuConfig } from '@bag/core'
import { canAccess } from '../access'
import { useAppConfigStore } from '../stores/app-config'
import { useHostUiConfig, type HostMessageItem, type HostMessageTab } from '../core/host-ui'

const { locale, fallbackLocale, messages, t } = useI18n()
const menuStore = useMenuStore()
const userStore = useUserStore()
const appConfigStore = useAppConfigStore()
const hostUi = useHostUiConfig()
const router = useRouter()
const route = useRoute()

// 消息中心的数据通过 host-ui 注入，使用方可以在 bootstrapPlugins({ ui }) 中对接真实接口。
const messageTabs = ref('notify')
const messagePopoverVisible = ref(false)
const messageLoading = ref(false)
const unreadCount = ref(0)
const messageItems = ref<Record<string, HostMessageItem[]>>({})

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
const branding = computed(() => hostUi.branding)
const messageCenter = computed(() => hostUi.messageCenter)
const messageTabList = computed(() => messageCenter.value.tabs)
const brandSlotComponent = computed(() => hostUi.slots.brand)
const displayBrandTitle = computed(() => {
  const compactTitle = branding.value.compactTitle?.trim()
  if (isMobile.value && compactTitle) {
    return compactTitle
  }
  return branding.value.title
})

watch(
  messageTabList,
  (tabs) => {
    if (!tabs.some((tab) => tab.key === messageTabs.value)) {
      messageTabs.value = tabs[0]?.key ?? 'notify'
    }
  },
  { immediate: true }
)

watch(messageTabs, (tab) => {
  if (messagePopoverVisible.value) {
    void loadMessageList(tab)
  }
})

const getMessageListByTab = (tabKey: string) => {
  return messageItems.value[tabKey] ?? []
}

const formatMessageTabLabel = (tab: HostMessageTab) => {
  if (tab.key === 'notify' && unreadCount.value > 0) {
    return `${tab.label} (${unreadCount.value})`
  }
  return tab.label
}

// 弹层打开时按需拉取当前 tab 数据，避免每次页面初始化都请求消息接口。
const loadMessageList = async (tabKey: string) => {
  messageLoading.value = true
  try {
    const list = await Promise.resolve(messageCenter.value.getList?.(tabKey) ?? [])
    messageItems.value = {
      ...messageItems.value,
      [tabKey]: list ?? []
    }
  } catch (error) {
    console.error('[bag-host] failed to load message list:', error)
    messageItems.value = {
      ...messageItems.value,
      [tabKey]: []
    }
  } finally {
    messageLoading.value = false
  }
}

const refreshUnreadCount = async () => {
  try {
    unreadCount.value = await Promise.resolve(
      messageCenter.value.getUnreadCount?.() ??
        Object.values(messageItems.value)
          .flat()
          .filter((item) => !item.read).length
    )
  } catch (error) {
    console.error('[bag-host] failed to load unread count:', error)
    unreadCount.value = 0
  }
}

const handleMessagePopoverVisibleChange = (visible: boolean) => {
  messagePopoverVisible.value = visible
  if (!visible) {
    return
  }

  void Promise.all([loadMessageList(messageTabs.value), refreshUnreadCount()])
}

const markMessageAsRead = (itemId: HostMessageItem['id'], tabKey: string) => {
  const nextList = getMessageListByTab(tabKey).map((item) =>
    item.id === itemId ? { ...item, read: true } : item
  )

  messageItems.value = {
    ...messageItems.value,
    [tabKey]: nextList
  }
}

const handleMarkAllRead = async () => {
  const currentTab = messageTabs.value
  await Promise.resolve(messageCenter.value.markAllRead?.(currentTab))
  await loadMessageList(currentTab)
  await refreshUnreadCount()
}

const handleMessageItemClick = async (item: HostMessageItem, tabKey: string) => {
  if (!item.read) {
    markMessageAsRead(item.id, tabKey)
    await refreshUnreadCount()
  }

  await Promise.resolve(messageCenter.value.onItemClick?.(item, tabKey))
}

const handleViewAllMessages = async () => {
  await Promise.resolve(messageCenter.value.onViewAll?.(messageTabs.value))
}

const activeKey = computed(() => {
  const menuPath = route.meta?.activeMenu
  return typeof menuPath === 'string' ? menuPath : route.path
})

const sortMenus = (menus: MenuConfig[]) => {
  return [...menus].sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0))
}

const hasAccess = (menu: MenuConfig) => {
  if (menu.hidden) return false
  return canAccess({
    roles: menu.roles,
    permissions: menu.permissions
  })
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
    icon: 'dashboard'
  }
]

const isI18nKeyLike = (value?: string) =>
  !!value && /^[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+$/.test(value)

// 菜单标题和标签栏共用同一套 locale/fallback 查找顺序，避免两边显示不一致。
const normalizeLocaleChain = () => {
  const chain = [locale.value]
  const fallback = fallbackLocale.value

  if (typeof fallback === 'string') {
    chain.push(fallback)
  } else if (Array.isArray(fallback)) {
    chain.push(...fallback)
  } else if (fallback && typeof fallback === 'object') {
    const localeFallback = fallback[locale.value]
    if (typeof localeFallback === 'string') {
      chain.push(localeFallback)
    } else if (Array.isArray(localeFallback)) {
      chain.push(...localeFallback)
    }

    const defaultFallback = fallback.default
    if (typeof defaultFallback === 'string') {
      chain.push(defaultFallback)
    } else if (Array.isArray(defaultFallback)) {
      chain.push(...defaultFallback)
    }
  }

  return [...new Set(chain.filter(Boolean))]
}

// 直接查消息对象，缺失 key 时静默返回 undefined，不触发 vue-i18n warning。
const getMessageByKey = (localeKey: string, messageKey: string) => {
  let current: unknown = (messages.value as Record<string, unknown> | undefined)?.[localeKey]

  for (const segment of messageKey.split('.')) {
    if (!current || typeof current !== 'object' || !(segment in current)) {
      return undefined
    }
    current = (current as Record<string, unknown>)[segment]
  }

  return typeof current === 'string' ? current : undefined
}

const resolveTitleText = (value?: string) => {
  if (!value) return ''
  if (!isI18nKeyLike(value)) return value

  // 只翻译已存在的 key，找不到时回退原值，避免宿主菜单持续打印缺词条警告。
  for (const localeKey of normalizeLocaleChain()) {
    const message = getMessageByKey(localeKey, value)
    if (message) return message
  }

  return value
}

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
  if (titleKey) return resolveTitleText(titleKey)
  if (route.meta?.title) return resolveTitleText(route.meta.title as string)
  return ''
})

const menuOptions = computed(() => {
  const mapMenu = (menu: MenuConfig): any => {
    const labelText = resolveTitleText(menu.title)
    return {
      key: menu.path,
      label: () =>
        h('div', { class: 'bag-menu-option-label' }, [
          h('span', { class: 'bag-menu-option-text' }, labelText || menu.title),
          menu.badge
            ? h(
                'span',
                {
                  class: 'bag-menu-badge'
                },
                menu.badge
              )
            : null
        ]),
      icon: renderMenuIcon(menu.icon),
      children: menu.children?.map(mapMenu)
    }
  }

  const merged = [...baseMenus, ...menuStore.menus]
  return filterMenus(merged).map(mapMenu)
})

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

const handleBrandClick = () => {
  const targetPath = branding.value.homePath
  if (!targetPath || route.path === targetPath) {
    return
  }
  void router.push(targetPath)
}

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<style>
.bag-header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

@media (min-width: 768px) {
  .bag-header-actions {
    gap: 24px;
  }
}

.bag-header-action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 32px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  color: inherit;
  transition: color 0.2s ease;
}

.bag-header-action:hover {
  color: #f97316;
}

.dark .bag-header-action:hover {
  color: #fb923c;
}

.bag-header-action-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 10px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.bag-header-action:hover .bag-header-action-icon {
  background: #fff7ed;
}

.dark .bag-header-action:hover .bag-header-action-icon {
  background: rgba(31, 41, 55, 1);
}

.bag-header-action-label {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.bag-header-action--icon {
  gap: 0;
}

.bag-user-entry {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding-left: 16px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-left: 1px solid #e5e7eb;
  transition: color 0.2s ease;
}

.dark .bag-user-entry {
  border-left-color: #374151;
}

.bag-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.bag-brand.is-static {
  cursor: default;
}

.bag-brand:focus-visible {
  outline: 2px solid rgba(249, 115, 22, 0.35);
  outline-offset: 6px;
  border-radius: 16px;
}

.bag-brand-slot {
  display: flex;
  align-items: center;
}

.bag-brand-logo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #fb923c 0%, #f43f5e 100%);
  color: #fff;
  box-shadow:
    0 10px 15px -3px rgba(249, 115, 22, 0.2),
    0 4px 6px -4px rgba(249, 115, 22, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.bag-brand-logo-image {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.bag-brand:hover .bag-brand-logo {
  transform: translateY(-2px);
  box-shadow:
    0 14px 24px -6px rgba(249, 115, 22, 0.28),
    0 8px 12px -8px rgba(244, 63, 94, 0.24);
}

.bag-brand-copy {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.bag-brand-title {
  display: inline-block;
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #1e293b;
  background: linear-gradient(90deg, #ea580c 0%, #f43f5e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bag-brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(249, 115, 22, 0.12);
  color: #ea580c;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.dark .bag-brand-title {
  background: linear-gradient(90deg, #fb923c 0%, #fb7185 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark .bag-brand-badge {
  background: rgba(251, 146, 60, 0.14);
  color: #fdba74;
}

.bag-sidebar-toolbar {
  display: none;
}

@media (min-width: 768px) {
  .bag-sidebar-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px;
    overflow: hidden;
    border-bottom: 1px solid rgba(249, 250, 251, 1);
    transition: all 0.3s ease;
  }

  .dark .bag-sidebar-toolbar {
    border-bottom-color: rgba(31, 41, 55, 0.5);
  }

  .bag-sidebar-toolbar.is-collapsed {
    justify-content: center;
  }
}

.bag-sidebar-toolbar-content {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 4px;
  min-width: 0;
  opacity: 1;
  width: auto;
  overflow: hidden;
  transition: all 0.3s ease;
}

.bag-sidebar-toolbar-content.is-hidden {
  opacity: 0;
  width: 0;
  padding-left: 0;
}

.bag-sidebar-toolbar-accent {
  width: 6px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #fb923c 0%, #f43f5e 100%);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
}

.bag-sidebar-toolbar-title {
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #475569;
}

.dark .bag-sidebar-toolbar-title {
  color: #cbd5e1;
}

.bag-sidebar-collapse-btn {
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f9fafb;
  color: #6b7280;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.bag-sidebar-collapse-btn:hover {
  background: #fff7ed;
  color: #ea580c;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.14);
}

.dark .bag-sidebar-collapse-btn {
  background: rgba(31, 41, 55, 0.8);
  color: #9ca3af;
}

.dark .bag-sidebar-collapse-btn:hover {
  background: rgba(31, 41, 55, 1);
  color: #fb923c;
}

.bag-sidebar-collapse-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.bag-sidebar-collapse-icon.is-rotated {
  transform: rotate(180deg);
}

.bag-menu-option-label {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-right: 8px;
}

.bag-menu-option-text {
  min-width: 0;
}

.bag-menu-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  padding: 2px 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f43f5e 0%, #f97316 100%);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  line-height: 1;
  box-shadow: 0 2px 8px rgba(244, 63, 94, 0.24);
  transform: scale(0.92);
  transform-origin: right center;
}

.bag-notice-action {
  appearance: none;
  -webkit-appearance: none;
  padding: 0;
  border: 0;
  background: transparent;
  color: #f97316;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;
}

.bag-notice-action:hover {
  color: #ea580c;
}

.dark .bag-notice-action {
  color: #fb923c;
}

.dark .bag-notice-action:hover {
  color: #fdba74;
}

.bag-notice-footer-btn {
  appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40px;
  padding: 8px 14px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #64748b;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.bag-notice-footer-btn:hover {
  background: #fff7ed;
  color: #f97316;
}

.dark .bag-notice-footer-btn {
  color: #94a3b8;
}

.dark .bag-notice-footer-btn:hover {
  background: rgba(31, 41, 55, 1);
  color: #fb923c;
}
</style>
