import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import {routerMode} from '@/packages/admin/config';
import {App} from 'vue';
import {setupRouterGuard} from './guard/index'
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
                path: '/sys/menu', name: 'sys-menu', meta: {title: '菜单列表'},
                component: () => import('@/packages/admin/views/sys/menu.vue')
            },
            {
                path: '/module/markdown', name: 'module-markdown', meta: {title: 'markdown编辑器'},
                component: () => import('@/packages/admin/views/module/markdown/index.vue')
            },
            {
                path: '/module/fileUploadImg', name: 'module-fileUploadImg', meta: {title: '图片上传'},
                component: () => import('@/packages/admin/views/module/fileUpload/fileUploadImg.vue')
            },
            {
                path: '/about', name: 'about', meta: {title: '关于'},
                component: () => import('@/packages/admin/views/about/index.vue')
            },
            {
                path: '/permit', name: 'permit', meta: {title: '权限管理'},
                component: () => import('@/packages/admin/views/permit/index.vue')
            },
            {
                path: '/module/exel', name: 'module-exel', meta: {title: '解析Exel'},
                component: () => import('@/packages/admin/views/module/exel/index.vue')
            },
            {
                path: '/module/rich', name: 'module-rich', meta: {title: '富文本编辑器'},
                component: () => import('@/packages/admin/views/module/rich/index.vue')
            },
            {
                path: '/vxe-table/base', name: 'vxe-table-base', meta: {title: '基础数据'},
                component: () => import('@/packages/admin/views/vxe-table/base/index.vue')
            },
            {
                path: '/vxe-table/great-table', name: 'vxe-table-great-table', meta: {title: '海量数据'},
                component: () => import('@/packages/admin/views/vxe-table/great-table/index.vue')
            },
            {
                path: '/vxe-table/edit-table', name: 'vxe-table-edit-table', meta: {title: '编辑表格'},
                component: () => import('@/packages/admin/views/vxe-table/edit-table/index.vue')
            },
            {
                path: '/vxe-table/verify-table', name: 'vxe-table-verify-table', meta: {title: '校验表格'},
                component: () => import('@/packages/admin/views/vxe-table/verify-table/index.vue')
            },
            {
                path: '/iframe', name: 'iframe', meta: { title: 'iframe' },
                component: () => import('@/packages/admin/views/module/iframe/index.vue')
            },
            {
                path: '/module/print', name: 'module-print', meta: { title: 'print' },
                component: () => import('@/packages/admin/views/module/print/index.vue')
            },
            {
                path: '/module/icon/iconfont', name: 'module-icon-iconfont', meta: { title: '图标' },
                component: () => import('@/packages/admin/views/module/icon/iconfont/index.vue')
            }
        ]
    },
    {
        path: "/login", name: 'login', meta: {title: '登录'},
        component: () => import('@/packages/admin/views/login/index.vue'),
    }
]

// 实列化router
const router = createRouter({
    history: routerMode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes
} as RouterOptions)


router.beforeEach((to: any, from: any, next: any) => {
    setupRouterGuard(to, from, next)
});

const setupRouter = (app: App) => {
    app.use(router)
}

export default router;
export {
    setupRouter
}