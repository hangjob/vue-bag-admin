<template>
  <div class="mx-auto min-h-[calc(100vh-120px)] max-w-7xl space-y-6">
    <section
      class="relative overflow-hidden rounded-[32px] border border-orange-100/80 bg-[linear-gradient(135deg,#fff8f1_0%,#fff4fb_38%,#ffffff_100%)] p-6 shadow-[0_24px_80px_rgba(249,115,22,0.10)] dark:border-slate-800/80 dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_28%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(10,17,32,0.96))] dark:shadow-none"
    >
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute -left-16 top-10 h-36 w-36 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-400/10"
        />
        <div
          class="absolute right-0 top-0 h-48 w-48 rounded-full bg-fuchsia-200/30 blur-3xl dark:bg-fuchsia-500/10"
        />
      </div>

      <div
        class="relative rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/[0.05] dark:shadow-none"
      >
        <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-3xl">
            <div
              class="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-orange-500 ring-1 ring-orange-100 dark:bg-white/5 dark:text-orange-300 dark:ring-slate-800/80"
            >
              <span class="h-2 w-2 rounded-full bg-emerald-400" />
              Plugin Runtime Console
            </div>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              运行总控
            </h2>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              这里专门负责插件状态同步与应用重载。启停结果会先写入本地存储，等你确认完本轮调整后，再统一刷新应用让路由、菜单和语言包真正生效。
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="hint in runtimeHints"
                :key="hint"
                class="rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70 backdrop-blur-sm dark:bg-white/[0.04] dark:text-slate-300 dark:ring-slate-800/80"
              >
                {{ hint }}
              </span>
            </div>
          </div>

          <div class="w-full max-w-[320px] rounded-[24px] bg-slate-50/90 p-4 dark:bg-slate-900/70">
            <div class="flex items-center justify-between gap-4">
              <div>
                <div class="text-sm font-bold text-slate-900 dark:text-white">当前状态</div>
                <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  已识别 {{ pluginList.length }} 个插件
                </div>
              </div>
              <div
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="
                  pendingReload
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
                    : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                "
              >
                {{ pendingReload ? '待刷新' : '已同步' }}
              </div>
            </div>

            <div class="mt-4 grid gap-3">
              <button
                type="button"
                class="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-500 dark:border-slate-700/80 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:border-orange-400/30 dark:hover:text-orange-300"
                @click="refreshRuntime"
              >
                刷新运行时状态
              </button>
              <button
                type="button"
                class="rounded-2xl bg-[linear-gradient(135deg,#f97316,#ec4899)] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,115,22,0.25)] transition-transform hover:-translate-y-0.5"
                @click="reloadApp"
              >
                重新引导应用
              </button>
            </div>

            <div class="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {{
                pendingReload
                  ? '已有变更待生效，建议现在刷新应用完成本轮切换。'
                  : '当前运行视图与本地配置一致，可以继续调整。'
              }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="pendingReload"
      class="flex flex-col gap-4 rounded-[28px] border border-amber-200/80 bg-amber-50/90 p-5 shadow-[0_18px_45px_rgba(245,158,11,0.10)] dark:border-amber-400/20 dark:bg-amber-500/10 dark:shadow-none lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="space-y-1">
        <div class="text-sm font-bold text-amber-700 dark:text-amber-300">检测到插件状态已更新</div>
        <p class="text-sm leading-6 text-amber-700/90 dark:text-amber-100/80">
          当前页面已经保存启停选择，但新的路由、菜单和依赖关系要在应用重新引导后才会真正生效。
        </p>
      </div>
      <button
        type="button"
        class="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
        @click="reloadApp"
      >
        立即刷新生效
      </button>
    </section>

    <section
      class="rounded-[28px] border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/[0.04] dark:shadow-none"
    >
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div class="text-lg font-bold text-slate-900 dark:text-white">插件视图</div>
          <p class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
            按运行状态快速筛选插件，专注处理启停决策和依赖关系。
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="item in filterTabs"
            :key="item.key"
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition-all"
            :class="
              activeFilter === item.key
                ? 'bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800'
            "
            @click="activeFilter = item.key"
          >
            {{ item.label }} · {{ item.count }}
          </button>
        </div>
      </div>

      <div class="mt-5 grid gap-4 xl:grid-cols-2">
        <article
          v-for="plugin in visiblePlugins"
          :key="plugin.id"
          class="group relative overflow-hidden rounded-[28px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:hover:shadow-none"
          :class="getPluginSurfaceClass(plugin)"
        >
          <div
            class="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-80 blur-3xl"
            :class="getPluginGlowClass(plugin)"
          />

          <div class="relative flex h-full flex-col gap-5">
            <div class="flex items-start justify-between gap-4">
              <div class="flex min-w-0 items-start gap-4">
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] text-white shadow-lg"
                  :class="getPluginIconClass(plugin)"
                >
                  <svg
                    v-if="plugin.enabled"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <svg
                    v-else-if="!plugin.enabledByConfig"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M12 15v2m0-8v2m7 1a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                      d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
                    />
                  </svg>
                </div>

                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                      {{ plugin.name }}
                    </h3>
                    <span
                      class="rounded-full px-2.5 py-1 text-xs font-semibold"
                      :class="getPluginStatusClass(plugin)"
                    >
                      {{ getPluginStatusLabel(plugin) }}
                    </span>
                  </div>
                  <p
                    class="mt-2 truncate text-xs font-medium tracking-[0.16em] text-slate-400 dark:text-slate-500"
                  >
                    {{ plugin.id }}
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {{ getPluginTagline(plugin) }}
                  </p>
                </div>
              </div>

              <div
                class="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:text-slate-300 dark:ring-slate-800/80"
              >
                v{{ plugin.version }}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-3">
              <div
                class="rounded-[20px] bg-white/80 px-4 py-3 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:ring-slate-800/80"
              >
                <div
                  class="text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
                >
                  顺序
                </div>
                <div class="mt-2 text-lg font-black text-slate-900 dark:text-white">
                  {{ plugin.order }}
                </div>
              </div>
              <div
                class="rounded-[20px] bg-white/80 px-4 py-3 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:ring-slate-800/80"
              >
                <div
                  class="text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
                >
                  路由
                </div>
                <div class="mt-2 text-lg font-black text-slate-900 dark:text-white">
                  {{ plugin.routeCount }}
                </div>
              </div>
              <div
                class="rounded-[20px] bg-white/80 px-4 py-3 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:ring-slate-800/80"
              >
                <div
                  class="text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
                >
                  菜单
                </div>
                <div class="mt-2 text-lg font-black text-slate-900 dark:text-white">
                  {{ plugin.menuCount }}
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <div
                class="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500"
              >
                依赖关系
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-if="plugin.dependsOn.length === 0"
                  class="rounded-full border border-dashed border-slate-200 px-3 py-1 text-xs text-slate-400 dark:border-slate-700"
                >
                  无依赖
                </span>
                <span
                  v-for="dependency in plugin.dependsOn"
                  :key="dependency"
                  class="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:text-slate-300 dark:ring-slate-800/80"
                >
                  {{ dependency }}
                </span>
              </div>
            </div>

            <div
              class="rounded-[22px] bg-slate-50/90 p-4 text-sm leading-6 text-slate-500 dark:bg-slate-900/70 dark:text-slate-400"
            >
              <p>{{ getPluginHelperText(plugin) }}</p>
              <p
                v-if="getMissingDependencies(plugin).length > 0"
                class="mt-2 text-amber-700 dark:text-amber-300"
              >
                缺失依赖：{{
                  getMissingDependencies(plugin).join('、')
                }}。请先启用依赖插件，再刷新应用。
              </p>
              <p
                v-if="getActiveDependents(plugin).length > 0"
                class="mt-2 text-rose-600 dark:text-rose-300"
              >
                当前有插件依赖它：{{ getActiveDependents(plugin).join('、') }}。
              </p>
            </div>

            <div class="mt-auto flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                class="flex-1 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                :class="
                  plugin.enabled
                    ? 'bg-rose-500 hover:bg-rose-600'
                    : 'bg-emerald-500 hover:bg-emerald-600'
                "
                :disabled="!canTogglePlugin(plugin)"
                @click="togglePlugin(plugin)"
              >
                {{ plugin.enabled ? '禁用插件' : '启用插件' }}
              </button>
              <button
                type="button"
                class="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-slate-700/80 dark:bg-slate-950/30 dark:text-slate-300 dark:hover:border-violet-400/40 dark:hover:text-violet-300"
                @click="copyPluginId(plugin.id)"
              >
                复制插件 ID
              </button>
            </div>
          </div>
        </article>
      </div>

      <div
        v-if="visiblePlugins.length === 0"
        class="mt-5 rounded-[24px] border border-dashed border-slate-200 bg-slate-50/80 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-400"
      >
        当前筛选条件下没有匹配的插件。
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { listRuntimePlugins, setPluginEnabledState, type PluginRuntimeItem } from '@bag/core'

