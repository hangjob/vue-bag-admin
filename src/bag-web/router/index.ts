import {
    createRouter,
    createWebHashHistory,
    RouteLocationNormalized,
    NavigationGuardNext,
    RouterOptions, createWebHistory,
} from 'vue-router'
import type { App } from 'vue'
import {nanoid} from 'nanoid'
import asyncRoutes from '@/bag-web/router/asyncRoutes'
let namespace = 'web'
/**
 * 基础路由
 */
const routes = [
    {
        path: '/',
        name: 'web',
        component: () => import('@/bag-web/layout/Index.vue'),
        redirect: 'home',
        children: [
            {
                path: '/home', name: 'home', meta: { title: '首页' },
                component: () => import('@/bag-web/views/home/Index.vue'),
            },
            {
                path: '/article/:id', name: 'article', meta: { title: '详情' },
                component: () => import('@/bag-web/views/article/Index.vue'),
            },
            {
                path: '/download', name: 'download', meta: { title: '下载中心' },
                component: () => import('@/bag-web/views/download/Index.vue'),
            },
            {
                path: '/archives', name: 'archives', meta: { title: '文章列表' },
                component: () => import('@/bag-web/views/archives/Index.vue'),
            },
            {
                path: '/download/:id', name: 'downloadId', meta: { title: '下载中心' },
                component: () => import('@/bag-web/views/download/Id.vue'),
            },
        ],
    },
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/bag-web/views/login/Index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory('/web.html'),
    routes,
} as RouterOptions)

const findRoutesToComps = function(app: App) {
    let { routes = [] } = app.config.globalProperties?.configAppRouter // 替换路由，自定义内置路由
    let loopAddRouter = function(routes: Array<any>) {
        routes.forEach((item) => {
            router.addRoute(namespace, item)
            if (item.children) {
                namespace = item.namespace ? item.namespace : nanoid()
                loopAddRouter(item.children)
            }
        })
    }
    loopAddRouter(routes)
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    asyncRoutes(to, from, next)
})

const setupRouter = (app: App) => {
    findRoutesToComps(app)
    app.use(router)
}

export {
    setupRouter,
}
