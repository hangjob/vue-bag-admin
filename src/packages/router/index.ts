import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import {routerMode} from '@/packages/config';
import {App} from 'vue';
import {setupRouterGuard} from '@/packages/router/guard'
import {setupBeforeStore} from "@/packages/router/beforeStore";
import {setAddRoute} from '@/packages/router/addRoute'

// 定义路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "admin",
        component: () => import('@/packages/layout/index.vue'),
        children: [
            {path: '', redirect: 'home'},
            {
                path: '/home', name: 'home', meta: {title: '首页'},
                component: () => import('@/packages/views/home/index.vue')
            },
            {
                path: '/sys/menu', name: 'sys-menu', meta: {title: '菜单列表'},
                component: () => import('@/packages/views/sys/menu.vue')
            },
            {
                path: '/module/markdown', name: 'module-markdown', meta: {title: 'markdown编辑器'},
                component: () => import('@/packages/views/module/markdown/index.vue')
            },
            {
                path: '/module/fileUploadImg', name: 'module-fileUploadImg', meta: {title: '图片上传'},
                component: () => import('@/packages/views/module/fileUpload/fileUploadImg.vue')
            },
            {
                path: '/module/fileUpload', name: 'module-fileUpload', meta: {title: '文件上传'},
                component: () => import('@/packages/views/module/fileUpload/fileUpload.vue')
            },
            {
                path: '/about', name: 'about', meta: {title: '关于'},
                component: () => import('@/packages/views/about/index.vue')
            },
            {
                path: '/permit', name: 'permit', meta: {title: '权限管理'},
                component: () => import('@/packages/views/permit/index.vue')
            },
            {
                path: '/module/exel', name: 'module-exel', meta: {title: '解析Exel'},
                component: () => import('@/packages/views/module/exel/index.vue')
            },
            {
                path: '/module/rich', name: 'module-rich', meta: {title: '富文本编辑器'},
                component: () => import('@/packages/views/module/rich/index.vue')
            },
            {
                path: '/vxe-table/base', name: 'vxe-table-base', meta: {title: '基础数据'},
                component: () => import('@/packages/views/vxe-table/base/index.vue')
            },
            {
                path: '/vxe-table/great-table', name: 'vxe-table-great-table', meta: {title: '海量数据'},
                component: () => import('@/packages/views/vxe-table/great-table/index.vue')
            },
            {
                path: '/vxe-table/edit-table', name: 'vxe-table-edit-table', meta: {title: '编辑表格'},
                component: () => import('@/packages/views/vxe-table/edit-table/index.vue')
            },
            {
                path: '/vxe-table/verify-table', name: 'vxe-table-verify-table', meta: {title: '校验表格'},
                component: () => import('@/packages/views/vxe-table/verify-table/index.vue')
            },
            {
                path: '/iframe/:name', name: 'iframe-view', meta: {title: 'iframe'},
                component: () => import('@/packages/views/module/iframe/index.vue')
            },
            {
                path: '/module/print', name: 'module-print', meta: {title: 'print'},
                component: () => import('@/packages/views/module/print/index.vue')
            },
            {
                path: '/module/icon/iconfont', name: 'module-icon-iconfont', meta: {title: '图标'},
                component: () => import('@/packages/views/module/icon/iconfont/index.vue')
            },
            {
                path: '/animation/mojs', name: 'animation-mojs', meta: {title: '动画'},
                component: () => import('@/packages/views/animation/mojs/index.vue')
            },
            {
                path: '/module/draggable', name: 'module-draggable', meta: {title: '拖拽排序'},
                component: () => import('@/packages/views/module/draggable/index.vue')
            },
            {
                path: '/chart/echarts', name: 'chart-echarts', meta: {title: '百度Echarts'},
                component: () => import('@/packages/views/chart/echarts/index.vue')
            },
            {
                path: '/chart/g2', name: 'chart-g2', meta: {title: 'G2'},
                component: () => import('@/packages/views/chart/g2/index.vue')
            },
            {
                path: '/chart/g2plot', name: 'chart-g2plot', meta: {title: 'G2plot'},
                component: () => import('@/packages/views/chart/g2plot/index.vue')
            },
            {
                path: '/error', name: 'error', meta: {title: '错误页面'},
                component: () => import('@/packages/views/error/index.vue')
            },
            {
                path: '/500', name: '500', meta: {title: '错误页面'},
                component: () => import('@/packages/views/error/500.vue')
            },
            {
                path: '/403', name: '403', meta: {title: '错误页面'},
                component: () => import('@/packages/views/error/403.vue')
            },
            {
                path: '/module/descriptions', name: 'module-descriptions', meta: {title: '描述列表'},
                component: () => import('@/packages/views/module/descriptions/index.vue')
            },
            {
                path: '/module/marquee', name: 'module-marquee', meta: {title: '滚动组件'},
                component: () => import('@/packages/views/module/marquee/index.vue')
            },
            {
                path: '/admire', name: 'admire', meta: {title: '打点吧'},
                component: () => import('@/packages/views/admire/index.vue')
            },
            {
                path: '/async', name: 'async', meta: {title: '异步组件'},
                component: () => import('@/packages/views/async/index.vue')
            }
        ]
    },
    {
        path: "/login", name: 'login', meta: {title: '登录'},
        component: () => import('@/packages/views/login/index.vue'),
    },
    {
        path: '/404',
        component: () => import('@/packages/views/error/404.vue'),
    },
    {
        path: '/:catchAll(.*)*',    // 不识别的path自动匹配404
        redirect: '/404',
    },
]

// 实列化router
const router = createRouter({
    history: routerMode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes
} as RouterOptions)


router.beforeEach((to: any, from: any, next: any) => {
    setupBeforeStore()
    setupRouterGuard(to, from, next)
});


/**
 * router-view
 * 添加动画
 */
router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

const setupRouter = (app: App) => {
    setAddRoute(app, router)
    app.use(router)
}

export default router;
export {
    setupRouter
}
