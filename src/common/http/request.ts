import { AxiosResponse, AxiosError } from 'axios'
import { getHttpNetworkConfig } from '@/common/http/index'
import localStore from '@/common/utils/persistence'

// 扩展类型
declare module 'axios' {
    export interface AxiosRequestConfig {
        notifyError?: boolean
        relink?: boolean
    }
}

// 扩展Data类型
interface ResponseData<T = any> {
    code: number
    data: T
    message: string
}

// 扩展返回错误类型
interface ResponseDataError {
    message: string;
    data: any;
    config: any;
    error?: any;
}


function responseSuccess(res: AxiosResponse<ResponseData>, {
    router = {},
    httpNetwork = {},
}: { router?: any, httpNetwork: any }) {
    console.log(res)
    const { config } = res
    let { code, data, message } = res.data
    const { successCode } = getHttpNetworkConfig(httpNetwork)

    if (successCode.indexOf(code) !== -1) {
        return data
    }

    if (config.notifyError) {
        console.log('这里错误')
        // 弹窗警告
    }

    const errorData: ResponseDataError = {
        message,
        data: res.data,
        config,
    }
    return Promise.reject(errorData)
}


function responseError(err: AxiosError, {
    router = {},
    httpNetwork = {},
    http,
}: { router: any, httpNetwork: any, http: any }) {
    const error: any = err.response || err.toJSON()
    const { config, status, data, statusText } = error
    const { resetPath } = getHttpNetworkConfig(httpNetwork)
    // 设置用于跟踪重试计数的变量
    config.__retryCount = config.__retryCount || 0
    let msg = '发生错误'
    if (config.__retryCount !== 0) {
        msg = `发生错误：正在重连 ${config.__retryCount}次`
        msg = data && data.message ? `${msg}，${data.message}` : `${msg}，${statusText}`
    }
    const errorData: ResponseDataError = {
        message: msg,
        data: data,
        config,
        error,
    }
    console.log('这里错误2')

    if (status === 403) {
        localStore.clearAll()
        return router.push(resetPath).then()
    }

    if (status === 404 || !config.relink) { // 是否重连开启
        return Promise.reject(errorData)
    }

    if (config.__retryCount >= config.retry) { // 检查重试次数是否达到最大值
        return Promise.reject(errorData)
    }

    config.__retryCount += 1  // 增加重试次数

    const backoff = new Promise(function(resolve: any) {  // 创建新的Promise来处理
        setTimeout(function() {
            resolve()
        }, config.retryDelay)
    })

    return backoff.then(function() {  // 返回promise，其中调用axios来重试请求
        return http(config)
    })
}


export {
    responseSuccess,
    responseError,
    ResponseData,
}
