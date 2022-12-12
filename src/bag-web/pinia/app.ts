import {defineStore} from 'pinia'

const appStore = defineStore({
    id: 'app',
    state: () => {
        return {
            // 网络配置
            httpNetwork: {},
            // 网站配置
            siteInfo:<any> {
                logo: '',
                slogan: '',
            },
            configApp:{
                webSite:<any>{},
                httpNetwork:<any>{}
            },
            configAppRouter:<any>{}
        }
    },
    actions: {

    },
})

export default appStore
