<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-emerald-100 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-emerald-500">Content Plugin</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">文章列表</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这组页面主要演示详情路由如何通过 `activeMenu` 回指列表菜单，以及详情/新建页如何通过
        `noCache` 避免缓存脏状态。
      </p>
    </section>

    <section class="space-y-4">
      <article
        v-for="post in posts"
        :key="post.id"
        class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white">{{ post.title }}</h2>
            <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ post.summary }}</p>
          </div>
          <div class="flex gap-2">
            <button
              class="rounded-2xl border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:text-slate-200"
              @click="router.push('/content/posts/create')"
            >
              新建
            </button>
            <button
              class="rounded-2xl bg-slate-950 px-3 py-2 text-sm font-medium text-white dark:bg-emerald-500 dark:text-slate-950"
              @click="router.push(`/content/posts/${post.id}`)"
            >
              查看详情
            </button>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const posts = [
  {
    id: 'bag-001',
    title: '把宿主和插件边界拆开之后，后台框架会轻很多',
    summary: '这篇记录主要用来占位，演示列表页与详情页的切换关系。'
  },
  {
    id: 'bag-002',
    title: '如何给多路由复用视图稳定配置 cacheKey',
    summary: '第二条记录主要用来串起 activeMenu 和 noCache 的使用场景。'
  }
]
</script>
