import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/packages/store'
import fileDownload from '@/bag-utils/file/fileDownload'
import { rewriteUrl } from '@/common/http'
import { responseSuccess, responseError, requestSuccess } from '@/common/http/request'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: AxiosInstance = axios.create({
    withCredentials: true,
    cancelToken: source.token,
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
    return requestSuccess(config, { httpNetwork: store.state.app.httpNetwork })
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: AxiosResponse<any>) => {
    return responseSuccess(res, { httpNetwork: store.state.app.httpNetwork })
}, async (err: AxiosError) => {
    return responseError(err, { httpNetwork: store.state.app.httpNetwork, http })
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
        fileDownload(res.data, data?.fileName)
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
