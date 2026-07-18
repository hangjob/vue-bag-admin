<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-sky-100 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-sky-500">Shared View Demo</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{{ heading }}</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        当前路由是 `{{
          route.fullPath
        }}`。这个页面会同时服务“日度分析”和“月度分析”两个路由，但它们使用同一个
        `cacheKey`，适合演示多路由复用同一组件时的缓存策略。
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <article
        v-for="card in cards"
        :key="card.title"
        class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.title }}</p>
        <h2 class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{{ card.value }}</h2>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ card.tip }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const heading = computed(() =>
  route.name === 'WorkspaceInsightsMonthly' ? '月度分析' : '日度分析'
)

const cards = computed(() => {
  const monthly = route.name === 'WorkspaceInsightsMonthly'
  return [
    {
      title: monthly ? 'Monthly GMV' : 'Daily GMV',
      value: monthly ? '¥ 1,280,000' : '¥ 42,600',
      tip: '仅用于说明路由切换，不接真实后端。'
    },
    {
      title: monthly ? 'New Accounts' : 'New Leads',
      value: monthly ? '1,248' : '86',
      tip: '两条路由共享同一个组件实例缓存。'
    }
  ]
})
</script>
