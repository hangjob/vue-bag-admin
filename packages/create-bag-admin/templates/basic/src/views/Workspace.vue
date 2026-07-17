<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f5f3ff)] p-8 shadow-[0_24px_80px_rgba(139,92,246,0.14)] dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-violet-500">Demo Plugin</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">这里是插件自己的页面</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这页不是宿主基础路由，而是通过 `AdminPlugin`
        动态注册进来的。等你开始接业务时，可以按这个方式把商城、内容、CRM 或运营后台拆成独立插件。
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <article
        v-for="item in milestones"
        :key="item.title"
        class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
      >
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">{{ item.title }}</h2>
        <p class="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {{ item.description }}
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const milestones = [
  {
    title: '第一步',
    description: '把 demo 插件改成你的业务插件，先从 routes 和 menus 开始。'
  },
  {
    title: '第二步',
    description: '如果默认宿主认证不够用，再把 user store 和 HTTP 策略换成你的实现。'
  },
  {
    title: '第三步',
    description: '继续抽公共表单、表格和字典，逐步沉淀到 @bag/ui 与 @bag/core。'
  },
  {
    title: '第四步',
    description: '等 API 稳定后，再把插件单独发成 npm 包。'
  }
]
</script>
