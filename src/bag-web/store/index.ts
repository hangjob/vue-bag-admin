import { App } from 'vue'
import { createPinia } from 'pinia' // https://pinia.web3doc.top/
import appStore from '@/bag-web/store/app'


const initConfigStore = ((app: App) => {
    const { configApp } = app.config.globalProperties
    const store = appStore()
    store.updateHttpNetwork(configApp.httpNetwork)
})

const setupStore = (app: App) => {
    app.use(createPinia())
    initConfigStore(app)
}


export {
    setupStore,
}
