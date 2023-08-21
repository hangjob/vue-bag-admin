import {RouteLocationNormalized, NavigationGuardNext} from "vue-router"
import appPinia from "@/packages/pinia/app.ts"
import {menus as getMenus, userInfo} from "@/packages/api/app.ts"
import {RouterComponent} from "@/packages/type"
import router from "@/packages/router"
import merge from "lodash/merge.js"
import isArray from "lodash/isArray.js"
import unionWith from "lodash/unionWith.js"
import {renderIcon} from "@/packages/config/icon.ts"
import {toTree} from "@/packages/utils/utils.ts"

let hasRoles = false
const namespace = "main"
//框架页面组件
const frameView: Record<string, RouterComponent> = import.meta.glob("@/packages/view/**/*.vue", {eager: true})

function findComponent(filePath: string) {
    const appStore = appPinia()
    const views = merge(appStore.configOptions.getViews(), frameView)
    const key = Object.keys(views).find((path) => {
        return path.toLowerCase().indexOf(filePath.toLowerCase()) > -1
    })
    return filePath && views[key] && views[key].default
}

/**
 * 创建路由组件
 * @param allMenus
 */
function createRouterComponent(allMenus) {
    allMenus.forEach((item) => {
        const component = findComponent(item.file)
        if (component) {
            router.addRoute(item.namespace ? item.namespace : namespace, {
                path: item.path, name: item.name, component: component, meta: item
            })
        }
        if (isArray(item.children)) {
            createRouterComponent(item.children)
        }
    })
}

/**
 * 校验路由是否在白名单中
 * @param path
 */
function hasWhiteRouter(path: string) {
    const appStore = appPinia()
    return appStore.configOptions.whiteList.some((e: string) => path.indexOf(e) === 0)
}

/**
 * 是否登录
 */
function hasUserInfo() {
    const appStore = appPinia()
    return Object.keys(appStore.userInfo).length !== 0
}

/**
 * 获取并更新用户信息
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
    const appStore = appPinia()
    if (hasRoles) {
        next()
    } else {
        getMenus().then((res) => {
            const {menus} = appStore.configOptions
            const allMenus = unionWith(res.data, menus)
            appStore.allMenus = allMenus.map((item) => {
                if (item.icon) {
                    item.iconName = item.icon
                    item.icon = renderIcon(item.iconName)
                } else {
                    delete item.icon
                }
                item.name = item.name || item.path
                return item
            })
            appStore.treeMenus = toTree({arr: appStore.allMenus})
            createRouterComponent(allMenus)
        }).finally(() => {
            hasRoles = true
            next(to.fullPath)
        })
    }
}

const beforeEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (hasWhiteRouter(to.path)) {
        return next()
    }
    if (hasUserInfo()) {
        updateRouterAll(to, from, next)
    } else {
        getUserInfo(to, from, next)
    }
}

export default beforeEach
