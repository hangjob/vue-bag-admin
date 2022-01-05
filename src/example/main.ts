import {Component, createApp} from 'vue'
import App from './App.vue'
import store from '@/example/store/index';
import install, {$optionsType} from '@/packages/install'

const locas: Record<string, Component> = import.meta.globEager("/src/example/views/**/*.vue")
const $options: $optionsType = {
    routerView: {external: locas},
    store: {
        module: store
    }
}
const app = createApp(App)
app.use(install, $options).mount('#app');

