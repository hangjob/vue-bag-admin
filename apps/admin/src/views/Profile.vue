<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- 页面标题 -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">个人中心</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
          管理您的个人信息和账户安全设置
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：用户信息卡片 -->
      <div class="lg:col-span-1 space-y-6">
        <NCard
          class="rounded-2xl shadow-sm border-0 bg-white/80 dark:bg-[#0A1120]/80 backdrop-blur-xl"
        >
          <div class="flex flex-col items-center py-6">
            <div class="relative group cursor-pointer">
              <NAvatar
                round
                :size="100"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffedd5"
                class="ring-4 ring-orange-50 dark:ring-gray-800 transition-all duration-300 group-hover:ring-orange-200 dark:group-hover:ring-orange-500/50"
              />
              <div
                class="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>

            <h3 class="mt-4 text-xl font-bold text-slate-800 dark:text-slate-200">
              {{ userStore.username || 'Admin' }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">前端开发工程师</p>

            <div class="flex flex-wrap justify-center gap-2 mt-4">
              <NTag
                v-for="role in userStore.roles"
                :key="role"
                type="warning"
                round
                size="small"
                class="px-3"
              >
                {{ role }}
              </NTag>
            </div>
          </div>

          <NDivider class="!my-0" />

          <div class="py-6 space-y-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                邮箱
              </span>
              <span class="text-slate-800 dark:text-slate-200 font-medium">
                admin@vuebagadmin.com
              </span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                手机
              </span>
              <span class="text-slate-800 dark:text-slate-200 font-medium">+86 138 0000 0000</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                地区
              </span>
              <span class="text-slate-800 dark:text-slate-200 font-medium">中国 · 上海</span>
            </div>
          </div>
        </NCard>
      </div>

      <!-- 右侧：设置内容区 -->
      <div class="lg:col-span-2">
        <NCard
          class="rounded-2xl shadow-sm border-0 bg-white/80 dark:bg-[#0A1120]/80 backdrop-blur-xl h-full"
        >
          <NTabs
            type="line"
            size="large"
            :tabs-padding="20"
            pane-style="padding: 24px 0 0 0;"
            class="ecommerce-tabs"
          >
            <!-- 基本信息 -->
            <NTabPane name="basic" tab="基本信息">
              <div class="max-w-md space-y-6">
                <PmProForm
                  v-model="formValue"
                  :schemas="profileFormSchemas"
                  submit-text="保存更改"
                  reset-text="恢复默认"
                  @submit="handleSaveProfile"
                />
              </div>
            </NTabPane>

            <!-- 安全设置 -->
            <NTabPane name="security" tab="安全设置">
              <div class="space-y-6">
                <!-- 密码修改 -->
                <div
                  class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div>
                    <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
                      账户密码
                    </h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      定期修改密码有助于保护您的账户安全
                    </p>
                  </div>
                  <NButton
                    secondary
                    type="primary"
                    size="small"
                    class="!text-orange-500 hover:!bg-orange-50"
                  >
                    修改
                  </NButton>
                </div>

                <!-- 手机绑定 -->
                <div
                  class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div>
                    <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
                      绑定手机
                    </h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      已绑定：+86 138****0000
                    </p>
                  </div>
                  <NButton secondary size="small">更改</NButton>
                </div>

                <!-- 邮箱绑定 -->
                <div
                  class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-200">绑定邮箱</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      已绑定：admin@vuebagadmin.com
                    </p>
                  </div>
                  <NButton secondary size="small">更改</NButton>
                </div>

                <!-- 多因素认证 -->
                <div
                  class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div>
                    <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
                      两步验证 (2FA)
                    </h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      未开启，建议开启以提高账户安全性
                    </p>
                  </div>
                  <NButton
                    secondary
                    type="primary"
                    size="small"
                    class="!text-orange-500 hover:!bg-orange-50"
                  >
                    去开启
                  </NButton>
                </div>
              </div>
            </NTabPane>

            <!-- 操作日志 -->
            <NTabPane name="logs" tab="操作日志">
              <div class="space-y-6">
                <div
                  class="overflow-hidden rounded-[28px] border border-orange-100/80 bg-gradient-to-br from-orange-50 via-white to-rose-50 px-6 py-6 shadow-[0_20px_60px_rgba(249,115,22,0.08)] dark:border-slate-800/80 dark:bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.18),_transparent_32%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(10,17,32,0.96))] dark:shadow-none"
                >
                  <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div
                        class="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-orange-500 ring-1 ring-orange-100 dark:bg-white/5 dark:text-orange-300 dark:ring-slate-800/80"
                      >
                        <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                        活跃记录
                      </div>
                      <h3
                        class="mt-4 text-2xl font-black tracking-tight text-slate-900 dark:text-white"
                      >
                        最近操作一目了然
                      </h3>
                      <p class="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        聚合登录、安全设置和业务操作，帮你快速回看最近的账户活动轨迹。
                      </p>
                    </div>

                    <div class="grid grid-cols-2 gap-3 sm:min-w-[280px]">
                      <div
                        class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-orange-100 dark:bg-white/[0.04] dark:ring-slate-800/80"
                      >
                        <p
                          class="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
                        >
                          最近 48h
                        </p>
                        <p class="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                          {{ logs.length }}
                        </p>
                        <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">条关键操作</p>
                      </div>
                      <div
                        class="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-orange-100 dark:bg-white/[0.04] dark:ring-slate-800/80"
                      >
                        <p
                          class="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500"
                        >
                          最近活动
                        </p>
                        <p class="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                          {{ logs[0]?.time }}
                        </p>
                        <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          已同步到审计中心
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-5">
                  <section
                    v-for="group in logGroups"
                    :key="group.title"
                    class="rounded-[26px] border border-slate-200/70 bg-white/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-white/[0.03] dark:shadow-none"
                  >
                    <div class="mb-4 flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div
                          class="h-10 w-10 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center dark:bg-slate-900/80 dark:text-slate-300"
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
                              stroke-width="1.8"
                              d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 class="text-base font-bold text-slate-900 dark:text-white">
                            {{ group.title }}
                          </h4>
                          <p class="text-xs text-slate-500 dark:text-slate-400">
                            {{ group.items.length }} 条动态
                          </p>
                        </div>
                      </div>

                      <span
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-900/80 dark:text-slate-300"
                      >
                        已同步
                      </span>
                    </div>

                    <div class="space-y-3">
                      <article
                        v-for="log in group.items"
                        :key="`${group.title}-${log.action}-${log.time}`"
                        class="group rounded-[24px] border border-slate-200/70 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(249,115,22,0.08)] dark:border-slate-800/80 dark:bg-[#0f172a]/60 dark:hover:border-orange-400/20 dark:hover:bg-[#111c31]"
                      >
                        <div
                          class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
                        >
                          <div class="flex items-start gap-4">
                            <div
                              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] text-white shadow-lg shadow-orange-500/10"
                              :class="log.iconBgClass"
                            >
                              <svg
                                v-if="log.icon === 'shield'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.8"
                                  d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
                                />
                              </svg>
                              <svg
                                v-else-if="log.icon === 'login'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.8"
                                  d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
                                />
                              </svg>
                              <svg
                                v-else-if="log.icon === 'download'"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.8"
                                  d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                                />
                              </svg>
                              <svg
                                v-else
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.8"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l.639 1.966a1 1 0 00.95.69h2.067c.969 0 1.371 1.24.588 1.81l-1.673 1.215a1 1 0 00-.364 1.118l.639 1.966c.3.921-.755 1.688-1.54 1.118l-1.673-1.215a1 1 0 00-1.176 0l-1.673 1.215c-.784.57-1.838-.197-1.539-1.118l.638-1.966a1 1 0 00-.363-1.118L2.805 7.393c-.783-.57-.38-1.81.588-1.81H5.46a1 1 0 00.951-.69l.638-1.966z"
                                />
                              </svg>
                            </div>

                            <div class="min-w-0">
                              <div class="flex flex-wrap items-center gap-2">
                                <h5 class="text-base font-bold text-slate-900 dark:text-white">
                                  {{ log.action }}
                                </h5>
                                <PmDictTag code="audit-log-type" :value="log.type" />
                              </div>
                              <p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                {{ log.detail }}
                              </p>

                              <div class="mt-3 flex flex-wrap gap-2">
                                <span
                                  class="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:text-slate-300 dark:ring-slate-800/80"
                                >
                                  {{ log.ip }}
                                </span>
                                <span
                                  class="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200/70 dark:bg-white/[0.04] dark:text-slate-300 dark:ring-slate-800/80"
                                >
                                  {{ log.device }}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="shrink-0 text-left md:text-right">
                            <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                              {{ log.time }}
                            </p>
                            <p class="mt-1 text-xs text-slate-400 dark:text-slate-500">
                              已记录到审计轨迹
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </section>
                </div>
              </div>
            </NTabPane>
          </NTabs>
        </NCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { NCard, NAvatar, NTabs, NTabPane, NButton, NDivider, NTag, useMessage } from 'naive-ui'
