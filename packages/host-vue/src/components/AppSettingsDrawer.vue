<template>
  <n-drawer v-model:show="settingsDrawerOpen" :width="420" placement="right">
    <n-drawer-content :native-scrollbar="false" body-content-style="padding: 0;">
      <div
        class="relative h-full overflow-hidden bg-[linear-gradient(180deg,#fff7fb_0%,#fffdf8_38%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#171727_0%,#111827_38%,#0b1220_100%)]"
      >
        <div class="relative flex h-full flex-col">
          <button
            type="button"
            class="bag-settings-close-btn"
            @click="appConfigStore.closeSettingsDrawer()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div class="flex-1 overflow-y-auto px-6 py-6 pt-20">
            <div class="space-y-5">
              <section
                class="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/5 dark:shadow-none"
              >
                <div class="mb-4">
                  <div class="text-[15px] font-bold text-slate-900 dark:text-white">主题模式</div>
                  <div class="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    让界面更亮或更酷
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    class="bag-settings-theme-card"
                    :class="theme === 'light' ? activeOptionClass : inactiveOptionClass"
                    @click="handleThemeChange('light')"
                  >
                    <div
                      class="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-white shadow-lg shadow-orange-500/20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 1v2m0 18v2m11-11h-2M3 12H1m18.364 7.364-1.414-1.414M6.05 6.05 4.636 4.636m14.728 0-1.414 1.414M6.05 17.95l-1.414 1.414"
                        />
                      </svg>
                    </div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white">浅色</div>
                  </button>

                  <button
                    type="button"
                    class="bag-settings-theme-card"
                    :class="theme === 'dark' ? activeOptionClass : inactiveOptionClass"
                    @click="handleThemeChange('dark')"
                  >
                    <div
                      class="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        />
                      </svg>
                    </div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white">深色</div>
                  </button>
                </div>
              </section>

              <section
                class="rounded-[28px] border border-white/70 bg-white/75 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/5 dark:shadow-none"
              >
                <div class="mb-3">
                  <div class="text-[15px] font-bold text-slate-900 dark:text-white">布局预设</div>
                  <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    一键切出不同氛围，不用一项项调参数
                  </div>
                </div>
                <div class="grid gap-2.5">
                  <button
                    v-for="preset in appearancePresets"
                    :key="preset.key"
                    type="button"
                    class="bag-settings-preset-card group"
                    :class="
                      presetKey === preset.key
                        ? 'border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,237,213,0.92))] shadow-[0_18px_40px_rgba(249,115,22,0.16)] ring-2 ring-orange-300/70 dark:bg-[linear-gradient(135deg,rgba(249,115,22,0.18),rgba(168,85,247,0.16))] dark:ring-orange-400/30'
                        : 'border-slate-200/80 bg-white/80 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] dark:border-slate-800/80 dark:bg-white/[0.03] dark:hover:border-orange-400/30'
                    "
                    @click="applyAppearancePreset(preset.key)"
                  >
                    <div class="flex items-center justify-between gap-3">
                      <div class="min-w-0 flex-1">
                        <div class="mb-2 flex items-center gap-2">
                          <span
                            class="h-3 w-3 rounded-full shadow-sm"
                            :style="{ backgroundColor: preset.themeColor }"
                          />
                          <div class="text-[15px] font-bold text-slate-900 dark:text-white">
                            {{ preset.name }}
                          </div>
                        </div>
                        <div class="text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {{ preset.description }}
                        </div>
                      </div>
                      <div class="flex items-center gap-2.5">
                        <div class="w-[106px] rounded-[16px] bg-slate-100/90 p-2 dark:bg-black/20">
                          <div class="flex gap-1.5">
                            <div
                              class="rounded-[10px] transition-all"
                              :class="preset.menuCollapsed ? 'w-6' : 'w-8'"
                              :style="{ backgroundColor: `${preset.themeColor}22`, height: '34px' }"
                            />
                            <div class="flex-1 space-y-1.5">
                              <div
                                class="h-2 rounded-md"
                                :style="{
                                  backgroundColor: `${preset.themeColor}55`,
                                  width: preset.showTabBar ? '80%' : '62%'
                                }"
                              />
                              <div class="flex gap-1.5">
                                <div
                                  class="h-8 rounded-[10px] bg-white shadow-sm dark:bg-white/10"
                                  :class="preset.contentWidth === 'compact' ? 'w-10' : 'flex-1'"
                                />
                                <div
                                  v-if="preset.contentWidth === 'fluid'"
                                  class="h-8 flex-1 rounded-[10px] bg-white/70 shadow-sm dark:bg-white/5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          v-if="presetKey === preset.key"
                          class="inline-flex min-w-[48px] items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-[10px] font-bold leading-none text-white shadow-lg dark:bg-white dark:text-slate-900"
                        >
                          当前
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </section>

              <section
                class="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/5 dark:shadow-none"
              >
                <div class="mb-4">
                  <div class="text-[15px] font-bold text-slate-900 dark:text-white">主题色</div>
                  <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    选一种更有情绪的主色，让整个后台更有辨识度
                  </div>
                </div>
                <div class="grid grid-cols-5 gap-3">
                  <button
                    v-for="preset in themePresets"
                    :key="preset.value"
                    :title="preset.name"
                    class="bag-settings-color-btn group"
                    @click="appConfigStore.setThemeColor(preset.value)"
                  >
                    <div
                      class="relative flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg shadow-slate-900/5 ring-2 ring-white transition-transform group-hover:scale-105 dark:ring-slate-900/80"
                      :class="preset.colorClass"
                    >
                      <svg
                        v-if="themeColor === preset.value"
                        class="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {{ preset.name }}
                    </span>
                  </button>
                </div>
              </section>

              <section
                class="rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/5 dark:shadow-none"
              >
                <div class="mb-4">
                  <div class="text-[15px] font-bold text-slate-900 dark:text-white">细节选项</div>
                  <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    把布局细节调成最顺手的状态
                  </div>
                </div>

                <div class="grid gap-3">
                  <div
                    v-for="item in layoutToggles"
                    :key="item.key"
                    class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-4 transition-colors hover:border-orange-200 hover:bg-white dark:border-slate-800/80 dark:bg-white/[0.03] dark:hover:border-orange-400/20"
                  >
                    <div class="pr-4">
                      <div class="text-sm font-semibold text-slate-900 dark:text-white">
                        {{ item.label }}
                      </div>
                      <div class="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        {{ item.description }}
                      </div>
                    </div>
                    <n-switch :value="item.value" @update:value="item.onChange" />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div class="border-t border-white/50 px-6 py-4 backdrop-blur-sm dark:border-slate-800/80">
            <div class="flex items-center gap-3">
              <n-button secondary class="flex-1 !rounded-2xl" @click="handleReset">
                恢复默认
              </n-button>
              <n-button
                type="primary"
                class="flex-1 !rounded-2xl"
                @click="appConfigStore.closeSettingsDrawer()"
              >
                完成
              </n-button>
            </div>
          </div>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { NButton, NDrawer, NDrawerContent, NSwitch } from 'naive-ui'
