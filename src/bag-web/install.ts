import type { App } from 'vue'
import mitt from 'mitt'
import Equal from 'equal-vue'
import '@/bag-web/theme/root.css'
import 'equal-vue/dist/style.css'
// @ts-ignore
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { readonly } from 'vue'
import { setupGlobComponents } from '@/bag-web/components'
import { setupStore } from '@/bag-web/store'

interface $optionsType {
    router?: {
        routes?: Array<any>,
    },
}

const install = (app: App, options?: $optionsType) => {
    const _options = {
        configAppRouter: {
            file: options?.router?.routes || [],
        },
    }
    console.log('_options', _options)
    app.config.globalProperties = _options
    app.provide('$configAppOptions', readonly(_options))
    app.provide('$mitt', mitt())
    app.use(Equal)
    app.use(Vuesax)
    app.use(setupGlobComponents)
    app.use(setupStore)
    app.mount('#app')
}

export default install
