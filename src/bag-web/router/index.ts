import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'web',
            component: () => import('@/bag-web/layout/Index.vue'),
            children: [
                { path: '', redirect: 'home' },
                {
                    path: '/home', name: 'home', meta: { title: '首页' },
                    component: () => import('@/bag-web/web/views/home/Index.vue'),
                },
            ],
        },
        {
            path: '/login', name: 'login', meta: { title: '登录' },
            component: () => import('@/bag-web/web/views/login/Index.vue'),
        },
    ],
} as RouterOptions)

const setupRouter = (app: App) => {
    let { routes } = app.config.globalProperties?.configAppRouter || {} // 替换路由，自定义内置路由
    routes.forEach((item: any) => {
        router.addRoute(item)
    })
    app.use(router)
}

export {
    setupRouter,
}
