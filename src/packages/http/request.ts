import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import PmUtils from 'pm-utils'
import { rewriteUrl } from '@/common/http'
import { responseSuccess, responseError, requestSuccess } from '@/common/http/request'
import appPinia from '@/packages/pinia/app'
import router from '@/packages/router'
import localStore from '@/common/utils/persistence'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: AxiosInstance = axios.create({
    withCredentials: true,
    cancelToken: source.token,
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
    const appStore = appPinia()
    return requestSuccess(config, { httpNetwork: appStore.configApp.httpNetwork })
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: AxiosResponse<any>) => {
    const appStore = appPinia()
    return responseSuccess(res, { httpNetwork: appStore.configApp.httpNetwork })
}, async (err: AxiosError) => {
    const appStore = appPinia()
    return responseError(err, {
        httpNetwork: appStore.configApp.httpNetwork, http, error: ({ status, resetPath }) => {
            if (status === 403) {
                localStore.clearAll()
                return router.push(resetPath)
            }
        },
    })
})


const post = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.post(rewriteUrl(url), params, config).catch((err: any) => Promise.reject(err))
}

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.get(rewriteUrl(url), { params: params, ...config }).catch((err: any) => Promise.reject(err))
}

const upload = (url: string, file: File) => {
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
    let param = new FormData()
    param.append('file', file, file.name)
    return http.post(rewriteUrl(url), param, { ...config })
}


const download = (url: string, data?: any, config?: any) => {
    return http({
        method: 'post',
        url: rewriteUrl(url),
        responseType: 'blob',
        data: data,
        ...config,
    }).then((res: any) => {
        PmUtils.file.fileDownload(res.data, data?.fileName)
    })
}


export default http
export {
    post,
    get,
    upload,
    download,
    axios,
}
