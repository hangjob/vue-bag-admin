import axios from 'axios'
import store from "@/packages/store";
import {httpNetwork} from "@/packages/config";
import {message as messageModel} from 'ant-design-vue';


const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http = axios.create({
    baseURL: '/api',
    timeout: httpNetwork.requestTimeout,
    withCredentials: true,
    headers: {
        'content-type': httpNetwork.contentType
    },
    cancelToken: source.token
})


http.interceptors.request.use((config: any) => {
    const token = store.state.user.token
    const {url} = config;
    if (url) {
        if (httpNetwork.token.some((item) => url.includes(item))) {
            config.headers['authorization'] = token;
        }
    }
    return config;
}, (error) => {
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
}, async (error) => {
    if (error.response) {
        const {status, config} = error.response;
        console.log(status, config.url)
    }
    return Promise.reject(error.message);
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