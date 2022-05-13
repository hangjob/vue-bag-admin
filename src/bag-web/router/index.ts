import {
    createRouter,
    createWebHashHistory,
    RouteLocationNormalized,
    NavigationGuardNext,
    RouterOptions,
} from 'vue-router'
import type { App } from 'vue'
import { setAppConfig } from '@/bag-web/router/setPinia'

/**
 * 基础路由
 */
const routes = [
    {
        path: '/',
        name: 'web',
        component: () => import('@/bag-web/layout/Index.vue'),
        children: [
            { path: '', redirect: 'home' },
            {
                path: '/home', name: 'home', meta: { title: '首页' },
                component: () => import('@/bag-web/views/home/Index.vue'),
            },
            {
                path: '/article/:id', name: 'article', meta: { title: '详情' },
                component: () => import('@/bag-web/views/article/Index.vue'),
            },
        ],
    },
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/bag-web/views/login/Index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
} as RouterOptions)

const addRoutes = function(app: App) {
    let { routes = [] } = app.config.globalProperties?.configAppRouter // 替换路由，自定义内置路由
    let deep = function(routes: Array<any>) {
        let namespace = 'web'
        routes.forEach((item) => {
            if (item.children) {
                namespace = item.name ? item.name : ''
                deep(item.children)
            } else {
                router.addRoute(namespace, item)
            }
        })
    }
    deep(routes)
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    setAppConfig(to, from, next)
})

const setupRouter = (app: App) => {
    addRoutes(app)
    app.use(router)
}

export {
    setupRouter,
}
