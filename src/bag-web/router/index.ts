import {
    createRouter,
    createWebHashHistory,
    RouteLocationNormalized,
    NavigationGuardNext,
    RouterOptions, createWebHistory,
} from 'vue-router'
import type {App} from 'vue'
import {setPinia} from '@/bag-web/router/setPinia'
import {nanoid} from "nanoid";

/**
 * 基础路由
 */
const routes = [
    {
        path: '/',
        name: 'web',
        component: () => import('@/bag-web/layout/Index.vue'),
        children: [
            {path: '', redirect: 'home'},
            {
                path: '/home', name: 'home', meta: {title: '首页'},
                component: () => import('@/bag-web/views/home/Index.vue'),
            },
            {
                path: '/article/:id', name: 'article', meta: {title: '详情'},
                component: () => import('@/bag-web/views/article/Index.vue'),
            },
        ],
    },
    {
        path: '/login', name: 'login', meta: {title: '登录'},
        component: () => import('@/bag-web/views/login/Index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory('/web.html'),
    routes,
} as RouterOptions)

const addRoutes = function (app: App) {
    let {routes = []} = app.config.globalProperties?.configAppRouter // 替换路由，自定义内置路由
    console.log(routes)
    let namespace = 'web'
    let deep = function (routes: Array<any>) {
        routes.forEach((item) => {
            router.addRoute(namespace, item)
            if (item.children) {
                namespace = item.name ? item.name : nanoid()
                deep(item.children)
            }
        })
    }
    deep(routes)
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    setPinia(to, from, next)
})

const setupRouter = (app: App) => {
    addRoutes(app)
    app.use(router)
}

export {
    setupRouter,
}
