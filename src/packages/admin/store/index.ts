import {createStore} from 'vuex'
import {defaultMenu} from "@/packages/admin/config/defaultMenu";
import {find, remove} from '@/utils/lodash';

const store = createStore({
    strict: true,
    state: {
        userinfo: {name: 1},
        menuList: defaultMenu,
        processList: [], // tab切换栏
        currentRouter: {}, // 当前路由数据
        tabViewsPath: [] // 访问路经
    },
    // 定义getters 好处可以过滤数据
    getters: {
        menuList: (state) => {
            return state.menuList;
        },
        processList: (state) => {
            return state.processList;
        },
        currentRouter: (state) => {
            return state.currentRouter;
        },
        tabViewsPath: (state) => {
            return state.tabViewsPath;
        }
    },
    actions: {},
    mutations: {
        // 添加头部路由标签
        addProcessList(state: any, item: any) {
            if (!find({key: 'fullPath', value: item.fullPath}, state.processList)) {
                state.processList.push(item);
            }
        },
        // 删除头部路由标签
        deleteProcessList(state: any, item: any) {
            state.processList = remove(item, state.processList)
        },
        // 更新当前路由
        updataCurrentRouter(state: any, item: object) {
            state.currentRouter = item;
        },
        updateTabViewsPath(state: any, arr: Array<any>) {
            state.tabViewsPath = arr.reverse();
        }
    }
})

export default store;