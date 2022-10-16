const app = {
    namespaced: true,
    state: {
        column: [
            {name: '1'}
        ]
    },
    getters: {
        column: (state: any) => {
            return state.column;
        },
    },
    mutations: {
        updateColumn(state: any, data: any) {
            state.column = data
        }
    }

}

export default app;
