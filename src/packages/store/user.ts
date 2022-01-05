const user = {
    namespaced: true,
    state: {
        userinfo: {},
        roles: []
    },
    getters: {
        roles: (state: any) => {
            return state.roles;
        },
        userinfo: (state: any) => {
            return state.userinfo;
        },
    },
    mutations: {
        updateRoles(state: any, arr: Array<any>) {
            state.roles = arr;
        },
        updateUserinfo(state: any, data: any) {
            state.userinfo = data;
            state.roles = data.roles;
        }
    },
    actions: {},
}

export default user;
