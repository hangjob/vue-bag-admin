import { App } from 'vue'
import { createPinia } from 'pinia' // https://pinia.web3doc.top/
import appPinia from '@/bag-web/pinia/app'


const initPinia = ((app: App) => {
    const { httpNetwork, configAppRouter } = app.config.globalProperties.configApp
    const appStore = appPinia()
    appStore.httpNetwork = httpNetwork
    appStore.configAppRouter = configAppRouter
})

const setupStore = (app: App) => {
    app.use(createPinia())
    initPinia(app)
}


export {
    setupStore,
}
