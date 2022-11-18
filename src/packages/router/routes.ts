import { RouteRecordRaw } from 'vue-router'

/**
 * 基础路由
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'admin',
        component: () => import('@/packages/layout/Index.vue'),
        redirect: 'home',
        children: [],
    },
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/packages/views/login/Index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/packages/views/error/404.vue'),
    },
]

export default routes
