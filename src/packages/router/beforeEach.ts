import {RouteLocationNormalized, NavigationGuardNext} from "vue-router"
import appPinia from "@/packages/pinia/app.ts"
import {menus, userInfo} from "@/packages/api/app.ts"

let hasRoles = false

/**
 * 校验路由是否在白名单中
 * @param to
 */
function hasWhiteRouter(to: RouteLocationNormalized) {
    const appStore = appPinia()
    return appStore.config.whiteList.some((e: string) => to.path.indexOf(e) === 0)
}

/**
 * 是否登录
 */
function hasUserInfo() {
    const appStore = appPinia()
    return Object.keys(appStore.userInfo).length !== 0
}

/**
 * 获取用户信息
 * @param to
 * @param from
 * @param next
 */
function getUserInfo(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const appStore = appPinia()
    userInfo().then((res) => {
        appStore.userInfo = res
        updateRouterAll(to, from, next)
    }).catch(() => {
        next(appStore.config.resetPath)
    })
}

function getMenus(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    menus().then((res) => {

    }).catch((err) => {
        next()
    })
}


function updateRouterAll(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (hasRoles) {
        next()
    } else {
        menus().then((res) => {
            // 这里处理合并菜单
            console.log(res)
        }).finally(() => {
            hasRoles = true
            next({...to, replace: true})
        })
    }
}

const afterEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (hasWhiteRouter(to)) {
        return next()
    }
    if (hasUserInfo()) {
        updateRouterAll(to, from, next)
    } else {
        getUserInfo(to, from, next)
    }
}

export default afterEach
