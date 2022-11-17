import { App } from 'vue'
import { createPinia } from 'pinia'
import appPinia from '@/packages/pinia/app'

const pinia = createPinia()
/**
 * 初始化store数据
 * @param app
 */
const initStore = (app: App) => {
    const appStore = appPinia()
    const { themeConfig, httpNetwork, webSite } = app.config.globalProperties.configApp
    const { configAppRouter, configAppStore, configAppComps, configAppApis } = app.config.globalProperties
    appStore.configApp = {
        themeConfig,
        httpNetwork,
        webSite,
    }
    appStore.configAppRouter = configAppRouter
    appStore.configAppStore = configAppStore
    appStore.configAppComps = configAppComps
    appStore.configAppApis = configAppApis
}


/**
 * 注册Pinia
 * @param app
 */
const setupPinia = (app: App) => {
    app.use(pinia)
    initStore(app)
}


export default setupPinia
