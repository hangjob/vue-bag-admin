import setupInit from '@/packages/base'

import mitt from 'mitt'
// import { createRouter, createWebHashHistory } from 'vue-router'


const framework = (routerConfig: any) => {
    const { createRouter, createWebHashHistory } = routerConfig
    const router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: '/login', name: 'login', meta: { title: '登录' },
                component: () => import('@/packages/views/login/index.vue'),
            },
        ],
    })
    return {
        router,
    }
}

// @ts-ignore
const install = (app: any) => {
    app.provide('$mitt', mitt())
    setupInit(app)
}

export default install

export {
    framework,
    setupInit,
}
