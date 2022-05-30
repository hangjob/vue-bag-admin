import {NavigationGuardNext, RouteLocationNormalized} from 'vue-router'
import {userUserinfo, webWebsiteFind} from '@/bag-web/service/app'
import appStore from '@/bag-web/store/app'
import userStore from "@/bag-web/store/user";

const setPinia = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const app = appStore()
    const user = userStore()
    try {
        const userinfo: any = user.userinfo
        if (!userinfo.id) {
            webWebsiteFind().then(async (res: any) => {
                app.appConfig = res
                userUserinfo().then((res) => {
                    user.userinfo = res
                })
            }).finally(() => {
                next()
            })
        } else {
            next()
        }
    } catch (err) {
        next()
    }
}


export {
    setPinia,
}
