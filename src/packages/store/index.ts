import type {App} from 'vue';
import {createStore} from 'vuex'
import user from './user'
import app from './app'
import {setAddStore} from "@/packages/store/addStore";


const store: any = createStore({
    modules: {
        user,
        app
    }
})


const setupStore = (app: App) => {
    setAddStore(app, store)
    app.use(store)
}

export {
    setupStore
}
export default store;
