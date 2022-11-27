import { createRouter, createWebHashHistory, createWebHistory, RouterOptions } from 'vue-router'
import { App } from 'vue'
import { NProgress } from '@/packages/plugin/nprogress'
import routes from '@/packages/router/routes'
import asyncRoutes from '@/packages/router/asyncRoutes'

const router = createRouter({
    history: import.meta.env.VITE_APP_HISTORY === 'history' ? createWebHistory() : createWebHashHistory(),
    routes,
} as RouterOptions)

router.beforeEach((to, from,  next) => {
    NProgress.start()
    asyncRoutes(to, from, next)
})

router.afterEach((to, from) => {
    NProgress.done()
})

/**
 * 覆盖路由
 * @param app
 */
function replaceRoutes(app: App) {
    let { replaceRouter } = app.config.globalProperties?.configAppRouter // 替换内置路由
    replaceRouter.forEach((item: any) => {
        router.addRoute(item)
    })
}


const setupRouter = (app: App) => {
    replaceRoutes(app)
    app.use(router)
}

export default router
export {
    setupRouter,
}
