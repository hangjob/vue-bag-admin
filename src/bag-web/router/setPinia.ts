import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { webWebsiteFind } from '@/bag-web/service/app'
import appStore from '@/bag-web/store/app'

const setAppConfig = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const store = appStore()
    try {
        webWebsiteFind().then((res) => {
            store.appConfig = res
        }).finally(() => {
            next()
        })
    } catch (err) {
        next()
    }
}

export {
    setAppConfig,
}
