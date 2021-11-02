import type {App} from 'vue';
import {createStore} from 'vuex'
import user from './user'
import app from './app'


const store: any = createStore({
    modules: {
        user,
        app
    }
})


const setupStore = (app: App) => {
    app.use(store)
}

export {
    setupStore
}
export default store;