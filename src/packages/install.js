import 'default-passive-events' // 去掉chrome51版本后的事件捕获机制Passive Event Listeners 的警告
import '@/packages/style/tailwind.css'
import "@/packages/style/tailwind.css"
import "@/packages/style/style.less"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import App from '@/packages/App.vue'
import {createPinia} from "pinia"
import * as pinia from "pinia"
import Framework from "@/packages/framework/index.js";
import * as helpers from "@/packages/helpers"
import * as http from "@/packages/http/request.js"
import * as radash from "radash"
import * as hooksPlus from "vue-hooks-plus"
import * as dayjs from "dayjs"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 持久化
import setupComponents from "@/packages/components/index.js"
import * as plugins from "@/app/plugins/index.js"
import useGlobalStore from "@/packages/pinia/global.js";
import * as router from "vue-router"

Array.prototype.first = function () {
    return this.slice(0, 1)[0];
}


/**
 * 这里利用惰性函数来实现单例模式
 * 如果已经安装了，则返回已经安装的app
 * @param elApp
 * @param options
 * @returns {*}
 */
function install(elApp = null, options = {}) {
    if (install.app) {
        return install()
    }
    const app = createApp(elApp || App, {
        ...options,
    })
    const pina = createPinia()
    app.use(pina)
    pina.use(piniaPluginPersistedstate)
    for (const pinaKey in options.pinaPlugin) {
        pina.use(options.pinaPlugin[pinaKey])
    }
    app.use(setupComponents)
    app.config.globalProperties.$globalStore = window.$globalStore = useGlobalStore()
    const framework = new Framework({
        app,
        pina,
        helpers: {...helpers}, // 可以持续扩展
        radash,
        hooksPlus,
        dayjs,
        http,
        nprogress,
    });
    framework.use(plugins.useNaivePlugin)
    app.config.globalProperties.$global = window.$global = framework.ctx
    install = function () {
        install.app = app
        return {
            app,
            pina,
            helpers, // 可以持续扩展
            radash,
            hooksPlus,
            dayjs,
            framework,
            http,
            nprogress,
            plugins,
            router
        }
    }
    return install()
}

export default install

export {
    pinia
}
