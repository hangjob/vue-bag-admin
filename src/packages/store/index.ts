import type { App } from 'vue'
import { createStore } from 'vuex'
import user from './user'
import app from './app'
import { setStore } from '@/packages/store/store'
import { cloneDeep } from 'lodash'

const options = {
    modules: {
        user,
        app,
    },
}

const store: any = createStore({
    ...cloneDeep(options),
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

const resetStore = () => {
    store.replaceState(createStore(options).state)
}

export {
    setupStore,
    resetStore,
}


export default store
