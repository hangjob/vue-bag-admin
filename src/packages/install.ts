import type {App} from "vue"
import {readonly} from "vue"
import mitt, {Emitter} from "mitt"
import mergeWith from "lodash/mergeWith.js"
import cloneDeep from "lodash/mergeWith.js"
import isArray from "lodash/isArray.js"
import "@/packages/style/style.less"

import setupGlobal from "@/packages/global"
import setupPinia from "@/packages/pinia"
import config from "@/packages/config"
import setupIcons from "@/packages/config/icon.ts"
import {axios} from "@/packages/http/request.ts"
import router from "@/packages/router"
import setupComponents from "@/packages/components"
const emitter: Emitter<any> = mitt()

function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
        return objValue.concat(srcValue)
    }
}

const install = (app: App, options?: any) => {
    const configOptions = mergeWith(cloneDeep(config), cloneDeep(options), customizer) // 合并值
    app.config.globalProperties["configOptions"] = configOptions
    app.provide("configOptions", readonly(configOptions))
    app.provide("$mitt", emitter)
    setupPinia(app)
    setupIcons(app)
    setupGlobal()
    setupComponents(app)
}

export default install
export {
    axios,
    router
}
