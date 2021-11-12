const app = {
    namespaced: true,
    state: {
        config: {
            name: 'vite-vue3-typescript-admin'
        }
    },
    getters: {
        config: (state: any) => {
            return state.config;
        },
    },
    mutations: {
        updateConfig(state: any) {
            state.config.name = '测试'
        }
    }

}

export default app;