import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales'
import { bootstrapPlugins, router } from './core/plugin-manager'
import './style.css'
import { createPinia } from 'pinia'
import { setupHttp } from '@bag/request'
import { useUserStore } from './stores/user'
import { createDiscreteApi } from 'naive-ui'
import { registerPermissionDirective } from './directives/permission'
import PermissionAccess from './components/PermissionAccess.vue'
import { setupBuiltinDictionaries } from './dictionaries'

// 动态导入所有本地的插件
import sysSettingPlugin from '@bag/plugin-sys-setting'
import shopPlugin from '@bag/plugin-shop'

const { message } = createDiscreteApi(['message'])

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(i18n)
  setupBuiltinDictionaries()
  app.component('PermissionAccess', PermissionAccess)
  registerPermissionDirective(app)

  const userStore = useUserStore()
  setupHttp({
    baseURL: import.meta.env.VITE_API_URL,
    getToken: () => userStore.token,
    onUnauthorized: () => {
      userStore.logout()
      router.replace({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } })
    },
    onForbidden: () => {
      message.warning('当前账号没有访问权限')
      router.replace('/403')
    },
    onServerError: () => {
      message.error('服务异常，请稍后重试')
    },
    resolveError: (payload) => {
      const data = payload as
        | { success?: boolean; code?: string | number; message?: string }
        | undefined
      if (data?.success === false) {
        return {
          code: data.code,
          message: data.message || 'Request failed'
        }
      }
      return null
    }
  })

  // 挂载插件 (包含了路由注册)
  await bootstrapPlugins(app, [sysSettingPlugin, shopPlugin])

  // 等待路由准备好后再挂载应用
  await router.isReady()
  app.mount('#app')
}

setupApp()
