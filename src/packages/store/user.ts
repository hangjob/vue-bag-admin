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
        updateRoles(state: any, arr: Array<any>) {
            state.roles = arr
        },
        updateUserinfo(state: any, data: any) {
            state.userinfo = data
            if (isArray(data.roles)) {
                state.roles = data.roles
            } else {
                state.roles = data.roles.split(',')
            }
        },
    },
    actions: {},
}

export default user
