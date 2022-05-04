import axios from 'axios'
import { rewriteUrl } from '@/common'
import { ElNotification } from 'element-plus'

const http: any = axios.create({
    withCredentials: true,
})


http.interceptors.request.use((config: any) => {
    // const { timeout, baseURL } = getHttpNetworkConfig()
    config.baseURL = '/api'
    config.timeout = 6000
    return config
}, (error: any) => {
    return Promise.reject(error)
})


http.interceptors.response.use((res: any) => {
    const { code, data, message } = res.data
    if (code === 1) {
        return data
    } else {
        ElNotification({
            type: 'error',
            title: '发生错误',
            message,
        })
        return Promise.reject(res)
    }
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

const post = (url: string, params?: any, config?: object) => {
    return http.post(rewriteUrl(url), params, config).catch((err: any) => Promise.reject(err))
}

const get = (url: string, params?: any, config?: object) => {
    return http.get(rewriteUrl(url), { params: params, ...config }).catch((err: any) => Promise.reject(err))
}

export {
    post,
    get,
}
