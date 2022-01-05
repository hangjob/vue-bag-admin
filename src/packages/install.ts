import type {App} from 'vue';
import setupInit from '@/packages/base/index'
import mitt from "mitt";
import * as $axios from '@/packages/http/request'
import {handleError} from '@/packages/debug'

/**
 * router: {views:[菜单],external:[菜单路由]}
 *
 * store:{module:{store对象},namespace:’命名空间，默认web‘}
 */
interface $optionsType {
    routerView?: {
        external?: any, // 外接路由文件所在路径
    },
    router?: any,
    store?: {
        module: object,
        namespace?: string
    },
    prjlist?: {
        list: Array<any>
    },
    config?: object
}

const install = async (app: App, $options?: any) => {
    app.config.globalProperties.$plugin = $options;
    app.provide("AppGlobal", {version: '0.0.1'}); // 具体请看官网 [https://v3.cn.vuejs.org/api/application-api.html#provide]
    app.provide("$mitt", mitt());
    handleError(app)
    setupInit(app)
    window.__app__ = app;
}

export default install

export {
    $optionsType,
    $axios,
}
