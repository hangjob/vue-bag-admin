import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'
import {rewriteUrl, getHttpNetworkConfig} from '@/common/http'
import {ElNotification} from 'element-plus'
import appStore from '@/bag-web/store/app'
import {responseSuccess, ResponseData, responseError, requestSuccess} from '@/common/http/request'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: any = axios.create({
    withCredentials: true,
    cancelToken: source.token,
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
    const store = appStore()
    return requestSuccess(config, {httpNetwork: store.httpNetwork})
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: AxiosResponse<ResponseData>) => {
    const store = appStore()
    return responseSuccess(res, {httpNetwork: store.httpNetwork})
}, async (err: AxiosError) => {
    const store = appStore()
    return responseError(err, {httpNetwork: store.httpNetwork, http})
})


const post = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.post(rewriteUrl(url), params, config).catch((err: any) => Promise.reject(err))
}

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.get(rewriteUrl(url), {params: params, ...config}).catch((err: any) => Promise.reject(err))
}

export {
    post,
    get,
}
