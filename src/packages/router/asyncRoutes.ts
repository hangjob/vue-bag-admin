import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import appPinia from '@/packages/pinia/app'
import userPinia from '@/packages/pinia/user'
import { apiAppRouter } from '@/packages/service/app'
import router from '@/packages/router/index'
import { Component } from 'vue'
import { toTree, getAllParentArr } from '@/packages/utils/utils'
import { findChildrenDepth, find } from '@/packages/utils/lodash'
import { utils, object, string } from 'pm-utils'
import { _default } from './config'

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
    try {
        const userStore = userPinia()
        const appStore = appPinia()
        // 如果后端没有返回 rolesDetail 则没有做菜单权限过滤 所有菜单即可显示
        const { rolesDetail } = userStore.userInfo
        const routes: any = await apiAppRouter()
        appStore.httpSourceMenus = routes
        return rolesDetail ? routes.filter(item => rolesDetail.menus.map(Number).indexOf(item.id) > -1) : routes
    } catch (e) {
        console.warn('路由接口出现异常')
        return []
    }
}

/**
 * 汇总所有路由
 */
async function getAllRoutes() {
    const appStore = appPinia()
    const { paths } = appStore.configAppRouter // 本地路由
    appStore.configAppRouter.paths = paths.concat(_default, await getFilterRoutes())
    findRoutesToComps(object.arrayRemoveRepet({ arr: appStore.configAppRouter.paths }))
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
    const appStore = appPinia()
    const loopAddRouter = function(paths: Array<any>) {
        paths.forEach((item) => {
            let component = findComponent(item.filePath)
            if (component) {
                appStore.configAppRouter.allRouter.push(item)
                router.addRoute(namespace, { path: item.path, component })
            }
            if (item.children) {
                namespace = item.namespace ? item.namespace : namespace // 控制命名空间，做嵌套路由
                loopAddRouter(item.children)
            }
        })
    }
    appStore.menus = toTree(routes)
    appStore.sourceMenus = routes
    loopAddRouter(routes)
}


/**
 * 更新 当前 tabPaths
 */
function updataTabPaths(to: RouteLocationNormalized) {
    const appStore = appPinia()
    if (appStore.menus.length) {
        let arr = getAllParentArr(toTree(appStore.sourceMenus, { isDynamic: true }), to.path)
        appStore.tabPaths = arr && arr.reverse() || []
    }
}

/**
 * 更新 当前路由 信息
 */
function updataCurrentRouter(to: RouteLocationNormalized) {
    const appStore = appPinia()
    const item = find({ key: 'path', value: to.path }, appStore.sourceMenus)
    appStore.currentRouter = { ...item, route: { path: to.path } }
}

/**
 * 更新 tab切换栏
 */
function updataTabs(to: RouteLocationNormalized) {
    const appStore = appPinia()
    appStore.defaultTabFix()
    const item = findChildrenDepth({ key: 'path', value: to.path, node: 'children' }, appStore.menus)
    if (item) {
        appStore.updataTabs(item)
    }
}

/**
 * :id 动态路由
 */
const updataDynamic = (to: RouteLocationNormalized, next) => {
    const appStore = appPinia()
    const find = appStore.configAppRouter.paths.find((item) => item.path === to.path)
    if (!find) {
        if (to.query.route) {
            const route: any = JSON.parse(<string>to.query.route)
            appStore.configAppRouter.paths.push(route)
            // 记录后续优化 在addRouter的时候需要考虑一个问题，是否重复添加addRouter
            findRoutesToComps(object.arrayRemoveRepet({ arr: appStore.configAppRouter.paths }))
            next({ ...to, replace: true })
        }
    }
}

const asyncRoutes = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (hasWhiteRouter(to) || hasUserInfo()) {
        updataDynamic(to, next)
        updataTabPaths(to)
        updataCurrentRouter(to)
        updataTabs(to)
        return next()
    }
    getUserInfo().then(async () => {
        await getAllRoutes()
        router.addRoute({ path: '/:catchAll(.*)*', redirect: '/404' })
        next({ ...to, replace: true })
    }).catch(() => {
        const appStore = appPinia()
        if (utils.dataType(appStore.configAppFuns.beforeEach.callback) === 'function') {
            appStore.configAppFuns.beforeEach.callback(to, from, next)
        } else {
            const { resetPath } = appStore.configApp.httpNetwork
            next(resetPath)
        }
    })
}


export default asyncRoutes
