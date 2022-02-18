import store from '@/packages/store'
import { findChildrenDepth, findContainingObject } from '@/packages/utils/lodash'
import { getAllParentArr } from '@/packages/utils/utils'

// 默认菜单
const defaultTabFix = () => {
    return findContainingObject({ key: 'tabFix', value: true }, store.state.app.menuList)
}


// 添加默认菜单的固定路由
const setDefaultRouterTabFix = () => {
    const ars = defaultTabFix()
    ars.forEach((item: any) => {
        store.commit('app/addProcessList', {
            ...item,
        })
    })
}


function setStoreProcessCurrent(to: any): void {
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


const setupBeforeStore = (to: any) => {
    setDefaultRouterTabFix()
    setStoreProcessCurrent(to)
}

export {
    setupBeforeStore,
    defaultTabFix,
}
