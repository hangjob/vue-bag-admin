<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-slate-500">Feature Flags</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">功能开关示例</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这页只是一个轻量占位，但它能说明系统插件除了业务页面之外，也可以承载偏基础设施的能力，比如灰度开关、A/B
        配置和租户级实验项。
      </p>
    </section>

    <section class="space-y-3">
      <label
        v-for="flag in flags"
        :key="flag.key"
        class="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950"
      >
        <div>
          <p class="font-medium text-slate-900 dark:text-white">{{ flag.label }}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ flag.description }}</p>
        </div>
        <input v-model="flag.enabled" type="checkbox" class="h-5 w-5" />
      </label>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const flags = reactive([
  {
    key: 'new-dashboard',
    label: '新工作台首页',
    description: '用于演示系统插件如何挂载基础设施页。',
    enabled: true
  },
  {
    key: 'content-review',
    label: '内容审核工作流',
    description: '真实项目里可以接租户、环境或用户组维度。',
    enabled: false
  }
])
</script>
