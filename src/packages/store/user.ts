interface keyArray {
    [v: string]: any;
}

const user = {
    namespaced: true,
    state: {
        userinfo: {},
        roles: [],
        token: '1',
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
        updateToken(state: any, str: string) {
            state.token = str;
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