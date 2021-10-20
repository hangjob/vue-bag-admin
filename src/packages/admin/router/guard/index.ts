import store from '@/packages/admin/store/index'
import {getAllParentArr} from "@/utils/utils";
import {findChildrenDepth} from "@/utils/lodash";

const ignore = ["/login", "/403", "/404", "/500", "/502"];
const setupRouterGuard = (to: any, from: any, next: any) => {
    const {token, browser} = store.getters;
    if (token) {
        if (to.path.indexOf("/login") === 0) {
            return next("/");
        } else {
            const item = findChildrenDepth({key: 'router', value: to.path, node: 'children'}, store.getters.menuList);
            store.commit("addProcessList", {
                keepAlive: to.meta.keepAlive,
                title: to.meta.title,
                fullPath: to.fullPath,
                path: to.path,
                item: item
            });

            store.commit("updateCurrentRouter", {
                ...to
            })

            store.commit('updateTabViewsPath', getAllParentArr(store.getters.menuList, to.path))
        }
    } else {
        if (!ignore.some((e: string) => to.path.indexOf(e) === 0)) {
            return next("/login");
        }
    }
    next();
}

export {
    setupRouterGuard
}