const router = useRouter()
const refreshSeed = ref(0)
const pendingReload = ref(false)
const activeFilter = ref<'all' | 'enabled' | 'attention' | 'disabled'>('all')

const pluginList = computed(() => {
  refreshSeed.value
  return listRuntimePlugins()
})

const enabledPluginIds = computed(
  () => new Set(pluginList.value.filter((plugin) => plugin.enabled).map((plugin) => plugin.id))
)

const runtimeHints = ['启停状态先写入本地存储', '依赖冲突会被阻止', '刷新后才会重新注册路由和菜单']

const attentionPlugins = computed(() =>
  pluginList.value.filter((plugin) => isAttentionPlugin(plugin))
)

const filterTabs = computed(() => [
  {
    key: 'all' as const,
    label: '全部插件',
    count: pluginList.value.length
  },
  {
    key: 'enabled' as const,
    label: '启用中',
    count: pluginList.value.filter((plugin) => plugin.enabled).length
  },
  {
    key: 'attention' as const,
    label: '需要关注',
    count: attentionPlugins.value.length
  },
  {
    key: 'disabled' as const,
    label: '已禁用',
    count: pluginList.value.filter((plugin) => !plugin.enabled).length
  }
])

const visiblePlugins = computed(() => {
  switch (activeFilter.value) {
    case 'enabled':
      return pluginList.value.filter((plugin) => plugin.enabled)
    case 'attention':
      return pluginList.value.filter((plugin) => isAttentionPlugin(plugin))
    case 'disabled':
      return pluginList.value.filter((plugin) => !plugin.enabled)
    default:
      return pluginList.value
  }
})