import type { ProFormSchema, ProFormSubmitContext } from '@bag/core'
import { useUserStore } from '@bag/host-vue'
import { PmDictTag, PmProForm } from '@bag/ui'

const userStore = useUserStore()
const message = useMessage()

// 表单数据
const formValue = ref({
  username: userStore.username,
  nickname: 'Admin User',
  email: 'admin@vuebagadmin.com',
  bio: '保持热爱，奔赴山海。',
  workMode: 'focus'
})

const profileFormSchemas: ProFormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'input',
    required: true,
    description: '用户名会作为系统内的默认展示名之一。'
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'input'
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'input',
    required: true
  },
  {
    field: 'bio',
    label: '个人简介',
    component: 'textarea',
    placeholder: '一句话介绍自己...'
  },
  {
    field: 'workMode',
    label: '工作模式',
    component: 'select',
    dictCode: 'workspace-mode',
    description: '用于个性化推荐你常用的工作台节奏。'
  }
]

type LogItem = {
  group: string
  action: string
  detail: string
  time: string
  ip: string
  device: string
  type: 'security' | 'login' | 'export' | 'system'
  icon: 'shield' | 'login' | 'download' | 'spark'
  iconBgClass: string
}

// 模拟日志数据
const logs = [
  {
    group: '今天',
    action: '修改了账户密码',
    detail: '安全设置已更新，账户密码策略同步生效。',
    time: '今天 14:23',
    ip: '192.168.1.10',
    device: 'Mac OS / Chrome',
    type: 'security',
    icon: 'shield',
    iconBgClass: 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500'
  },
  {
    group: '今天',
    action: '登录系统',
    detail: '从常用设备发起登录，请求来源已通过风控校验。',
    time: '今天 09:00',
    ip: '192.168.1.10',
    device: 'Mac OS / Chrome',
    type: 'login',
    icon: 'login',
    iconBgClass: 'bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500'
  },
  {
    group: '昨天',
    action: '导出了上月销售报表',
    detail: '导出任务已完成，文件已发送到下载中心。',
    time: '昨天 16:45',
    ip: '192.168.1.10',
    device: 'Mac OS / Chrome',
    type: 'export',
    icon: 'download',
    iconBgClass: 'bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500'
  },
  {
    group: '昨天',
    action: '修改了系统基础配置',
    detail: '品牌信息与默认参数已重新保存，影响即时生效。',
    time: '昨天 11:20',
    ip: '192.168.1.10',
    device: 'Mac OS / Chrome',
    type: 'system',
    icon: 'spark',
    iconBgClass: 'bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-500'
  },
  {
    group: '昨天',
    action: '登录系统',
    detail: '账户从已信任环境登录，访问状态正常。',
    time: '昨天 08:55',
    ip: '192.168.1.10',
    device: 'Mac OS / Chrome',
    type: 'login',
    icon: 'login',
    iconBgClass: 'bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500'
  }
] satisfies LogItem[]

const logGroups = computed(() => {
  const groups = new Map<string, LogItem[]>()
  logs.forEach((log) => {
    const items = groups.get(log.group) ?? []
    items.push(log)
    groups.set(log.group, items)
  })

  return Array.from(groups.entries()).map(([title, items]) => ({
    title,
    items
  }))
})

// 保存个人信息
const handleSaveProfile = ({ values }: ProFormSubmitContext) => {
  formValue.value = {
    ...formValue.value,
    ...values
  }
  message.success('个人信息保存成功')
}
</script>

<style scoped>
/* 自定义 Tabs 样式，匹配电商主题 */
:deep(.ecommerce-tabs .n-tabs-tab--active) {
  color: #ea580c !important; /* orange-600 */
  font-weight: 600;
}
:deep(.dark .ecommerce-tabs .n-tabs-tab--active) {
  color: #fb923c !important; /* orange-400 */
}
:deep(.ecommerce-tabs .n-tabs-bar) {
  background-color: #f97316 !important; /* orange-500 */
}
:deep(.ecommerce-tabs .n-tabs-tab:hover) {
  color: #f97316 !important;
}
</style>
