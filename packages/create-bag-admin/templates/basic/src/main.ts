import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import { setupHttp } from '@bag/request'
import {
  PermissionAccess,
  bootstrapPlugins,
  createHostI18n,
  createHostRouter,
  registerPermissionDirective,
  useUserStore
} from '@bag/host-vue'
import App from './App.vue'
import './style.css'
import { appRoutes } from './routes'
import demoPlugin from './plugins/demo'

const { message } = createDiscreteApi(['message'])

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  const i18n = createHostI18n()
  const router = createHostRouter({ routes: appRoutes })

  app.use(pinia)
  app.use(i18n)
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
    }
  })

  await bootstrapPlugins({
    app,
    router,
    i18n,
    plugins: [demoPlugin]
  })

  await router.isReady()
  app.mount('#app')
}

setupApp()
