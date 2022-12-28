import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
import { getHttpNetworkConfig } from '@/common/http/index'
import { message as messageModel } from 'ant-design-vue'
import { rsaEncrypt } from '@/common/utils/crypto'
import { nanoid } from 'nanoid'
import qs from 'qs'


// 扩展类型
declare module 'axios' {
    export interface AxiosRequestConfig {
        notifyError?: boolean
        relink?: boolean,
        notify?: boolean,
        retryDelay?: number // 重连时间
        retry?: number, // 重连次数
        reconnectCount?: number,
    }
}

// 扩展Data类型
interface ResponseData<T = any> {
    code: number
    data: T
    message: string
}

// 扩展返回错误类型
interface ResponseErrorData {
    message: string;
    error?: any;
}


/**
 * 请求拦截
 * @param config
 * @param httpNetwork
 */
function requestSuccess(config: AxiosRequestConfig, { httpNetwork = {} }: { httpNetwork: any }) {
    const {
        retry,
        retryDelay,
        timeout,
        baseURL,
        headers,
        serialize,
    } = getHttpNetworkConfig(httpNetwork)
    config.baseURL = baseURL
    config.timeout = timeout
    const sign = rsaEncrypt(JSON.stringify({ name: 'bag', nanoid: nanoid() }))
    config.headers = { ...headers, ...config.headers, sign }
    config.retry = retry
    config.retryDelay = retryDelay
    if (config.method === 'post' && serialize) {
        config.data = qs.stringify(config.data)
    }
    return config
}

/**
 * 成功响应拦截 200
 * @param res
 * @param httpNetwork
 */
function responseSuccess(res: AxiosResponse<ResponseData>, {
    httpNetwork = {},
}: { httpNetwork: any }) {
    const { config } = res
    let { code, data, message } = res.data
    message = message ? message : '请检查网络配置'
    const { successCode, messageDuration } = getHttpNetworkConfig(httpNetwork)
    if (successCode.indexOf(code) !== -1) {
        if (config.notify) {
            messageModel.success(message, messageDuration).then()
        }
        return data
    }
    if (config.notifyError) {
        messageModel.warning(message, messageDuration)
    }
    const errorData: ResponseErrorData = { message, error: res }
    return Promise.reject(errorData)
}

/**
 * 错误响应拦截 !200
 * @param err
 * @param httpNetwork
 * @param http
 * @param error
 */
function responseError(err: AxiosError, {
    httpNetwork = {},
    http,
    error,
}: { httpNetwork: any, http: any, error?: Function }) {
    const { resetPath, messageDuration } = getHttpNetworkConfig(httpNetwork)
    if (err.response) {
        const { data, status }: { data: any, status: number } = err.response
        const errorData: ResponseErrorData = { message: data.message, error: err.response }
        if (error && error({ status, resetPath })) {
            return Promise.reject(errorData)
        }
        // messageModel.warning(data.message, messageDuration)
        return Promise.reject(errorData)
    } else {
        const { config, message } = <any>err.toJSON()
        const errorData: ResponseErrorData = { message: message, error: err.toJSON() }
        config.reconnectCount = config.reconnectCount || 0
        let msg = config.reconnectCount ? `is reconnection ${config.reconnectCount} times，${message}` : message
        // messageModel.warning(msg, messageDuration)
        if (!config.relink) { // 是否开启重连
            return Promise.reject(errorData)
        }

        if (config.reconnectCount >= config.retry) { // 检查重试次数是否达到最大值
            return Promise.reject(errorData)
        }

        config.reconnectCount += 1  // 增加重试次数
        const backoff = new Promise(function(resolve: any) {  // 创建新的Promise来处理
            setTimeout(function() {
                resolve()
            }, config.retryDelay)
        })

        return backoff.then(function() {  // 返回promise，其中调用axios来重试请求
            return http(config)
        })
    }
}


export {
    responseSuccess,
    responseError,
    requestSuccess,
}
