import {NavigationGuardNext, RouteLocationNormalized} from 'vue-router'
import {userUserinfo, webWebsiteFind} from '@/bag-web/service/app'
import appStore from '@/bag-web/store/app'
import userStore from "@/bag-web/store/user";

const setPinia = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const app = appStore()
    const user = userStore()
    try {
        const userinfo: any = user.userinfo
        webWebsiteFind().then(async (res: any) => {
            app.webSettings = res
            if (!userinfo.id) {
                userUserinfo().then((res) => {
                    user.userinfo = res;
                    next();
                }).catch(() => {
                    next();
                })
            } else {
                next()
            }
        })
    } catch (err) {
        next()
    }
}


export {
    setPinia,
}
