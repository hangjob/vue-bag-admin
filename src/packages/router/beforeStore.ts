import store from '@/packages/store'
import {findContainingObject} from "@/packages/utils/lodash";

// 默认菜单
const defaultTabFix = () => {
    return findContainingObject({key: 'tabFix', value: true}, store.state.app.menuList)
}


// 添加默认菜单的固定路由
const setDefaultRouterTabFix = () => {
    const ars = defaultTabFix();
    ars.forEach((item: any) => {
        store.commit("app/addProcessList", {
            ...item
        });
    })
}


const setupBeforeStore = () => {
    setDefaultRouterTabFix()
}

export {
    setupBeforeStore,
    defaultTabFix
}