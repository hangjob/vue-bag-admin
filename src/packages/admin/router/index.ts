import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import {routerMode} from '@/packages/admin/config';
import {App} from 'vue';

// 定义路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import('@/packages/admin/layout/index.vue'),
        children: [
            {path: '', redirect: 'home'},
            {
                path: 'home', name: 'home', meta: {title: '首页'},
                component: () => import('@/packages/admin/views/home/index.vue')
            },
            {
                path: '/sys/menu', name: 'sys-home', meta: {title: '菜单列表'},
                component: () => import('@/packages/admin/views/sys/menu.vue')
            }
        ]
    }
]

// 实列化router
const router = createRouter({
    history: routerMode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes
} as RouterOptions)

const setupRouter = (app: App) => {
    app.use(router)
}

export default router;
export {
    setupRouter
}