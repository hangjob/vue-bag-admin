<template>
  <div class="bg-white/80 dark:bg-[#0A1120]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/60 px-2 py-2.5 flex items-center gap-1 sticky top-0 z-10 shadow-sm transition-colors duration-300">
    
    <!-- 左箭头 -->
    <div
      class="flex-shrink-0 w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
      @click="scrollLeft"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>

    <!-- 标签列表 -->
    <div
      ref="scrollContainer"
      class="flex-1 flex items-center gap-2 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide scroll-smooth px-1"
    >
      <div
        v-for="tab in tabbarStore.tabs"
        :key="tab.fullPath"
        class="group relative flex items-center h-8 px-4 text-sm font-medium rounded-[6px] border cursor-pointer transition-all duration-300 flex-shrink-0"
        :class="[
          isActive(tab.fullPath)
            ? 'bg-gradient-to-r from-orange-50 to-rose-50 dark:from-orange-500/10 dark:to-rose-500/10 border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400 shadow-sm'
            : 'bg-white dark:bg-[#050B14] border-gray-200 dark:border-gray-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800 hover:text-slate-700 dark:hover:text-slate-300'
        ]"
        @click="navigateTo(tab.fullPath)"
        @contextmenu.prevent="handleContextMenu($event, tab)"
      >
        <!-- 小圆点指示器（仅激活状态显示） -->
        <span 
          v-if="isActive(tab.fullPath)" 
          class="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 mr-2"
        ></span>
        
        <!-- 标签标题 (支持国际化) -->
        <span class="z-10">{{ $t(tab.title || tab.name || 'Unknown') }}</span>
        
        <!-- 关闭按钮（Dashboard 不能关闭） -->
        <button
          v-if="tab.path !== '/dashboard'"
          class="ml-2 w-4 h-4 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-gray-700 hover:text-slate-700 dark:hover:text-slate-300 transition-colors z-10"
          @click.stop="closeTab(tab.fullPath)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 右箭头 -->
    <div
      class="flex-shrink-0 w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
      @click="scrollRight"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- 右键菜单 -->
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      :options="contextMenuOptions"
      :show="showDropdown"
      :on-clickoutside="onClickoutside"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import { useTabBarStore } from '../../stores/tabbar'
import { useRoute, useRouter } from 'vue-router'
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const tabbarStore = useTabBarStore()
const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// 滚动相关
const scrollContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' })
  }
}

// 自动滚动到激活的标签
const scrollToActiveTab = () => {
  nextTick(() => {
    if (!scrollContainer.value) return
    const activeTab = scrollContainer.value.querySelector('.bg-gradient-to-r') as HTMLElement
    if (activeTab) {
      const containerWidth = scrollContainer.value.clientWidth
      const tabLeft = activeTab.offsetLeft
      const tabWidth = activeTab.clientWidth
      const scrollLeft = scrollContainer.value.scrollLeft

      if (tabLeft < scrollLeft) {
        scrollContainer.value.scrollTo({ left: tabLeft - 20, behavior: 'smooth' })
      } else if (tabLeft + tabWidth > scrollLeft + containerWidth) {
        scrollContainer.value.scrollTo({ left: tabLeft + tabWidth - containerWidth + 20, behavior: 'smooth' })
      }
    }
  })
}

watch(() => route.fullPath, () => {
  scrollToActiveTab()
})

// 判断当前标签是否处于激活状态
const isActive = (fullPath: string) => {
  return route.fullPath === fullPath
}

// 点击标签页跳转
const navigateTo = (fullPath: string) => {
  if (route.fullPath !== fullPath) {
    router.push(fullPath)
  }
}

// 关闭标签页逻辑，独立提取方便复用
const handleCloseTab = (fullPath: string) => {
  const tabs = tabbarStore.tabs
  const index = tabs.findIndex(t => t.fullPath === fullPath)
  if (index === -1) return
  
  // 如果关闭的是当前激活的标签页，需要自动跳转到旁边的标签
  if (isActive(fullPath)) {
    // 优先跳转到左侧的标签，如果没有左侧则跳转到右侧，保底跳转到 dashboard
    const nextTab = tabs[index - 1] || tabs[index + 1]
    if (nextTab) {
      router.push(nextTab.fullPath)
    } else {
      router.push('/dashboard')
    }
  }
  tabbarStore.removeTab(fullPath)
}

const closeTab = (fullPath: string) => {
  handleCloseTab(fullPath)
}

// 右键菜单相关
const showDropdown = ref(false)
const x = ref(0)
const y = ref(0)
const activeContextPath = ref('')

const contextMenuOptions = computed(() => [
  { label: t('tabbar.reload', '重新加载'), key: 'reload' },
  { label: t('tabbar.close', '关闭标签'), key: 'close', disabled: activeContextPath.value === '/dashboard' },
  { label: t('tabbar.closeOther', '关闭其他'), key: 'closeOther' },
  { label: t('tabbar.closeLeft', '关闭左侧'), key: 'closeLeft' },
  { label: t('tabbar.closeRight', '关闭右侧'), key: 'closeRight' },
  { label: t('tabbar.closeAll', '全部关闭'), key: 'closeAll' }
])

const handleContextMenu = (e: MouseEvent, tab: any) => {
  e.preventDefault()
  showDropdown.value = false
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
    activeContextPath.value = tab.fullPath
  })
}

const onClickoutside = () => {
  showDropdown.value = false
}

const handleSelect = (key: string | number) => {
  showDropdown.value = false
  const path = activeContextPath.value
  
  switch (key) {
    case 'reload':
      if (path === route.fullPath) {
        // 如果是当前页面，重新加载
        router.replace({ path: '/redirect' + path }).catch(() => {
          // 如果没有 redirect 页面，简单刷新
          window.location.reload()
        })
      } else {
        router.push(path)
      }
      break
    case 'close':
      handleCloseTab(path)
      break
    case 'closeOther':
      tabbarStore.closeOtherTabs(path)
      if (!isActive(path)) {
        router.push(path)
      }
      break
    case 'closeLeft':
      tabbarStore.closeLeftTabs(path)
      if (tabbarStore.tabs.findIndex(t => t.fullPath === route.fullPath) === -1) {
        router.push(path)
      }
      break
    case 'closeRight':
      tabbarStore.closeRightTabs(path)
      if (tabbarStore.tabs.findIndex(t => t.fullPath === route.fullPath) === -1) {
        router.push(path)
      }
      break
    case 'closeAll':
      tabbarStore.clearTabs()
      router.push('/dashboard')
      break
  }
}
</script>

<style scoped>
/* 隐藏滚动条但保留滚动功能 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
