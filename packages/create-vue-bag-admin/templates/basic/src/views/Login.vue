<template>
  <div
    class="min-h-screen bg-[radial-gradient(circle_at_top,#fde68a_0%,#fff7ed_45%,#ffffff_100%)] dark:bg-[#020617] flex items-center justify-center p-6"
  >
    <div
      class="w-full max-w-md rounded-[28px] border border-orange-100 bg-white/90 p-8 shadow-[0_30px_80px_rgba(251,146,60,0.18)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/90"
    >
      <div class="mb-8">
        <p class="text-sm font-medium text-orange-500">Bag Admin</p>
        <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">登录示例宿主</h1>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          默认演示账号已经内置，直接用 `admin / 123456` 即可进入。
        </p>
      </div>

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <label class="block space-y-2">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-200">用户名</span>
          <input
            v-model="username"
            class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            placeholder="admin"
          />
        </label>

        <label class="block space-y-2">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-200">密码</span>
          <input
            v-model="password"
            type="password"
            class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            placeholder="123456"
          />
        </label>

        <button
          type="submit"
          :disabled="submitting"
          class="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-orange-500 dark:text-slate-950 dark:hover:bg-orange-400"
        >
          {{ submitting ? '登录中...' : '进入后台' }}
        </button>
      </form>

      <div
        class="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400"
      >
        <span>当前主题：{{ appConfigStore.theme }}</span>
        <button class="font-medium text-orange-500" @click="appConfigStore.toggleTheme()">
          切换主题
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppConfigStore, useUserStore } from 'vue-bag-admin'
import { useMessage } from 'naive-ui'

const route = useRoute()
const router = useRouter()
const message = useMessage()
const userStore = useUserStore()
const appConfigStore = useAppConfigStore()

const username = ref('admin')
const password = ref('123456')
const submitting = ref(false)

const handleSubmit = async () => {
  try {
    submitting.value = true
    await userStore.login({
      username: username.value,
      password: password.value
    })
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/dashboard'
    await router.replace(redirect)
  } catch (error) {
    message.error(error instanceof Error ? error.message : '登录失败')
  } finally {
    submitting.value = false
  }
}
</script>
