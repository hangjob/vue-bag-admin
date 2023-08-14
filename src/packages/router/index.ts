import {createWebHistory, createWebHashHistory, RouterOptions, RouteLocationNormalized} from "vue-router"
import * as vueRouter from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import afterEach from "./afterEach.ts"
import routerMap from "@/packages/router/routerMap.ts"

NProgress.configure({
    easing: "ease",  // 动画方式
    speed: 1000,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

const router = vueRouter.createRouter({
    history: createWebHashHistory(),
    routes: routerMap,
} as RouterOptions)

router.beforeEach((to, from, next) => {
    console.log("%c框架层拦截", "color: green;")
    NProgress.start()
    next()
})

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    NProgress.done()
    afterEach(to, from)
})

export default router
