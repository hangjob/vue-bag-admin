import axios from 'axios'
import store from "@/packages/admin/store";
import {httpIgnore} from "@/packages/admin/config";

const http = axios.create({
    baseURL: '/',
    timeout: 5000
})


http.interceptors.request.use((config: any) => {
    const token = store.state.user.token
    const {url} = config;

    if (!token) {
        return window.location.href = '/';
    }

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
    const {code, data, message} = res.data;
    if (code === 1) {
        return data;
    } else {
        return Promise.reject(res.data);
    }
}, async (error) => {
    if (error.response) {
        const {status, config} = error.response;
        if (status === 401) {
            window.location.href = '/';
        } else {
            console.log(status, config.url)
        }
    }
    return Promise.reject(error.message);
})

// 包装url
const rewriteUrl = (url: string) => {
    return url
}


const post = (url: string, params?: any) => {
    return http.post(rewriteUrl(url), params)
}

const get = (url: string, params?: any) => {
    return http.get(rewriteUrl(url), {params: params})
}


export default http;
export {
    post,
    get
}