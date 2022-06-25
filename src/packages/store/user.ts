import { isArray } from '@/packages/utils/utils'

const user = {
    namespaced: true,
    state: {
        userinfo: {},
        roles: [],
    },
    getters: {
        roles: (state: any) => {
            return state.roles
        },
        userinfo: (state: any) => {
            return state.userinfo
        },
    },
    mutations: {
        updateUserinfo(state: any, data: any) {
            state.userinfo = data
        },
    },
    actions: {},
}

export default user
