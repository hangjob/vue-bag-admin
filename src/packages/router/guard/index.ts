import store from '@/packages/store'
import {getAllParentArr} from "@/packages/utils/utils";
import {findChildrenDepth} from "@/packages/utils/lodash";
import {apiUserinfo} from "@/packages/serve/user";
import {NProgress} from '@/packages/plugin/nprogress'

const ignore = ["/login", "/403", "/404", "/500", "/502"];
let userinfo: any = {};

// 处理app-store数据
function setAppStoreData(to: any, from: any, next: any): void {
    const item: any = findChildrenDepth({
        key: 'path',
        value: to.path,
        node: 'children'
    }, store.getters['app/menuList']);

    store.commit("app/addProcessList", {
        keepAlive: to.meta.keepAlive,
        fullPath: to.fullPath,
        path: to.path,
        ...item
    });

    store.commit("app/updateCurrentRouter", {
        ...to
    })

    store.commit('app/updateTabViewsPath', getAllParentArr(store.getters['app/menuList'], to.path))
}

// 处理user-store数据
function setUserStoreData(to: any, from: any, next: any, res: any): void {
    store.commit('user/updateUserinfo', res)
    store.commit('user/updateRoles', res.roles)
}

// 处理路由跳转
function disposeRouter(to: any, from: any, next: any): void {
    const token = store.getters['user/token'];
    if (token) {
        if (to.path.indexOf("/login") === 0) {
            return next("/");
        } else {
            setAppStoreData(to, from, next)
        }
    } else {
        if (!ignore.some((e: string) => to.path.indexOf(e) === 0)) {
            return next("/login");
        }
    }
}

const setupRouterGuard = (to: any, from: any, next: any) => {
    NProgress.start();
    apiUserinfo().then((res) => {
        disposeRouter(to, from, next)
        setUserStoreData(to, from, next, res)
        NProgress.done();
        next();
    })

}

export {
    setupRouterGuard
}