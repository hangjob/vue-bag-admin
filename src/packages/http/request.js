import {createAlova} from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';

let Authorization = null

const alovaOptions = {
    // 在vue项目下引入VueHook，它可以帮我们用vue的ref函数创建请求相关的，可以被alova管理的状态
    statesHook: VueHook,
    // 请求适配器，这里我们使用fetch请求适配器
    requestAdapter: GlobalFetch(),
    // 假设我们需要与这个域名的服务器交互
    baseURL: '/api',
}

// 一个新实例，防止用户在拦截中请求其他函数死循环
const alovaNewInstance = createAlova({
    ...alovaOptions,
});

const alovaInstance =  createAlova({
    ...alovaOptions,
    // 如需要通插件重写此方法
    async beforeRequest(method) {
        if(!Authorization){
            const res = await alovaNewInstance.Get('/secretkey')
            const data = await res.json();
            Authorization = data.data.token
        }
        method.config.headers['Authorization'] = `Bearer ${Authorization}`
    },
    async responsed(response) {
        if (response.status !== 500) {
            const json = await response.json();
            if (response.status !== 200) {
                if (!json?.error?.details) {
                    window.$naive.message.warning(json?.error?.message)
                } else {
                    json?.error?.details?.errors?.forEach((item) => {
                        window.$naive.message.warning(item.message)
                    })
                }
                return Promise.reject(json)
            }
            return Promise.resolve(json);
        } else {
            window.$naive.message.warning(response.statusText)
            return Promise.reject(response);
        }
    },
})


const httpPost = (url, params = null, options = {}) => {
    return alovaInstance.Post(url, params, options)
}

const httpGet = (url, params = null, options = {}) => {
    return alovaInstance.Get(url, {params: params, ...options})
}


export {
    httpPost,
    httpGet,
    alovaInstance,
    createAlova,
    GlobalFetch,
    VueHook,
    alovaNewInstance
}

