import type {App} from "vue"
import {readonly} from "vue"
import mitt from "mitt"
import {merge} from "lodash"
import "@/packages/style/style.less"
import setupGlobal from "@/packages/global"
import setupPinia from "@/packages/pinia"
import config from "@/packages/config"


const menus = [
    {
        "id": 100,
        "title": "首页",
        "icon": "HomeOutlined",
        "path": "/home",
        "pid": 0,
        "file": "/view/home/Index.vue",
    }
]
const install = (app: App, options?: any) => {
    const configOptions = merge(config, {menus}, options)
    console.log(configOptions)
    app.config.globalProperties["configOptions"] = configOptions
    app.provide("configOptions", readonly(configOptions))
    app.provide("$mitt", mitt)
    setupPinia(app)
    setupGlobal()
}

export default install
