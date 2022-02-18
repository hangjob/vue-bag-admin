import type { App } from 'vue'
import setupInit from '@/packages/base/index'
import mitt from 'mitt'
import * as $axios from '@/packages/http/request'
import { handleError } from '@/packages/debug'
import { Component } from 'vue'

/**
 * router: {views:[菜单],file:[菜单路由文件]}
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
        paths?: Array<any>
    },
    store?: {
        module: object,
        namespace?: string
    },
    priest?: {
        list: Array<any>
    },
    config?: object
}

class Framework {
    static install() {
    }

    constructor({ options }: { options: Object }) {

    }
}

const install = (app: App, $options?: any) => {
    app.config.globalProperties.$plugin = $options
    app.provide('AppGlobal', { version: '0.0.1' }) // 具体请看官网 [https://v3.cn.vuejs.org/api/application-api.html#provide]
    app.provide('$mitt', mitt())
    handleError(app)
    setupInit(app)
}

export default install

export {
    $optionsType,
    $axios,
}
