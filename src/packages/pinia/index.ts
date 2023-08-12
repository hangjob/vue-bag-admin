import { App } from "vue"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
const pinia = createPinia()
const setupPinia =(app: App) => {
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
}


export default setupPinia
