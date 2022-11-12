import { defineStore } from 'pinia'

const app = defineStore({
    id: 'app',
    state: () => {
        return {
            userInfo: {},
            siteInfo: {},
            configApp: {
                httpNetwork: {
                    whiteList: [],
                },
            },
            configAppRouter: {},
            configAppStore: {},
            configAppComps: {},
            configAppApis: {},
        }
    },
})

export default app
