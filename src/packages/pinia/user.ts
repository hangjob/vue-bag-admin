import { defineStore } from 'pinia'
import { apiSiteIpInfo, apiUserUserinfo } from '@/packages/service/user'

const user = defineStore({
    id: 'user',
    state: () => {
        return {
            userInfo: <any>{},
            siteInfo: <any>{},
        }
    },
    actions: {
        async getUserInfo() {
            this.userInfo = await apiUserUserinfo()
        },
        async getSiteIpInfo() {
            this.siteInfo = await apiSiteIpInfo()
        },
    },
})

export default user
