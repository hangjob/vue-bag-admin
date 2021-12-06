import axios from 'axios'
import store from "@/packages/store";
import {httpNetwork} from "@/packages/config";
import {message as messageModel} from 'ant-design-vue';


const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: any = axios.create({
    baseURL: httpNetwork.baseURL,
    timeout: httpNetwork.requestTimeout,
    withCredentials: true,
    headers: {
        'content-type': httpNetwork.contentType
    },
    cancelToken: source.token
})

http.defaults.retry = httpNetwork.retry;
http.defaults.retryDelay = httpNetwork.retryDelay;


http.interceptors.request.use((config: any) => {
    const token = store.state.user.token
    const {url} = config;
    if (url) {
        if (httpNetwork.token.some((item) => url.includes(item))) {
            config.headers['authorization'] = token;
        }
    }
    return config;
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: any) => {
    const {config} = res;
    const {code, data, message} = res.data;
    if (httpNetwork.successCode.indexOf(code) !== -1) {
        if (config.notify) {
            messageModel.success(message, httpNetwork.messageDuration)
        }
        return data;
    } else {
        return Promise.reject(res.data);
    }
}, async (error: any) => {

    const {config} = error.response || {};

    // 如果config不存在或没有设置重试选项，请拒绝
    if (!config || !config.retry) {return Promise.reject(error.message);}

    // 设置用于跟踪重试计数的变量
    config.__retryCount = config.__retryCount || 0;

    // 检查重试次数是否达到最大值
    if (config.__retryCount >= config.retry) {return Promise.reject(error.message);}

    // 增加重试次数
    config.__retryCount += 1;

    // 创建新的Promise来处理
    const backoff = new Promise(function (resolve: any) {
        setTimeout(function () {
            resolve();
        }, config.retryDelay);
    });

    // 返回promise，其中调用axios来重试请求
    return backoff.then(function () {
        return http(config);
    });
})

// 包装url
const rewriteUrl = (url: string) => {
    return url
}


const post = (url: string, params?: any, config?: object) => {
    return http.post(rewriteUrl(url), params, config)
}

const get = (url: string, params?: any, config?: object) => {
    return http.get(rewriteUrl(url), {params: params, ...config})
}


const all = (request: Array<any>) => {
    return axios.all(request)
}


export default http;
export {
    post,
    get,
    all,
    axios
}
