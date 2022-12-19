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
            // const btns = <any>[]
            // this.userInfo.rolesDetail.menus.forEach((item) => {
            //     if(item === '58'){
            //         btns.push({ mid: item, btn: [{ name: '数据导出', tag: 'create' }] })
            //     }
            //     if(item === '62'){
            //         btns.push({ mid: item, btn: [{ name: '编辑', tag: 'edit' },{ name: '新增1', tag: 'create' },{ name: '新增1', tag: 'create' }] })
            //     }
            // })
            // this.userInfo.rolesDetail.btns = btns;
        },
        async getSiteIpInfo() {
            this.siteInfo = await apiSiteIpInfo()
        },
    },
})

export default user
