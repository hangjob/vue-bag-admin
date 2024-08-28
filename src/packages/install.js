import 'default-passive-events' // 去掉chrome51版本后的事件捕获机制Passive Event Listeners 的警告
import '@/packages/style/tailwind.css'
import {createApp} from 'vue'
import "@/packages/style/tailwind.css"
import "@/packages/style/reset.css"
import "@/packages/style/style.less"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import App from '@/packages/App.vue'
import router from "@/packages/router/index.js";
import {createPinia} from "pinia"
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

Array.prototype.first = function () {
    return this.slice(0, 1)[0];
}

const app = createApp(App)
const pina = createPinia()
app.use(pina)
pina.use(piniaPluginPersistedstate)
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

export {
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
