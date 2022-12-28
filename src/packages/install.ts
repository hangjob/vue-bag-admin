import type { App } from 'vue'
import setupInit from '@/packages/base'
import * as $axios from '@/packages/http/request'
import { handleError } from '@/packages/debug'
import { Component, readonly } from 'vue'
import { themeConfig, httpNetwork, webSite } from '@/packages/config'
import setupGlobal from '@/common/global'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'
import mitt from 'mitt'
import { merge } from 'lodash'
import app from '@/packages/pinia/app'
import user from '@/packages/pinia/user'

const $pinia = {
    app,
    user,
}

/**
 * router: {paths:[菜单],file:[菜单路由文件]},defaults:true,开启默认路由
 *
 * store:{module:{store对象},namespace:’命名空间，默认web‘}
 *
 * priest:{list:[切换项目列表]}
 *
 * config:{themeConfig:{主题配置},httpNetwork:{网络配置},webSite:{网站配置}}
 *
 * apis:{}
 */
interface $optionsType {
    router?: {
        file: Record<string, Component>, // 外接路由文件所在路径 import xxx from 'home.vue'
        paths?: Array<any>, // 本地路由
        replaceRouter?: Array<any> // 可以替换内部路由
        supFilter?: Array<any>
    },
    store?: {
        module: object,
    },
    comps?: {
        bagHeaderItem?: any // 接受一个组件
        bagFooter?: any
        bagHeaderUser?: any
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
    const _options: any = {
        configAppRouter: {
            file: options?.router?.file || [],
            paths: options?.router?.paths || [],
            replaceRouter: options?.router?.replaceRouter || [],
            supFilter: options?.router?.supFilter || ['98BA9API9VEE9LHXBQ4HUD'],
        },
        configAppStore: {
            module: options?.store?.module || {},
        },
        configAppComps: {
            bagHeaderItem: options?.comps?.bagHeaderItem,
            bagFooter: options?.comps?.bagFooter,
            bagHeaderUser: options?.comps?.bagHeaderUser,
        },
        configApp: {
            themeConfig: merge(themeConfig, options?.config?.themeConfig),
            httpNetwork: merge(httpNetwork, options?.config?.httpNetwork),
            webSite: merge(webSite, options?.config?.webSite),
        },
        configAppApis: {
            ...options?.apis,
        },
    }
    app.config.globalProperties = _options
    app.provide('$configAppOptions', readonly(_options))
    app.use(setupGlobal)
    app.provide('$mitt', mitt())
    // handleError(app)
    setupInit(app)
}

export default install

export {
    $optionsType,
    $axios,
    curdTableHock,
    initTableHock,
    createTableHock,
    initCurd,
    $pinia,
}
