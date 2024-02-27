import {createWebHistory, createWebHashHistory, RouterOptions, RouteLocationNormalized} from "vue-router"
import * as vueRouter from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import afterEach from "./afterEach.ts"
import routerMap from "@/packages/router/routerMap.ts"
import beforeEach from "@/packages/router/beforeEach.ts"
import type {App} from "vue"

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
    NProgress.start()
    beforeEach(to, from, next)
})

router.afterEach((to: RouteLocationNormalized) => {
    NProgress.done()
    afterEach(to)
})

const setupRouter = (app: App)=>{
    let { replaceRouter } = app.config.globalProperties?.configOptions // 替换路由，自定义内置路由
    replaceRouter.forEach((item: any) => {
        router.addRoute(item)
    })
    return router;
}

export default router
export {
    setupRouter
}
