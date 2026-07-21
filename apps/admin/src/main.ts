import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import {
  PermissionAccess,
  bootstrapPlugins,
  createStrapiAuthProvider,
  createHostI18n,
  createHostRouter,
  registerPermissionDirective,
  setAuthProvider,
  setupHttp,
  type AuthProvider,
  useUserStore
} from 'vue-bag-admin'
import { setupBuiltinDictionaries } from './dictionaries'
import { exampleRoutes } from './routes'

// 动态导入所有本地的插件
import sysSettingPlugin from '@bag/plugin-sys-setting'
import shopPlugin from '@bag/plugin-shop'

const { message } = createDiscreteApi(['message'])
const strapiAuthProvider = createStrapiAuthProvider()

const demoAuthProvider: AuthProvider = {
  async login(payload) {
    if (payload.username === 'admin' && payload.password === '123456') {
      return {
        token: 'mock-token-for-demo',
        profile: {
          username: 'admin',
          user: { username: 'admin', source: 'demo' },
          roles: ['admin', 'authenticated'],
          permissions: ['*']
        }
      }
    }

    return strapiAuthProvider.login(payload)
  },
  async fetchProfile(session) {
    if (session.token === 'mock-token-for-demo') {
      return {
        username: 'admin',
        user: { username: 'admin', source: 'demo' },
        roles: ['admin', 'authenticated'],
        permissions: ['*']
      }
    }

    return strapiAuthProvider.fetchProfile(session)
  },
  logout: () => strapiAuthProvider.logout?.()
}

async function setupApp() {
  const app = createApp(App)
  const pinia = createPinia()
  const i18n = createHostI18n()
  const router = createHostRouter({ routes: exampleRoutes })

  app.use(pinia)
  app.use(i18n)
  setupBuiltinDictionaries()
  setAuthProvider(demoAuthProvider)
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
  await bootstrapPlugins({
    app,
    router,
    i18n,
    plugins: [sysSettingPlugin, shopPlugin]
  })

  // 等待路由准备好后再挂载应用
  await router.isReady()
  app.mount('#app')
}

setupApp()
