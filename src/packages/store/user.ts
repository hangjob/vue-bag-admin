import locaStore from '@/packages/utils/persistence'


function setLocaStoreToken(data: any) {
    locaStore.set('token', data.token, data.expiredTime); // 续期token
}

const user = {
    namespaced: true,
    state: {
        userinfo: {},
        roles: [],
        token: locaStore.get('token'),
    },
    getters: {
        token: () => {
            return locaStore.get('token');
        },
        roles: (state: any) => {
            return state.roles;
        },
        userinfo: (state: any) => {
            return state.userinfo;
        },
    },
    mutations: {
        updateToken(state: any, data: any) {
            setLocaStoreToken(data)
        },
        updateRoles(state: any, arr: Array<any>) {
            state.roles = arr;
        },
        updateUserinfo(state: any, data: any) {
            state.userinfo = data;
            state.roles = data.roles;
            setLocaStoreToken(data)
        }
    },
    actions: {},
}

export default user;
