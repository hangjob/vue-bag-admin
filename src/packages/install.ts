import type {App} from "vue"
import {readonly} from "vue"
import mitt from "mitt"
import {merge} from "lodash"
import "@/packages/style/style.less"
import setupGlobal from "@/packages/global"
import setupPinia from "@/packages/pinia"
import config from "@/packages/config"

const install = (app: App, options: any) => {
    const configOptions = merge(config, options)
    app.config.globalProperties = configOptions
    app.provide("configOptions", readonly(configOptions))
    app.provide("$mitt", mitt)
    setupPinia(app)
    setupGlobal()
}

export default install
