<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-rose-100 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-rose-500">Active Menu Demo</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
        文章详情：{{ route.params.id }}
      </h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        虽然当前路由不在菜单里展示，但它通过 `activeMenu: '/content/posts'`
        让侧边栏仍然高亮列表入口。这个模式适合详情、编辑、审核页。
      </p>
    </section>

    <section
      class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
        你正在查看一条占位内容。后面把它替换成真实详情页时，只要继续保留 `activeMenu` 和 `noCache`
        协议，交互体验就会稳定很多。
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
