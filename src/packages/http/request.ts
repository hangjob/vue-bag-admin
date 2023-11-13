import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios"
import axiosRetry from "axios-retry"
import locaStore from "@/packages/utils/locaStore.ts"

const http: AxiosInstance = axios.create({
    withCredentials: true,
})

axiosRetry(http, {
    retries: 3,
    shouldResetTimeout: true,
    retryDelay: (retryCount) => retryCount * 1500 // 间隔时间
})

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers["authorization"] =  locaStore.get("access_token")
    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

http.interceptors.response.use((response: AxiosResponse) => {
    const {code, msg} = response.data
    if (code === 1) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (response.config.hint && msg) {
            window.$message.success(msg)
        }
        return response.data
    }
    if(code === 1003){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        http.$router.push(http.$configOptions.resetPath)
    }
    return Promise.reject(response)
}, (error: AxiosError) => {
    return Promise.reject(error)
})

const post = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.post(url, params, config)
}

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return http.get(url, {params, ...config})
}

export {
    post,
    get,
    http as axios,
}
