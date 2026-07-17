<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-amber-100 bg-[linear-gradient(135deg,#fffdf7,#fff7ed)] p-8 shadow-[0_24px_80px_rgba(251,146,60,0.12)] dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-amber-500">Workspace Plugin</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">这是第一个示例插件</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这一组页面主要演示多级菜单和复用视图。你可以切到“日度分析”和“月度分析”，它们会复用同一个组件，并通过
        `cacheKey` 共享缓存实例。
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <article
        v-for="item in metrics"
        :key="item.label"
        class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.label }}</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{{ item.value }}</h2>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ item.tip }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const metrics = [
  { label: 'Plugin Count', value: '3', tip: '当前模板里预装了三组示例插件。' },
  { label: 'Nested Menus', value: '2 层', tip: '工作台菜单里已经演示了多级结构。' },
  { label: 'Shared Cache', value: '1 个', tip: '洞察页复用了同一个 cacheKey。' }
]
</script>
