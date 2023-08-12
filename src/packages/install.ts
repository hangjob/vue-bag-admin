import type { App } from "vue"
import mitt from "mitt"
import "@/packages/style/style.less"
import setupGlobal from "@/packages/global"
import setupPinia from "@/packages/pinia"
const install = (app:App)=>{
    app.provide("$mitt", mitt)
    setupPinia(app)
    setupGlobal()
}

export default install
