import type { App } from 'vue'
import mitt from 'mitt'
import '@/bag-web/style/index.less'
import { readonly } from 'vue'
import { httpNetwork } from '@/packages/config'
import { post, get } from '@/bag-web/http/request'
import setupInit from '@/bag-web/base'

interface $optionsType {
    router?: {
        routes?: Array<any>,
    },
    config?: {
        httpNetwork?: object,
    }
}

const install = (app: App, options?: $optionsType) => {
    const _options: any = {
        configAppRouter: {
            routes: options?.router?.routes || [],
        },
        configApp: {
            httpNetwork: { ...httpNetwork, ...options?.config?.httpNetwork },
        },
    }
    app.config.globalProperties = _options
    app.provide('$configAppOptions', readonly(_options))
    app.provide('$mitt', mitt())
    setupInit(app)
}

export default install
export {
    $optionsType,
    post,
    get,
}
