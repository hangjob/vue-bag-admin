import setupInit from '@/packages/base'
import mitt from 'mitt'
import * as $axios from '@/packages/http/request'
import { handleError } from '@/packages/debug'
import { createApp } from 'vue'
import App from './App.vue'
import { $optionsType } from './install'

class Framework {
    constructor($options?: $optionsType) {
        const app = createApp(App)
        app.config.globalProperties.$plugin = $options
        app.provide('$mitt', mitt())
        handleError(app)
        setupInit(app)
        app.mount('#app')
    }
}


export default Framework

export {
    $axios,
}
