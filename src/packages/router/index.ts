import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import { routerSet } from '@/packages/config'
import { App } from 'vue'
import { setupRouterGuard } from '@/packages/router/guardRouter'
import { setupBeforeStore } from '@/packages/router/beforeStore'
import store from '@/packages/store'
import { NProgress } from '@/packages/plugin/nprogress'
import { defaultMenu, defaultPrjMenu } from '@/packages/config/defaultMenu'

// 定义路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'admin',
        component: () => import('@/packages/layout/index.vue'),
        children: [{ path: '', redirect: 'home' }],
    },
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/packages/views/login/index.vue'),
    },
    {
        path: '/test', name: 'test', meta: { title: '测试页面' },
        component: () => import('@/packages/views/test/index.vue'),
    },
    {
        path: '/404',
        component: () => import('@/packages/views/error/404.vue'),
    },
]

// 实列化router
const router = createRouter({
    history: routerSet.mode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes,
} as RouterOptions)

router.beforeEach((to: any, from: any, next: any) => {
    NProgress.start()
    setupBeforeStore(to)
    setupRouterGuard(to, from, next)
})


const setAppRouterStore = (app: App) => {
    const { defaults = true, file = [], paths = [] } = app.config.globalProperties?.$plugin?.router || {}
    if (defaults) {
        store.commit('app/updateMenuList', defaultMenu)
        store.commit('app/updateProjectMenu', defaultPrjMenu)
    }
    store.commit('app/updateAppRouter', { key: 'defaults', value: defaults })
    store.commit('app/updateAppRouter', { key: 'file', value: file })
    store.commit('app/updateAppRouter', { key: 'paths', value: paths })
}

const setupRouter = (app: App) => {
    setAppRouterStore(app)
    app.use(router)
    router.isReady().then(() => {
        store.commit('app/updateAppRouter', { key: 'router', value: router })
    })
}

export default router
export {
    setupRouter,
}
