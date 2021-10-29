import {defaultMenu} from "@/packages/admin/config/defaultMenu";
import {find, findContainingObject, remove} from "@/utils/lodash";
import {getBrowser} from '@/utils/utils'

// 默认菜单
const defaultTabFixs = () => {
    return findContainingObject({key: 'tabFix', value: true}, defaultMenu)
}

const app = {
    namespaced: true,
    state: {
        browser: {},
        menuList: defaultMenu,
        processList: [].concat(defaultTabFixs()), // tab切换栏
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
            state.list = [];
        },
        // 删除头部路由标签
        deleteProcessList(state: any, item: any) {
            state.processList = remove(item, state.processList)
        },
        // 选中的当前路由
        updateCurrentRouter(state: any, item: any) {
            // 激活当前的 processList 中的 active
            state.processList.map((obj: any) => {
                obj.active = obj.path === item.path;
            });
            state.currentRouter = item;
        },
        // 更新tab栏路由
        updateTabViewsPath(state: any, arr: Array<any>) {
            state.tabViewsPath = arr.reverse()
        },
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