import { defineStore } from 'pinia'
import { browser } from 'pm-utils'

const app = defineStore({
    id: 'app',
    state: () => {
        return {
            configApp: {
                httpNetwork: {
                    whiteList: [],
                    resetPath: '',
                },
                themeConfig: {},
                webSite: { title: '' },
            },
            configAppRouter: <any>{ paths: [], file: {} },
            configAppStore: {},
            configAppComps: {},
            configAppApis: {},
            menus: [], // 菜单
            prjMenu: [], // 项目切换菜单
            routesTabs: [], // tab切换栏
            tabs: [], // tab切换栏
            tabPaths: [], // 路由 路径
            currentRouter: {}, // 当前路由信息
            browser: { ...browser.browserInfo() }, // 浏览器信息
        }
    },

})

export default app
