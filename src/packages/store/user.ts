import {isArray} from '@/packages/utils/utils'

const user = {
    namespaced: true,
    state: {
        userinfo: {},
        roles: [],
        isSuperadmin: false
    },
    getters: {
        roles: (state: any) => {
            return state.roles
        },
        userinfo: (state: any) => {
            return state.userinfo
        },
        isSuperadmin: (state: any) => {
            return state.isSuperadmin
        }
    },
    mutations: {
        updateUserinfo(state: any, data: any) {
            state.userinfo = data
            state.isSuperadmin = data.id === 1
        },
    },
    actions: {},
}

export default user
