import { defineStore } from 'pinia'
import { browser } from 'pm-utils'
import { find, findContainingObject } from '@/packages/utils/lodash'

const app = defineStore({
    id: 'app',
    state: () => {
        return {
            configApp: {
                httpNetwork: {
                    whiteList: [],
                    resetPath: '',
                },
                themeConfig: { floatingMenu: false, tabStyle: 1 },
                webSite: { title: '', subhead: '' },
            },
            configAppRouter: <any>{ paths: [], file: {} },
            configAppStore: {},
            configAppComps: {},
            configAppApis: {},
            httpSourceMenus: <Array<any>>[], // http 菜单源数据
            sourceMenus: <Array<any>>[], // http + 本地 菜单源数据
            menus: <Array<any>>[], // 菜单
            prjMenu: [], // 项目切换菜单
            tabs: <Array<any>>[], // tab切换栏
            tabPaths: [], // 路由 路径
            currentRouter: <any>{}, // 当前路由信息
            browser: { ...browser.browserInfo() }, // 浏览器信息
            bagConfig: {
                collapsed: false,
            },
        }
    },
    actions: {
        updataTabs(item) {
            if (!find({ key: 'path', value: item.path }, this.tabs)) {
                this.tabs.push(item)
            }
        },
        // 更新 tab切换栏 默认固定菜单 一开始就显示
        defaultTabFix() {
            const ars = findContainingObject({ key: 'tabFix', value: true }, this.sourceMenus)
            ars.forEach((item) => {
                this.updataTabs(item)
            })
        }
    },
})

export default app
