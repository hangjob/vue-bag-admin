import setupInit from '@/packages/base'
import mitt from 'mitt'
import * as $axios from '@/packages/http/request'
import { handleError } from '@/packages/debug'
import { $optionsType } from './install'

class Framework {
    constructor(app: any, $options?: $optionsType) {
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
