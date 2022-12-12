import { defineStore } from 'pinia'
import { userUserinfo, webWebsiteFind } from '@/bag-web/service/app'

const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userInfo: {}, // 用户信息
            siteInfo: {}, // 站点信息
        }
    },
    actions: {
        async getUserInfo() {
            this.userInfo = await userUserinfo()
        },
        async getSiteIpInfo() {
            this.siteInfo = await webWebsiteFind()
        },
    },
})

export default userStore
