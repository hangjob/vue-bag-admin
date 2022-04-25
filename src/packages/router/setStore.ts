import {App} from 'vue'
import store from '@/packages/store'
import {defaultMenu, defaultPrjMenu} from '@/packages/config/defaultMenu'
import router from '@/packages/router/index'
import {findChildrenDepth, findContainingObject} from '@/packages/utils/lodash'
import {getAllParentArr} from '@/packages/utils/utils'

/**
 * defaults=true 设置默认菜单
 * @param app
 */
const setAppRouterStore = (app: App) => {
    const {defaults = true, file = [], paths = []} = app.config.globalProperties?.configAppRouter || {}
    if (defaults) {
        store.commit('app/updateMenuList', defaultMenu)
        store.commit('app/updateProjectMenu', defaultPrjMenu)
    }
    store.commit('app/updateAppRouter', {defaults, file, paths, router})
}

/**
 * 获取固定菜单
 */
const defaultTabFix = () => {
    return findContainingObject({key: 'tabFix', value: true}, store.state.app.menuList)
}


/**
 * 设置固定菜单store
 */
const setDefaultRouterTabFix = () => {
    const ars = defaultTabFix()
    ars.forEach((item: any) => {
        store.commit('app/addProcessList', item)
    })
}

/**
 * 设置当前选中菜单保存信息
 * @param to
 */
const setStoreProcessCurrent = (to: any) => {
    const item: any = findChildrenDepth({
        key: 'path',
        value: to.path,
        node: 'children',
    }, store.getters['app/menuList'])
    if (item) {
        store.commit('app/addProcessList', item)
    }
    store.commit('app/updateCurrentRouter', to)
    const arr = getAllParentArr(store.getters['app/menuList'], to.path)
    arr && store.commit('app/updateTabViewsPath', arr)
}


export {
    setAppRouterStore,
    defaultTabFix,
    setDefaultRouterTabFix,
    setStoreProcessCurrent,
}
