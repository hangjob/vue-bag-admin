// 实列化router
import {createRouter, createWebHashHistory, RouterOptions} from 'vue-router'
import type {App} from 'vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'web',
            component: () => import('@www/web/layout/Index.vue'),
            children: [
                {path: '', redirect: 'home'},
                {
                    path: '/home', name: 'home', meta: {title: '首页'},
                    component: () => import('@www/web/views/home/Index.vue'),
                },
                {
                    path: '/article/:id', name: 'article', meta: {title: '详情'},
                    component: () => import('@www/web/views/article/Index.vue'),
                },
            ],
        },
        {
            path: '/login', name: 'login', meta: {title: '登录'},
            component: () => import('@www/web/views/login/Index.vue'),
        },
    ],
} as RouterOptions)

const setupRouter = (app: App) => {
    app.use(router)
}

export {
    setupRouter,
}
