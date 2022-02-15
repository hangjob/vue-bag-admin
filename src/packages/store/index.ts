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


const setupStore = (app: App) => {
    setStore(app, store)
    app.use(store)
}

export {
    setupStore,
}
export default store
