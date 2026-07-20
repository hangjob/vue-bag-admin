<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-orange-100 bg-white/95 p-8 shadow-[0_20px_60px_rgba(251,146,60,0.12)] dark:border-slate-800 dark:bg-slate-950/90"
    >
      <p class="text-sm font-medium text-orange-500">Starter Dashboard</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">宿主已经跑起来了</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这个页面来自基础路由，左侧菜单里的“插件工作台”则来自本地 demo
        插件。现在你已经拥有一套能注册插件、能做权限控制、能持久化标签栏的后台壳层。
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <button
          class="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white dark:bg-orange-500 dark:text-slate-950"
          @click="router.push('/workspace')"
        >
          打开插件页面
        </button>
        <button
          class="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
          @click="router.push('/login')"
        >
          返回登录页
        </button>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <article
        v-for="card in cards"
        :key="card.title"
        class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.eyebrow }}</p>
        <h2 class="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{{ card.title }}</h2>
        <p class="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {{ card.description }}
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const cards = [
  {
    eyebrow: 'Host',
    title: 'vue-bag-admin',
    description: '默认布局、权限守卫、菜单与标签管理都已经接入。'
  },
  {
    eyebrow: 'Plugin',
    title: 'Local Demo Plugin',
    description: '通过同一套 AdminPlugin 协议注册路由、菜单和语言包。'
  },
  {
    eyebrow: 'Next',
    title: 'Replace With Your Domain',
    description: '你可以从这里开始替换认证、布局皮肤和业务插件。'
  }
]
</script>
