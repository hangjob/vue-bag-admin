import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import {routerMode} from '@/packages/admin/config';
import {App} from 'vue';
import store from '@/packages/admin/store'
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
            }
        ]
    }
]

// 实列化router
const router = createRouter({
    history: routerMode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes
} as RouterOptions)


router.beforeEach((to: any, from: any, next: any) => {
    store.commit("addProcessList", {
        keepAlive: to.meta.keepAlive,
        title: to.meta.title,
        fullPath: to.fullPath
    });
    store.commit("updataCurrentRouter",{
        ...to
    })
    console.log(to)
    next()
});

const setupRouter = (app: App) => {
    app.use(router)
}

export default router;
export {
    setupRouter
}