import {createStore} from 'vuex'
import user from './user'
import app from './app'

const store:any = createStore({
    modules: {
        user,
        app
    }
})

export default store;