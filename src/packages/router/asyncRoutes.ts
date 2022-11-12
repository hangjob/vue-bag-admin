import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import appPinia from '@/packages/pinia/app'
import userPinia from '@/packages/pinia/user'
import { apiAppRouter } from '@/packages/service/app'
import router from '@/packages/router/index'
import { Component } from 'vue'
import { toTree } from '@/packages/utils/utils'

let namespace = 'admin'

interface FileType {
    [key: string]: Component
}

/**
 * 是否登录
 */
function hasUserInfo() {
    const userStore = userPinia()
    return Object.keys(userStore.userInfo).length !== 0
}

/**
 * 过滤白名单
 * @param to
 */
function hasWhiteRouter(to: RouteLocationNormalized) {
    const appStore = appPinia()
    return appStore.configApp?.httpNetwork?.whiteList.some((e: string) => to.path.indexOf(e) === 0)
}

/**
 * 获取用户信息
 */
async function getUserInfo() {
    const userStore = userPinia()
    return await userStore.getUserInfo()
}


/**
 * 获取异步路由，动态添加
 */
async function getFilterRoutes() {
    const userStore = userPinia()
    const { rolesDetail } = userStore.userInfo
    const routes: any = await apiAppRouter()
    return routes
    return rolesDetail ? routes.filter(item => rolesDetail.menus.map(Number).indexOf(item.id) > -1) : []
}

/**
 * 汇总所有路由
 */
async function getAllRoutes() {
    const appStore = appPinia()
    const { paths } = appStore.configAppRouter // 本地路由
    findRoutesToComps(paths.concat(await getFilterRoutes()))
}


/**
 * 查找本地文件,获取组件
 */
const localFile: Record<string, FileType> = import.meta.glob('/src/packages/views/**/*.vue', { eager: true }) // 框架 所有页面
function findComponent(filePath: string) {
    const appStore = appPinia()
    const merges = Object.assign(localFile, appStore.configAppRouter.file)
    const comp = Object.keys(merges).find(item => item.indexOf(filePath) > -1)
    return filePath && comp ? merges[comp].default : false
}


/**
 * 查找转换为组件
 * @param routes
 */
function findRoutesToComps(routes: Array<any>) {
    const loopAddRouter = function(paths: Array<any>) {
        paths.forEach((item) => {
            let component = findComponent(item.filePath)
            if (component) {
                router.addRoute(namespace, { path: item.path, component })
            }
            if (item.children) {
                namespace = item.namespace ? item.namespace : namespace // 控制命名空间，做嵌套路由
                loopAddRouter(item.children)
            }
        })
    }
    const appStore = appPinia()
    appStore.menus = toTree(routes)
    loopAddRouter(routes)
}

const asyncRoutes = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (hasUserInfo()) {
        return next()
    }
    if (hasWhiteRouter(to)) {
        return next()
    }
    getUserInfo().then(async () => {
        await getAllRoutes()
        router.addRoute({ path: '/:catchAll(.*)*', redirect: '/404' })
        next({ ...to, replace: true })
    }).catch((e) => {
        console.log(e)
        const appStore = appPinia()
        const { resetPath } = appStore.configApp.httpNetwork
        next(resetPath)
    })
}


export default asyncRoutes
