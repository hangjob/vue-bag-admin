import 'default-passive-events' // 去掉chrome51版本后的事件捕获机制Passive Event Listeners 的警告
import { createApp } from 'vue'
import "@/packages/style/tailwind.css"
import "@/packages/style/style.less"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import App from '@/packages/App.vue'
import {createPinia} from "pinia"
import Framework from "@/packages/framework/index.js";
import * as helpers from "@/packages/helpers"
import * as http from "@/packages/http/request.js"
import * as pinia from "pinia"
import * as radash from "radash"
import * as hooksPlus from "vue-hooks-plus"
import * as dayjs from "dayjs"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 持久化
import setupComponents from "@/packages/components/index.js"
import * as plugins from "@/app/plugins/index.js"
import useGlobalStore from "@/packages/pinia/global.js";
import * as router from "vue-router"
import eventEmitter from "@/packages/middleware"

// 中间件
const middleware = {
    eventEmitter
}

if (!Array.prototype.first) {
    Array.prototype.first = function () {
        return this.slice(0, 1)[0];
    }
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
    const app = createApp(elApp || App, options)
    const pina = createPinia()
    pina.use(piniaPluginPersistedstate)
    app.use(pina)
    app.use(setupComponents)
    app.config.globalProperties.$globalStore = window.$globalStore = useGlobalStore()
    const framework = new Framework({
        app,
        pina,
        pinia,
        helpers: {...helpers}, // 可以持续扩展
        radash,
        hooksPlus,
        dayjs,
        http,
        nprogress,
        middleware,
    });
    framework.use(plugins.useNaivePlugin)
    app.config.globalProperties.$global = window.$global = framework.ctx
    install = function () {
        install.app = app
        return {
            app,
            pina,
            pinia,
            helpers, // 可以持续扩展
            radash,
            hooksPlus,
            dayjs,
            framework,
            http,
            nprogress,
            plugins,
            router,
            middleware,
        }
    }
    return install()
}

export default install
export {
    pinia,
    router,
    dayjs,
    radash,
    hooksPlus,
    http,
}
