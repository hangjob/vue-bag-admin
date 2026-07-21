<template>
  <div class="tabbar-shell">
    <!-- 左箭头 -->
    <div class="tabbar-nav-btn" @click="scrollLeft">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>

    <!-- 标签列表 -->
    <div ref="scrollContainer" class="tabbar-scroll scrollbar-hide">
      <div
        v-for="tab in tabbarStore.tabs"
        :key="tab.fullPath"
        class="tabbar-item"
        :class="[isActive(tab.fullPath) ? 'is-active' : 'is-inactive']"
        @click="navigateTo(tab.fullPath)"
        @contextmenu.prevent="handleContextMenu($event, tab)"
      >
        <!-- 小圆点指示器（仅激活状态显示） -->
        <span v-if="isActive(tab.fullPath)" class="tabbar-item-dot"></span>

        <!-- 标签标题 (支持国际化) -->
        <span class="tabbar-item-title">{{ resolveTabTitle(tab) }}</span>

        <!-- 关闭按钮（Dashboard 不能关闭） -->
        <button
          v-if="tab.path !== navigation.homePath"
          type="button"
          class="tabbar-close-btn"
          @click.stop="closeTab(tab.fullPath)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tabbar-close-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- 右箭头 -->
    <div class="tabbar-nav-btn" @click="scrollRight">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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
import { useTabBarStore, type TabItem } from '../../stores/tabbar'
import { useRoute, useRouter } from 'vue-router'
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { getHostNavigationConfig } from '../../core/navigation'

const tabbarStore = useTabBarStore()
const route = useRoute()
const router = useRouter()
const { locale, fallbackLocale, messages, t } = useI18n()
const navigation = getHostNavigationConfig()

// 只有形如 `a.b.c` 的值才按国际化 key 处理，中文直写标题直接展示。
const isI18nKeyLike = (value?: string) =>
  !!value && /^[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+$/.test(value)

// 展开 vue-i18n 的 locale/fallback 配置，按顺序查找可用文案。
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

// 手动读取消息表，避免直接调用 `t()` 时因为缺失 key 打出 intlify warning。
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

// 标签标题优先翻译已存在的 key，找不到时退回原始值，控制台不再刷缺词条警告。
const resolveI18nText = (messageKey: string) => {
  for (const localeKey of normalizeLocaleChain()) {
    const message = getMessageByKey(localeKey, messageKey)
    if (message) return message
  }

  return messageKey
}

const resolveTabTitle = (tab: TabItem) => {
  const rawTitle = tab.title || tab.name || 'Unknown'
  return isI18nKeyLike(rawTitle) ? resolveI18nText(rawTitle) : rawTitle
}

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
        scrollContainer.value.scrollTo({
          left: tabLeft + tabWidth - containerWidth + 20,
          behavior: 'smooth'
        })
      }
    }
  })
}

watch(
  () => route.fullPath,
  () => {
    scrollToActiveTab()
  }
)

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
  const index = tabs.findIndex((t) => t.fullPath === fullPath)
  if (index === -1) return

  // 如果关闭的是当前激活的标签页，需要自动跳转到旁边的标签
  if (isActive(fullPath)) {
    // 优先跳转到左侧的标签，如果没有左侧则跳转到右侧，保底跳转到首页。
    const nextTab = tabs[index - 1] || tabs[index + 1]
    if (nextTab) {
      router.push(nextTab.fullPath)
    } else {
      router.push(navigation.homePath)
    }
  }
  tabbarStore.removeTab(fullPath)
}

const closeTab = (fullPath: string) => {
  handleCloseTab(fullPath)
}

const reloadTab = async (tab: TabItem | undefined) => {
  if (!tab) return

  await tabbarStore.evictCache(tab.fullPath)

  if (tab.fullPath === route.fullPath) {
    await router.replace({
      name: 'Redirect',
      query: {
        target: tab.fullPath
      }
    })
    return
  }

  tabbarStore.restoreCache(tab.fullPath)
  await router.push(tab.fullPath)
}

// 右键菜单相关
const showDropdown = ref(false)
const x = ref(0)
const y = ref(0)
const activeContextPath = ref('')

