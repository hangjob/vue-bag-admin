import type {App} from 'vue';
import router from '@/packages/router'
import setupInit from '@/packages/base/index'
import jquery from "jquery"
import mitt from "mitt";

interface $pluginType {
    router?: {
        views: Array<any>, // 菜单
        external?: any, // 外接路由文件所在路径
    },
    store?: {
        module: object,
        namespace ?: string
    }
}

const install = async (app: App, $plugin?: any) => {
    app.config.globalProperties.mitter = mitt();
    app.config.globalProperties.$plugin = $plugin;
    app.provide("AppGlobal", {version: '0.0.1'}); // 具体请看官网 [https://v3.cn.vuejs.org/api/application-api.html#provide]
    setupInit(app)
    router.isReady().then(() => {
        app.mount('#app')
    })
    window.$ = jquery;
    window.__app__ = app;
}

export default install;
export {
    $pluginType
}
