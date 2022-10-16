import { defineStore } from 'pinia'

const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            userinfo: {
                name: 'yxs',
            },
        }
    },
})

export default userStore
