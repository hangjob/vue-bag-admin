import type {App, createApp} from 'vue'
import setupInit from '@/packages/base'
import mitt from 'mitt'
import * as $axios from '@/packages/http/request'
import {handleError} from '@/packages/debug'
import {Component, readonly} from 'vue'
import {themeConfig, httpNetwork, webSite} from '@/packages/config'
import setupGlobal from '@/common/global'
import curdTableHock, {initTableHock} from '@/packages/hook/table'

/**
 * router: {paths:[菜单],file:[菜单路由文件]},defaults:true,开启默认路由
 *
 * store:{module:{store对象},namespace:’命名空间，默认web‘}
 *
 * priest:{list:[切换项目列表]}
 *
 * config:{预留参数配置}
 */
interface $optionsType {
    router?: {
        file: Record<string, Component>, // 外接路由文件所在路径 import xxx from 'home.vue'
        paths?: Array<any>,
        defaults?: Boolean,
        replaceRouter?: Array<any> // 可以替换内部路由
    },
    store?: {
        module: object,
    },
    comps?: {
        ThemeBar?: any // 接受一个组件
    },
    config?: {
        themeConfig?: object,
        httpNetwork?: object,
        webSite?: {
            title?: string,
            subhead?: string,
            logoImage?: string,
        }
    },
    apis?: {}
}

const install = (app: App, options?: $optionsType) => {
    const _options = {
        configAppRouter: {
            file: options?.router?.file || [],
            paths: options?.router?.paths || [],
            defaults: options?.router?.defaults,
            replaceRouter: options?.router?.replaceRouter || [],
        },
        configAppStore: {
            module: options?.store?.module || {},
        },
        configAppComps: {
            ThemeBar: options?.comps?.ThemeBar,
        },
        configApp: {
            themeConfig: {...themeConfig, ...options?.config?.themeConfig},
            httpNetwork: {...httpNetwork, ...options?.config?.httpNetwork},
            webSite: {...webSite, ...options?.config?.webSite},
        },
        configAppApis: {
            ...options?.apis
        }
    }
    app.config.globalProperties = _options
    app.provide('$configAppOptions', readonly(_options))
    app.provide('$mitt', mitt())
    app.use(setupGlobal)
    handleError(app)
    setupInit(app)
}

export default install

export {
    $optionsType,
    $axios,
    curdTableHock,
    initTableHock,
}
