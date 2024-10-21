import {createAlova, Method} from 'alova';
import fetchAdapter from 'alova/fetch';
import VueHook from 'alova/vue';
import emitter from "@/packages/middleware";

const alovaOptions = {
    // 请求适配器，这里我们使用fetch请求适配器
    requestAdapter: fetchAdapter(),
    // 在vue项目下引入VueHook，它可以帮我们用vue的ref函数创建请求相关的，可以被alova管理的状态
    statesHook: VueHook,
    // 假设我们需要与这个域名的服务器交互
    baseURL: '/api',
}


const alovaInstance = createAlova({
    ...alovaOptions,
    async responded(response) {
        const contentType = response.headers.get("content-type");
        if (response.status !== 500 && contentType && contentType.indexOf("application/json") !== -1) {
            const json = await response.json();
            if (response.status !== 200) {
                emitter.emit('API:REQUEST', {json, response})
                return Promise.reject(json)
            }
            emitter.emit('API:SUCCESS', {json, response})
            return Promise.resolve(json);
        } else {
            const text = await response.text();
            emitter.emit('API:REQUEST', {text, response})
            return Promise.reject(response);
        }
    },
})


const httpPost = (url, params = null, config = {}) => {
    const method = new Method('POST', alovaInstance, url, config, params)
    Object.getOwnPropertyNames(config).forEach((key) => method[key] = config[key])
    return method
}

const httpGet = (url, params = null, config = {}) => {
    const method = new Method('GET', alovaInstance, url, {params, ...config})
    Object.getOwnPropertyNames(config).forEach((key) => method[key] = config[key])
    return method
}


export {
    httpPost,
    httpGet,
    alovaInstance,
    alovaOptions
}