const refreshRuntime = () => {
  refreshSeed.value += 1
}

const reloadApp = () => {
  window.location.reload()
}

const getMissingDependencies = (plugin: PluginRuntimeItem) =>
  plugin.dependsOn.filter((dependency) => !enabledPluginIds.value.has(dependency))

const getActiveDependents = (plugin: PluginRuntimeItem) =>
  pluginList.value
    .filter((item) => item.enabled && item.dependsOn.includes(plugin.id))
    .map((item) => item.name)

const isAttentionPlugin = (plugin: PluginRuntimeItem) =>
  !plugin.enabledByConfig ||
  getMissingDependencies(plugin).length > 0 ||
  getActiveDependents(plugin).length > 0

const canTogglePlugin = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig) return false
  if (!plugin.enabled && getMissingDependencies(plugin).length > 0) return false
  if (plugin.enabled && getActiveDependents(plugin).length > 0) return false
  return true
}

const getPluginStatusLabel = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig) return '代码锁定'
  if (getMissingDependencies(plugin).length > 0) return '缺少依赖'
  if (plugin.enabled && getActiveDependents(plugin).length > 0) return '被依赖中'
  return plugin.enabled ? '启用中' : '已禁用'
}

const getPluginStatusClass = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig) {
    return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
  }
  if (getMissingDependencies(plugin).length > 0) {
    return 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
  }
  if (plugin.enabled && getActiveDependents(plugin).length > 0) {
    return 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300'
  }
  return plugin.enabled
    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
}

