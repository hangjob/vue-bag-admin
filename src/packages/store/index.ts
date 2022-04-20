import type { App } from 'vue'
import { createStore } from 'vuex'
import user from './user'
import app from './app'
import { setStore } from '@/packages/store/store'


const store: any = createStore({
    modules: {
        user,
        app,
    },
})

/**
 * 初始配置store
 * @param app
 */
const initConfigStore = (app: App) => {
    const { configApp } = app.config.globalProperties
    store.commit('app/updateThemeConfig', { isReset: true, ...configApp.themeConfig })
    store.commit('app/updateHttpNetwork', configApp.httpNetwork)
}

const setupStore = (app: App) => {
    setStore(app, store)
    initConfigStore(app)
    app.use(store)
}

export {
    setupStore,
}

export default store
