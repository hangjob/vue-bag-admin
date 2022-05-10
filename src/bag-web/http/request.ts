import axios, { AxiosRequestConfig } from 'axios'
import { rewriteUrl, getHttpNetworkConfig } from '@/common/http'
import { ElNotification } from 'element-plus'
import appStore from '@/bag-web/store/app'


const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: any = axios.create({
    withCredentials: true,
    cancelToken: source.token,
})


http.interceptors.request.use((config: AxiosRequestConfig) => {
    const store = appStore()
    const { timeout, baseURL, headers } = getHttpNetworkConfig(store.httpNetwork)
    config.baseURL = baseURL
    config.timeout = timeout
    config.headers = { ...headers }
    return config
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: any) => {
    const store = appStore()
    const { code, data, message } = res.data
    const { successCode, messageDuration } = getHttpNetworkConfig(store.httpNetwork)
    const { config } = res

    // if (code === 1) {
    //     return data
    // } else {
    //     ElNotification({
    //         type: 'error',
    //         title: '发生错误',
    //         message,
    //     })
    //     return Promise.reject(res)
    // }
}, async (err: any) => {
    const error = err.response || err.toJSON()
    const { status, statusText, message } = error
    let text = statusText
    if (!status) {
        text = message
    }
    ElNotification({
        type: 'error',
        title: '请求出错',
        message: text,
    })
    return Promise.reject(err)
})

const post = (url: string, params?: any, config?: AxiosRequestConfig) => {
    console.log(config)
    return http.post(rewriteUrl(url), params, config).catch((err: any) => Promise.reject(err))
}

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.get(rewriteUrl(url), { params: params, ...config }).catch((err: any) => Promise.reject(err))
}

export {
    post,
    get,
}
