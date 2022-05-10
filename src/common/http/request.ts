import {AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios'
import {getHttpNetworkConfig} from '@/common/http/index'
import localStore from '@/common/utils/persistence'
import {useRouter} from "vue-router";
import {message as messageModel} from 'ant-design-vue'

// 扩展类型
declare module 'axios' {
    export interface AxiosRequestConfig {
        notifyError?: boolean
        relink?: boolean,
        notify?: boolean,
        retry?: number, // 重连次数
        retryDelay?: number // 重连时间
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
    config: any;
    error?: any;
}


function requestSuccess(config: AxiosRequestConfig, {httpNetwork = {}}: { httpNetwork: any }) {
    const {
        retry,
        retryDelay,
        timeout,
        baseURL,
        headers,
    } = getHttpNetworkConfig(httpNetwork)
    config.baseURL = baseURL
    config.timeout = timeout
    config.headers = {...headers}
    config.retry = retry
    config.retryDelay = retryDelay
    return config
}

function responseSuccess(res: AxiosResponse<ResponseData>, {
    httpNetwork = {},
}: { httpNetwork: any }) {
    console.log(res)
    const {config} = res
    let {code, data, message} = res.data
    const {successCode, messageDuration} = getHttpNetworkConfig(httpNetwork)
    if (successCode.indexOf(code) !== -1) {
        if (config.notify) {
            messageModel.success(message, messageDuration)
        }
        return data
    }
    if (config.notifyError) {
        messageModel.warning(message, messageDuration)
    }
    const errorData: ResponseDataError = {message, config}
    return Promise.reject(errorData)
}


function responseError(err: AxiosError, {
    httpNetwork = {},
    http,
}: { httpNetwork: any, http: any }) {
    const error: any = err.response || err.toJSON()
    const {config, status, statusText, message = ''} = error
    const {resetPath, messageDuration} = getHttpNetworkConfig(httpNetwork)
    // 设置用于跟踪重试计数的变量
    config.__retryCount = config.__retryCount || 0

    let msg = '发生错误'
    if (config.__retryCount !== 0) {
        msg = `发生错误：正在重连 ${config.__retryCount}次`
        msg = message ? `${msg}，${message}` : `${msg}，${statusText}`
    }

    const errorData: ResponseDataError = {message: msg, config, error}
    messageModel.warning(msg, messageDuration)

    if (status === 404 || !config.relink) { // 是否重连开启
        return Promise.reject(errorData)
    }

    if (status === 403) {
        const router = useRouter()
        localStore.clearAll()
        return router.push(resetPath).then()
    }

    if (config.__retryCount >= config.retry) { // 检查重试次数是否达到最大值
        return Promise.reject(errorData)
    }

    config.__retryCount += 1  // 增加重试次数

    const backoff = new Promise(function (resolve: any) {  // 创建新的Promise来处理
        setTimeout(function () {
            resolve()
        }, config.retryDelay)
    })

    return backoff.then(function () {  // 返回promise，其中调用axios来重试请求
        return http(config)
    })
}


export {
    responseSuccess,
    responseError,
    requestSuccess,
    ResponseData,
}
