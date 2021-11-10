import {defaultMenu} from "@/packages/config/defaultMenu";
import {find, remove} from "@/packages/utils/lodash";
import {getBrowser} from '@/packages/utils/utils'
import {defaultTabFix} from "@/packages/router/beforeStore";

const app = {
    namespaced: true,
    state: {
        browser: {},
        menuList: defaultMenu,
        processList: [], // tab切换栏
        currentRouter: {}, // 当前路由数据
        tabViewsPath: [], // 访问路经
        collapsed: false // 菜单是否折叠
    },
    // 定义getters 好处可以过滤数据
    getters: {
        menuList: (state: any) => {
            return state.menuList;
        },
        processList: (state: any) => {
            return state.processList
        },
        currentRouter: (state: any) => {
            return state.currentRouter;
        },
        tabViewsPath: (state: any) => {
            return state.tabViewsPath;
        },
        getBrowser: (state: any) => {
            return state.browser;
        }
    },
    mutations: {
        // 添加头部路由标签
        addProcessList(state: any, item: any) {
            if (!find({key: 'path', value: item.path}, state.processList)) {
                state.processList.push(item);
            }
        },
        // 使用splice元素
        delProcessList(state: any, idx: number) {
            state.processList.splice(idx, 1)
        },
        // 重置指定菜单
        setProcessList(state: any, arr: Array<any>) {
            state.processList = arr;
        },
        // 重置菜单
        resetProcessList(state: any) {
            state.processList = defaultTabFix()
        },
        // 选中的当前路由
        updateCurrentRouter(state: any, item: any) {
            // 激活当前的 processList 中的 active
            state.processList.map((obj: any) => {
                if (obj.path === item.path) {
                    obj.active = true;
                    state.currentRouter = {...obj, ...item};
                } else {
                    obj.active = false;
                }
            });
        },
        // 更新tab栏路由
        updateTabViewsPath(state: any, arr: Array<any>) {
            state.tabViewsPath = arr.reverse()
        },
        // 更新折叠
        updateCollapsed(state: any, bol: boolean) {
            state.collapsed = bol
        },
        // 更新当前设备信息
        updateBrowser(state: any) {
            state.browser = getBrowser()
            if (state.browser.isMobile || state.browser.isMini) {
                state.collapsed = true;
            }
        }
    }
}


export default app;