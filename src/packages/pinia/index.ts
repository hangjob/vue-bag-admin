import {App} from "vue"
import {createPinia} from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import appPinia from "@/packages/pinia/app.ts"
import {updateHtmlGray, updateHtmlWeak} from "@/packages/global"

const pinia = createPinia()

function initStore(app: App) {
    const appStore = appPinia()
    const {configOptions} = app.config.globalProperties
    appStore.configOptions = configOptions
    updateHtmlGray()
    updateHtmlWeak()
}

const setupPinia = (app: App) => {
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
    initStore(app)
}


export default setupPinia
