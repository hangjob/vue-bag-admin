import store from '@/packages/store'
import { getAllParentArr } from '@/packages/utils/utils'
import { findChildrenDepth } from '@/packages/utils/lodash'
import { apiUserUserinfo } from '@/packages/service/user'
import { NProgress } from '@/packages/plugin/nprogress'
import { routerSet } from '@/packages/config'

const { ignore } = routerSet

// 处理app-store数据
function setAppStoreData(to: any): void {
    const item: any = findChildrenDepth({
        key: 'path',
        value: to.path,
        node: 'children',
    }, store.getters['app/menuList'])
    store.commit('app/addProcessList', { ...item })
    store.commit('app/updateCurrentRouter', { ...to })
    const arr = getAllParentArr(store.getters['app/menuList'], to.path)
    arr && store.commit('app/updateTabViewsPath', arr)
}


function checkError(to: any, from: any, next: any): void {
    if (!ignore.some((e: string) => to.path.indexOf(e) === 0)) {
        next(ignore[0])
    } else {
        next()
    }
}

function checkUserinfo(to: any, from: any, next: any): void {
    const userinfo = store.getters['user/userinfo']
    setAppStoreData(to)
    if (Object.keys(userinfo).length) {
        next()
    } else {
        if (ignore.some((e: string) => to.path.indexOf(e) === 0)) { //过滤这些页面不需要调用用户信息接口
            checkError(to, from, next)
        } else {
            apiUserUserinfo().then((res: any) => {
                store.commit('user/updateUserinfo', res)
                next()
            }).catch(() => {
                checkError(to, from, next)
            })
        }
    }
}


function checkLogin(to: any, from: any, next: any): void {
    checkUserinfo(to, from, next) // 采用服务端校验是否登录状态，当请求接口，在http请求拦截
}

const setupRouterGuard = (to: any, from: any, next: any) => {
    NProgress.start()
    checkLogin(to, from, next)
    NProgress.done()
}

export {
    setupRouterGuard,
}
