import {defineStore} from "pinia"

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
            config: {
                whiteList: [],
                resetPath: "",
                menus: []
            },
            collapsed: false,
            mobile: false,
            userSetting: { // 主题设置
                layoutName: "ml",
                themeColor: "#519a73"
            },
            userInfo: {},
            userState: false
        }
    }
})

export default app
