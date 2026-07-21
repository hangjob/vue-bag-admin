import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import { setupHttp } from 'vue-bag-admin'
import {
  PermissionAccess,
  bootstrapPlugins,
  createStrapiAuthProvider,
  createHostI18n,
  createHostRouter,
  registerPermissionDirective,
  setAuthProvider,
  type AuthProvider,
  useUserStore
} from 'vue-bag-admin'
import App from './App.vue'
import 'vue-bag-admin/style.css'
import './style.css'
import { appRoutes } from './routes'
import contentPlugin from './plugins/content'
import systemPlugin from './plugins/system'
import workspacePlugin from './plugins/workspace'

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
  const router = createHostRouter({ routes: appRoutes })

  app.use(pinia)
  app.use(i18n)
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
    }
  })

  await bootstrapPlugins({
    app,
    router,
    i18n,
    plugins: [workspacePlugin, contentPlugin, systemPlugin]
  })

  await router.isReady()
  app.mount('#app')
}

setupApp()
