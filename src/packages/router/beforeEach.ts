import {RouteLocationNormalized, NavigationGuardNext} from "vue-router"
import appPinia from "@/packages/pinia/app.ts"
import {menus as getMenus, userInfo} from "@/packages/api/app.ts"
import {RouterComponent} from "@/packages/type"
import router from "@/packages/router"

let hasRoles = false
const namespace = "admin"
//框架页面组件
const files: Record<string, RouterComponent> = import.meta.glob("@/packages/view/**/*.vue", {eager: true})

//
function findComponent(filePath) {
    return Object.keys(files).find((file) => file.indexOf(filePath) > -1)
}


function createRouterComponent(menus) {
    const appStore = appPinia()
    menus.forEach((menu) => {
        const component = findComponent(menu.file)
        if (component) {
            router.addRoute(menu.namespace ? menu.namespace : namespace, {
                path: menu.path,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                route: component
            })
        }
        if (menu.children) {
            createRouterComponent(menu.children)
        }
    })
    console.log(router.getRoutes())
}

/**
 * 校验路由是否在白名单中
 * @param to
 */
function hasWhiteRouter(to: RouteLocationNormalized) {
    const appStore = appPinia()
    return appStore.configOptions.whiteList.some((e: string) => to.path.indexOf(e) === 0)
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
        next(appStore.configOptions.resetPath)
    })
}

/**
 * 获取后端接口菜单数据
 * @param to
 * @param from
 * @param next
 */
function updateRouterAll(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (hasRoles) {
        next()
    } else {
        getMenus().then((res) => {
            createRouterComponent(res.data)
        }).finally(() => {
            hasRoles = true
            next({...to, replace: true})
        })
    }
}

const beforeEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (hasWhiteRouter(to)) {
        return next()
    }
    if (hasUserInfo()) {
        updateRouterAll(to, from, next)
    } else {
        getUserInfo(to, from, next)
    }
}

export default beforeEach
