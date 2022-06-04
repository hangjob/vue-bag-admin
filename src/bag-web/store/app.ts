import {defineStore} from 'pinia'

const appStore = defineStore({
    id: 'app',
    state: () => {
        return {
            // 网络配置
            httpNetwork: {},
            // 网站配置
            webSettings: {
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
        updateAppWebSettings(data: any) {
            this.webSettings = data
        },
    },
})

export default appStore
