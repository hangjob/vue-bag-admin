import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import userPinia from '@/bag-web/pinia/user'
import { webWebsiteFind } from '@/bag-web/service/app'


/**
 * 获取用户信息
 */
function hasUserInfo() {
    const user = userPinia()
    return Object.keys(user.userInfo).length !== 0
}


async function getSiteInfo() {
    return await webWebsiteFind()
}

async function getUserInfo() {
    const user = userPinia()
    return await user.getUserInfo()
}


const asyncRoutes = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const user = userPinia()
    try {
        getSiteInfo().then((res) => {
            user.siteInfo = res
            next()
            hasUserInfo() ? next() : getUserInfo().finally(() => next())
        })
    } catch (err) {
        next()
    }
}

export default asyncRoutes