import {
  appearancePresets,
  themePresets,
  useAppConfigStore,
  type AppearancePresetKey,
  type ThemeMode
} from '../stores/app-config'
import { useMenuStore } from '../stores/menu'
import { useTabBarStore } from '../stores/tabbar'

const appConfigStore = useAppConfigStore()
const menuStore = useMenuStore()
const tabbarStore = useTabBarStore()

const {
  enablePageTransition,
  presetKey,
  settingsDrawerOpen,
  showFooter,
  showTabBar,
  theme,
  themeColor
} = storeToRefs(appConfigStore)

const activeOptionClass =
  'border-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,243,255,0.96))] shadow-[0_12px_28px_rgba(139,92,246,0.12)] ring-2 ring-violet-300/70 dark:bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(59,130,246,0.14))] dark:ring-violet-400/30'

const inactiveOptionClass =
  'border-slate-200/80 bg-slate-50/80 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-white dark:border-slate-800/80 dark:bg-white/[0.03] dark:hover:border-violet-400/20'

const applyAppearancePreset = (presetKey: AppearancePresetKey) => {
  const preset = appearancePresets.find((item) => item.key === presetKey)
  if (!preset) return

  appConfigStore.setPresetKey(preset.key)
  menuStore.setCollapsed(preset.menuCollapsed)
  tabbarStore.enableTabCache = preset.enableTabCache
  tabbarStore.enableTabPersist = preset.enableTabPersist
  appConfigStore.applyAppearance()
}

