import {defineStore} from 'pinia'

const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userinfo: {},
        }
    },
})

export default userStore