const contextMenuOptions = computed(() => [
  { label: t('tabbar.reload', '重新加载'), key: 'reload' },
  {
    label: t('tabbar.close', '关闭标签'),
    key: 'close',
    disabled: activeContextPath.value === navigation.homePath
  },
  { label: t('tabbar.closeOther', '关闭其他'), key: 'closeOther' },
  { label: t('tabbar.closeLeft', '关闭左侧'), key: 'closeLeft' },
  { label: t('tabbar.closeRight', '关闭右侧'), key: 'closeRight' },
  { label: t('tabbar.closeAll', '全部关闭'), key: 'closeAll' }
])

const handleContextMenu = (e: MouseEvent, tab: TabItem) => {
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

const handleSelect = async (key: string | number) => {
  showDropdown.value = false
  const path = activeContextPath.value
  const targetTab = tabbarStore.tabs.find((tab) => tab.fullPath === path)

  switch (key) {
    case 'reload':
      await reloadTab(targetTab)
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
      if (tabbarStore.tabs.findIndex((t) => t.fullPath === route.fullPath) === -1) {
        router.push(path)
      }
      break
    case 'closeRight':
      tabbarStore.closeRightTabs(path)
      if (tabbarStore.tabs.findIndex((t) => t.fullPath === route.fullPath) === -1) {
        router.push(path)
      }
      break
    case 'closeAll':
      tabbarStore.clearTabs()
      router.push(navigation.homePath)
      break
  }
}
</script>

<style scoped>
.tabbar-shell {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 8px;
  border-bottom: 1px solid rgb(243 244 246);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.tabbar-nav-btn {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: rgb(107 114 128);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.tabbar-nav-btn:hover {
  background: rgb(243 244 246);
}

.tabbar-scroll {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 0 4px;
}

.tabbar-item {
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  border: 1px solid rgb(229 231 235);
  border-radius: 6px;
  background: #fff;
  color: rgb(100 116 139);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.tabbar-item.is-active {
  border-color: rgb(254 215 170);
  background: linear-gradient(90deg, rgb(255 247 237), rgb(255 241 242));
  color: rgb(234 88 12);
  box-shadow: 0 1px 2px rgba(249, 115, 22, 0.12);
}

.tabbar-item.is-inactive:hover {
  background: rgb(248 250 252);
  color: rgb(51 65 85);
}

.tabbar-item-dot {
  width: 6px;
  height: 6px;
  margin-right: 8px;
  border-radius: 999px;
  background: rgb(249 115 22);
}

.tabbar-item-title {
  position: relative;
  z-index: 1;
}

.tabbar-close-btn {
  appearance: none;
  -webkit-appearance: none;
  margin-left: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgb(148 163 184);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.tabbar-close-btn:hover {
  background: rgb(226 232 240);
  color: rgb(51 65 85);
}

.tabbar-close-icon {
  width: 12px;
  height: 12px;
  pointer-events: none;
}

.dark .tabbar-shell {
  border-color: rgba(31, 41, 55, 0.6);
  background: rgba(10, 17, 32, 0.8);
}

.dark .tabbar-nav-btn {
  color: rgb(148 163 184);
}

.dark .tabbar-nav-btn:hover {
  background: rgb(31 41 55);
}

.dark .tabbar-item {
  border-color: rgb(55 65 81);
  background: rgb(5 11 20);
  color: rgb(148 163 184);
}

.dark .tabbar-item.is-active {
  border-color: rgba(249, 115, 22, 0.35);
  background: linear-gradient(90deg, rgba(249, 115, 22, 0.12), rgba(244, 63, 94, 0.12));
  color: rgb(251 146 60);
}

.dark .tabbar-item.is-inactive:hover {
  background: rgb(31 41 55);
  color: rgb(226 232 240);
}

.dark .tabbar-item-dot {
  background: rgb(251 146 60);
}

.dark .tabbar-close-btn {
  color: rgb(100 116 139);
}

.dark .tabbar-close-btn:hover {
  background: rgb(55 65 81);
  color: rgb(226 232 240);
}

/* 隐藏滚动条但保留滚动功能 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
