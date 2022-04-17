import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import { routerSet } from '@/packages/config'
import { App } from 'vue'
import { hasUserinfo } from '@/packages/router/beforeEach'
import { NProgress } from '@/packages/plugin/nprogress'
import { setAppRouterStore } from '@/packages/router/setStore'
import { setDefaultRouterTabFix, setStoreProcessCurrent } from './setStore'

/**
 * 基础路由
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'admin',
        component: () => import('@/packages/layout/Index.vue'),
        children: [{ path: '', redirect: 'home' }],
    },
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/packages/views/login/Index.vue'),
    },
    {
        path: '/test', name: 'test', meta: { title: '测试页面' },
        component: () => import('@/packages/views/test/Index.vue'),
    },
    {
        path: '/404',
        component: () => import('@/packages/views/error/404.vue'),
    },
]

/**
 * 实列化router
 */
const router = createRouter({
    history: routerSet.mode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes,
} as RouterOptions)

router.beforeEach((to: any, from: any, next: any) => {
    NProgress.start()
    setDefaultRouterTabFix()
    setStoreProcessCurrent(to)
    hasUserinfo(to, from, next)
})


router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    NProgress.done()
})


const setupRouter = (app: App) => {
    app.use(router)
    setAppRouterStore(app)
}

export default router
export {
    setupRouter,
}
