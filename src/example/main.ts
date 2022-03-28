import 'default-passive-events'
import { Component, createApp } from 'vue'
import App from './App.vue'
// import install from '@/packages/install'
// @ts-ignore
import install from '../../lib/index.es.js'
import '../../mock'
import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
console.log('%c 此页面不需要后端服务，用的是mock数据', 'color:#ffacac;')

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login', name: 'login', meta: {title: '登录'},
            component: () => import('@/packages/views/login/index.vue'),
        },
    ],
} as RouterOptions)
const app = createApp(App)
app.use(install).use(router).mount('#app')
