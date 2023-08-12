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
            collapsed: false,
            mobile: false,
            userSetting: {
                layoutName: "ml",
                themeColor: "#519a73"
            },
        }
    }
})

export default app
