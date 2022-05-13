import { defineStore } from 'pinia'

const appStore = defineStore({
    id: 'app',
    state: () => {
        return {
            // 网络配置
            httpNetwork: {},
            // 网站配置
            appConfig: {
                logo: '',
                slogan: '',
            },
        }
    },
    actions: {
        // 更新网络配置
        updateHttpNetwork(data: any) {
            this.httpNetwork = data
        },
        // 更新网站配置
        updateAppConfig(data: any) {
            this.appConfig = data
        },
    },
})

export default appStore
