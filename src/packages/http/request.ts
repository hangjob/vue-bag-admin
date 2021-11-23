import axios from 'axios'
import store from "@/packages/store";
import {httpIgnore} from "@/packages/config";
import {message as messageModel} from 'ant-design-vue';

const http = axios.create({
    baseURL: '/api',
    timeout: 5000
})


http.interceptors.request.use((config: any) => {
    const token = store.state.user.token
    const {url} = config;
    if (url) {
        if (httpIgnore.token.some((item) => url.includes(item))) {
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
    if (code === 1) {
        if (config.notify) {
            messageModel.success(message, 2.5)
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


export default http;
export {
    post,
    get,
    axios
}