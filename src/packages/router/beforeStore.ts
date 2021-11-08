import store from '@/packages/store'
import {findContainingObject} from "@/packages/utils/lodash";
import {defaultMenu} from "@/packages/config/defaultMenu";

// 默认菜单
const defaultTabFix = () => {
    return findContainingObject({key: 'tabFix', value: true}, defaultMenu)
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