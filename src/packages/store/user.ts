import locaStore from '@/packages/utils/persistence'

const user = {
    namespaced: true,
    state: {
        userinfo: {},
        roles: [],
        token: locaStore.get('token'),
    },
    getters: {
        token: (state: any) => {
            return state.token;
        },
        roles: (state: any) => {
            return state.roles;
        },
        userinfo: (state: any) => {
            return state.userinfo;
        },
    },
    mutations: {
        updateToken(state: any) {
            state.token = locaStore.get('token');
        },
        updateRoles(state: any, arr: Array<any>) {
            state.roles = arr;
        },
        updateUserinfo(state: any, data: any) {
            state.userinfo = data;
        }
    },
    actions: {},
}

export default user;