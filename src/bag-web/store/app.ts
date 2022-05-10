import { defineStore } from 'pinia'

const appStore = defineStore({
    id: 'app',
    state: () => {
        return {
            httpNetwork: {}, // 网络配置
        }
    },
    actions: {
        // 更新网络配置
        updateHttpNetwork(data: any) {
            this.httpNetwork = data
        },
    },
})

export default appStore
