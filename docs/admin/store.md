```ts
const app = {
    namespaced: true,
    state: {
        config: {
            name: '羊先生'
        }
    },
    getters: {
        config: (state: any) => {
            return state.config;
        },
    },
    mutations: {
        updateConfig(state: any,data) {
            state.config.name = data
        }
    }

}
const $options: $optionsType = {
    store: {
        module: {
            app
        },
    },
}
```
### module
>Vuex带命名空间
```ts
// 使用
store.commit('app/updateConfig', 'bag-admin')
```
