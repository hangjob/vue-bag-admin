import { Component, createApp } from 'vue'
import App from './App.vue'
import store from '@/demo/store/index'
import install, { $optionsType } from '@/packages/install'
const app = createApp(App)

const file: Record<string, Component> = import.meta.globEager('/src/demo/views/**/*.vue')
console.log('%c 此页面需要后端服务，启动egg服务', 'color:#ffacac;')

const $options: $optionsType = {
    router: { file },
    store: {
        module: store,
    },
}
app.use(install, $options).mount('#app')
