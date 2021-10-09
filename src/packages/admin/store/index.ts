import {createStore} from 'vuex'

const store = createStore({
    strict: true,
    state: {
        userinfo: {name: 1}
    }
})

export default store;