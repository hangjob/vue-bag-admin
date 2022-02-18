import store from '@/packages/store'
import { apiUserUserinfo } from '@/packages/service/user'
import { routerSet } from '@/packages/config'
import { setAsyncRouterComponents } from '@/packages/router/asyncRouter'

const { resetPath, whiteList } = routerSet


function hasUserinfo(to: any, from: any, next: any): void {
    const userinfo = store.getters['user/userinfo']
    if (Object.keys(userinfo).length) {
        next()
    } else {
        if (whiteList.some((e: string) => to.path.indexOf(e) === 0)) { //过滤这些页面不需要调用用户信息接口
            next()
        } else {
            apiUserUserinfo().then(async (res: any) => {
                store.commit('user/updateUserinfo', res)
                await setAsyncRouterComponents()
                next({...to})
            }).catch(() => {
                next(resetPath)
            })
        }
    }
}

const setupRouterGuard = (to: any, from: any, next: any) => {
    hasUserinfo(to, from, next)
}

export {
    setupRouterGuard,
}