const getPluginSurfaceClass = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig) {
    return 'border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.92))] dark:border-slate-800/80 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.88))]'
  }
  if (getMissingDependencies(plugin).length > 0) {
    return 'border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.94),rgba(255,255,255,0.92))] dark:border-amber-400/20 dark:bg-[linear-gradient(180deg,rgba(120,53,15,0.18),rgba(15,23,42,0.92))]'
  }
  if (plugin.enabled) {
    return 'border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,253,245,0.90),rgba(255,255,255,0.92))] dark:border-emerald-400/20 dark:bg-[linear-gradient(180deg,rgba(6,78,59,0.16),rgba(15,23,42,0.92))]'
  }
  return 'border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.92))] dark:border-slate-800/80 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.88))]'
}

const getPluginGlowClass = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig) return 'bg-slate-200/30 dark:bg-slate-500/10'
  if (getMissingDependencies(plugin).length > 0) return 'bg-amber-200/50 dark:bg-amber-500/10'
  if (plugin.enabled) return 'bg-emerald-200/40 dark:bg-emerald-500/10'
  return 'bg-slate-200/30 dark:bg-slate-500/10'
}

const getPluginIconClass = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig)
    return 'bg-[linear-gradient(135deg,#475569,#0f172a)] shadow-slate-900/15'
  if (getMissingDependencies(plugin).length > 0)
    return 'bg-[linear-gradient(135deg,#f59e0b,#f97316)] shadow-orange-500/20'
  if (plugin.enabled) return 'bg-[linear-gradient(135deg,#10b981,#14b8a6)] shadow-emerald-500/20'
  return 'bg-[linear-gradient(135deg,#64748b,#334155)] shadow-slate-900/15'
}

const getPluginTagline = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig)
    return '代码层面已锁定为默认关闭，当前页面只负责展示它的运行位置信息。'
  if (getMissingDependencies(plugin).length > 0)
    return '依赖链还没准备好，先补齐前置插件，再决定是否把它带回运行集合。'
  if (plugin.enabled && getActiveDependents(plugin).length > 0)
    return '它是其他插件正在使用的基础能力，禁用前需要先处理依赖方。'
  return plugin.enabled
    ? '插件已经进入当前运行集合，刷新后会继续承担对应的页面和菜单能力。'
    : '插件当前处于停用状态，适合在确认影响范围后再决定是否重新启用。'
}

const getPluginHelperText = (plugin: PluginRuntimeItem) => {
  if (!plugin.enabledByConfig) {
    return '这个插件在代码层被标记为默认关闭，运行时只读展示，不能直接通过管理中心启用。'
  }

  if (!plugin.enabled && getMissingDependencies(plugin).length > 0) {
    return '当前插件依赖的前置能力还未启用，先处理依赖关系再刷新应用会更安全。'
  }

  if (plugin.enabled && getActiveDependents(plugin).length > 0) {
    return '它正被其他启用中的插件依赖。为了避免刷新后引导失败，当前不允许直接禁用。'
  }

  return plugin.enabled
    ? '插件目前已经处于启用集合中。若你禁用它，刷新后相关路由、菜单与语言包会一起移除。'
    : '插件目前已从启用集合中排除。启用后刷新应用，相关页面入口与能力会重新接入。'
}

const copyPluginId = async (pluginId: string) => {
  try {
    await navigator.clipboard.writeText(pluginId)
  } catch {
    window.prompt('复制插件 ID', pluginId)
  }
}

const togglePlugin = async (plugin: PluginRuntimeItem) => {
  if (!canTogglePlugin(plugin)) return

  const nextEnabled = !plugin.enabled
  const confirmed = window.confirm(
    nextEnabled
      ? `确认启用插件“${plugin.name}”吗？刷新后会重新注册它的路由和菜单。`
      : `确认禁用插件“${plugin.name}”吗？刷新后它的路由和菜单会被移除。`
  )

  if (!confirmed) return

  setPluginEnabledState(plugin.id, nextEnabled)
  pendingReload.value = true
  refreshRuntime()

  if (!nextEnabled && plugin.id === 'plugin-sys-setting') {
    await router.replace('/dashboard')
  }
}
</script>
