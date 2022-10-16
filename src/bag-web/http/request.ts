import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {rewriteUrl} from '@/common/http'
import appStore from '@/bag-web/store/app'
import {responseSuccess, responseError, requestSuccess} from '@/common/http/request'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http:AxiosInstance = axios.create({
    withCredentials: true,
    cancelToken: source.token,
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
    const store = appStore()
    return requestSuccess(config, {httpNetwork: store.httpNetwork})
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: AxiosResponse<any>) => {
    const store = appStore()
    return responseSuccess(res, {httpNetwork: store.httpNetwork})
}, async (err: AxiosError) => {
    const store = appStore()
    return responseError(err, {httpNetwork: store.httpNetwork, http})
})


const post = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.post(rewriteUrl(url), params, config)
}

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.get(rewriteUrl(url), {params: params, ...config})
}

export {
    post,
    get,
}
