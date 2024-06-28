import {createAlova} from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';

const successCode = [1]
const alovaInstance = createAlova({
    // 假设我们需要与这个域名的服务器交互
    baseURL: '/api',
    // 在vue项目下引入VueHook，它可以帮我们用vue的ref函数创建请求相关的，可以被alova管理的状态
    statesHook: VueHook,
    // 请求适配器，这里我们使用fetch请求适配器
    requestAdapter: GlobalFetch(),
    // 设置全局的请求拦截器，与axios相似
    beforeRequest({config}) {
        // 假设我们需要添加token到请求头
        // config.headers.token = 'token'
    },
    async responsed(response) {
        if (response.status !== 200) {
            return Promise.reject(response)
        }
        const json = await response.json();
        if (successCode.includes(json.code)) {
            return Promise.resolve(json);
        }
        return Promise.resolve(response);
    },
})


const httpPost = (url, data = null, options = {}) => {
    return alovaInstance.Post(url, data, options)
}

const httpGet = (url, data = null, options = {}) => {
    return alovaInstance.Get(url, {params: data, ...options})
}


export {
    httpPost,
    httpGet,
    alovaInstance
}

