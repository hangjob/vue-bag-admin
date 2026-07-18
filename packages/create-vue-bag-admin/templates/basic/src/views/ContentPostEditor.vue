<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-violet-100 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-violet-500">No Cache Demo</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">新建文章</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这个页面配置了 `noCache:
        true`。你离开再回来时，它会重新挂载，适合编辑器、详情页或临时流程页。
      </p>
    </section>

    <section
      class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
    >
      <label class="block space-y-2">
        <span class="text-sm font-medium text-slate-700 dark:text-slate-200">标题</span>
        <input
          v-model="title"
          class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="试着输入一点内容，然后切走再回来"
        />
      </label>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
</script>