const handleThemeChange = (value: ThemeMode) => {
  appConfigStore.setTheme(value)
}

const setTabCache = (value: boolean) => {
  appConfigStore.markAsCustom()
  tabbarStore.enableTabCache = value
}

const setTabPersist = (value: boolean) => {
  appConfigStore.markAsCustom()
  tabbarStore.enableTabPersist = value
}

const setMenuCollapsed = (value: boolean) => {
  appConfigStore.markAsCustom()
  menuStore.setCollapsed(value)
}

const layoutToggles = computed(() => [
  {
    key: 'menuCollapsed',
    label: '折叠菜单',
    description: '让内容区更聚焦，适合信息密度高的工作流。',
    value: menuStore.collapsed,
    onChange: setMenuCollapsed
  },
  {
    key: 'showTabBar',
    label: '显示标签栏',
    description: '保留多页签切换，适合多任务并行操作。',
    value: showTabBar.value,
    onChange: appConfigStore.setShowTabBar
  },
  {
    key: 'showFooter',
    label: '显示页脚',
    description: '在底部保留品牌和版权信息，增强完整感。',
    value: showFooter.value,
    onChange: appConfigStore.setShowFooter
  },
  {
    key: 'enablePageTransition',
    label: '页面切换动画',
    description: '轻量过渡让交互更丝滑，也更有活力感。',
    value: enablePageTransition.value,
    onChange: appConfigStore.setEnablePageTransition
  },
  {
    key: 'enableTabCache',
    label: '启用标签缓存',
    description: '减少重复渲染，保持页面状态更连续。',
    value: tabbarStore.enableTabCache,
    onChange: setTabCache
  },
  {
    key: 'enableTabPersist',
    label: '记住标签页',
    description: '刷新或重开后恢复上一次的工作现场。',
    value: tabbarStore.enableTabPersist,
    onChange: setTabPersist
  }
])

const handleReset = () => {
  appConfigStore.resetAppearance()
  menuStore.setCollapsed(false)
  tabbarStore.enableTabCache = true
  tabbarStore.enableTabPersist = true
}
</script>

<style>
.bag-settings-close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
  color: #64748b;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  outline: 1px solid rgba(226, 232, 240, 0.8);
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.bag-settings-close-btn:hover {
  transform: translateY(-2px);
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
}

.dark .bag-settings-close-btn {
  background: rgba(255, 255, 255, 0.06);
  color: #cbd5e1;
  outline-color: rgba(30, 41, 59, 0.9);
}

.dark .bag-settings-close-btn:hover {
  color: #fff;
}

.bag-settings-theme-card,
.bag-settings-preset-card,
.bag-settings-color-btn {
  appearance: none;
  -webkit-appearance: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.bag-settings-theme-card {
  width: 100%;
  padding: 16px;
  text-align: left;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 18px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.bag-settings-preset-card {
  width: 100%;
  padding: 14px;
  text-align: left;
  border: 1px solid rgba(226, 232, 240, 0.82);
  border-radius: 22px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.bag-settings-color-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 0;
  background: transparent;
  border-radius: 16px;
  transition: transform 0.2s ease;
}

.bag-settings-color-btn:hover {
  transform: translateY(-2px);
}

.dark .bag-settings-theme-card,
.dark .bag-settings-preset-card {
  border-color: rgba(30, 41, 59, 0.86);
}
</style>
