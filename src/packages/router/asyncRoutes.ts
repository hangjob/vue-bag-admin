import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import appPinia from '@/packages/pinia/app'
import store from '@/packages/store'
import { apiUserUserinfo } from '@/packages/service/user'

const appStore = appPinia()

/**
 * 是否登录
 */
function hasUserInfo() {
    return !!Object.keys(appStore.userInfo).length
}

/**
 * 过滤白名单
 * @param to
 */
function hasWhiteRouter(to: RouteLocationNormalized) {
    return appStore.configApp?.httpNetwork?.whiteList.some((e: string) => to.path.indexOf(e) === 0)
}

/**
 * 获取用户信息
 */
async function getUserInfo() {
    await apiUserUserinfo()
}

const asyncRoutes = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (hasUserInfo()) {
        return next()
    }
    if (hasWhiteRouter(to)) {
        return next()
    }
}


export default asyncRoutes
