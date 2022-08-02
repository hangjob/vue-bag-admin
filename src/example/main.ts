import 'default-passive-events'
import { Component, createApp } from 'vue'
import App from './App.vue'
import store from '@/example/store/index'
import install, { $optionsType } from '@/packages/install'
import paths from '@www/admin/router'
//@ts-ignore
// import install,{$optionsType} from '../../lib/index.es.js'
// import '../../lib/style.css'

const app = createApp(App)
const file: Record<string, Component> = import.meta.globEager('/src/example/views/**/*.vue')
const $options: $optionsType = {
    router: {
        file,
        paths:[
            {
                name: '首页',
                path: '/home',
                icon: '',
                shows: 1,
                id:1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/example/views/home/Index.vue',
            },
        ],
        defaults:false
        // replaceRouter: [{ name: 'login', path: '/login', component: () => import('@/example/views/login/Index.vue') }],
    },
    store: {
        module: store,
    },
    config: {
        httpNetwork: {
            retry: 3,
            requestTimeout:3000,
        },
    },
}
app.use(install, $options).mount('#app')
