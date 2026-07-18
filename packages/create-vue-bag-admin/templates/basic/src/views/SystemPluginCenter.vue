<template>
  <div class="space-y-6">
    <section
      class="rounded-[28px] border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <p class="text-sm font-medium text-slate-500">Dependency Demo</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">插件中心</h1>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
        这个插件声明依赖
        `workspace-plugin`。如果你把工作台插件禁掉，再去启系统插件，宿主就会命中依赖校验逻辑。
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <article
        v-for="item in plugins"
        :key="item.name"
        class="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.type }}</p>
        <h2 class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{{ item.name }}</h2>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ item.desc }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const plugins = [
  { type: 'Host', name: 'workspace-plugin', desc: '提供菜单骨架与共享视图缓存示例。' },
  { type: 'Business', name: 'content-plugin', desc: '提供列表、详情和创建流程示例。' },
  { type: 'System', name: 'system-plugin', desc: '演示插件依赖与系统配置入口。' }
]
</script>
