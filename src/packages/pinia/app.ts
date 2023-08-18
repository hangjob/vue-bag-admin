import {defineStore} from "pinia"
import config from "@/packages/config"

const app = defineStore({
    id: "app",
    persist: {
        storage: window.localStorage,
        paths: ["userSetting"],
    },
    // 持久化存储插件其他配置
    state: () => {
        return {
            browser: {},
            configOptions: config,
            collapsed: false,
            mobile: false,
            userSetting: { // 主题设置
                layoutName: "ml",
                themeColor: "#519a73",
                themeName:null
            },
            userInfo: {},
            userState: false,
            allMenus: [], // 所有菜单
            treeMenus:[],
            paths: [],// 路由路径
            tabs: [],
            currentRouter: {}
        }
    }
})

export default app
