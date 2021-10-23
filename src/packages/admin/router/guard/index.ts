import store from '@/packages/admin/store/index'
import {getAllParentArr} from "@/utils/utils";
import {findChildrenDepth} from "@/utils/lodash";
import {apiUserinfo} from "@/packages/admin/serve/user";

const ignore = ["/login", "/403", "/404", "/500", "/502"];
let userinfo: any = {};

// 处理store数据
function setStoreData(to: any, from: any, next: any) {
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

    store.commit('user/updateUserinfo', userinfo)
    store.commit('user/updateRoles', userinfo.roles)
}

// 处理路由跳转
function disposeRouter(to: any, from: any, next: any) {
    const token = store.getters['user/token'];
    if (token) {
        if (to.path.indexOf("/login") === 0) {
            return next("/");
        } else {
            setStoreData(to, from, next)
        }
    } else {
        if (!ignore.some((e: string) => to.path.indexOf(e) === 0)) {
            return next("/login");
        }
    }
}

const setupRouterGuard = (to: any, from: any, next: any) => {
    apiUserinfo().then((res) => {
        userinfo = res
        disposeRouter(to, from, next)
        next();
    })

}

export {
    setupRouterGuard
}