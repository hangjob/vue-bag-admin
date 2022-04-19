import 'default-passive-events'
import {Component, createApp} from 'vue'
import App from './App.vue'
import store from '@/example/store/index'
import install, {$optionsType} from '@/packages/install'

// import '../../mock/index'
//@ts-ignore
// import install,{$optionsType} from '../../lib/index.es.js'
// import '../../lib/style.css'

const app = createApp(App)
const file: Record<string, Component> = import.meta.globEager('/src/demo/views/**/*.vue')
const $options: $optionsType = {
    router: {
        file,
        // replaceRouter: [{ name: 'login', path: '/login', component: () => import('@/example/views/login/Index.vue') }],
    },
    store: {
        module: store,
    }
}
app.use(install, $options).mount('#app')
