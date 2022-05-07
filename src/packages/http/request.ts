import axios from 'axios'
import store from '@/packages/store'
import { message as messageModel } from 'ant-design-vue'
import fileDownload  from '@/bag-utils/file/fileDownload'
import localStore from '@/packages/utils/persistence'
import { useRouter } from 'vue-router'
import { rewriteUrl } from '@/common'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: any = axios.create({
    withCredentials: true,
    cancelToken: source.token,
})

const getHttpNetworkConfig = () => {
    const {
        baseURL,
        requestTimeout,
        headers,
        retry,
        retryDelay,
        successCode,
        messageDuration,
        filterUrlToken,
        whiteList,
        resetPath,
    } = store.state.app.httpNetwork
    return {
        baseURL,
        timeout: requestTimeout,
        headers,
        retry,
        retryDelay,
        successCode,
        messageDuration,
        filterUrlToken,
        whiteList,
        resetPath,
    }
}

interface resultErrorData {
    message: string;
    data?: any;
    error?: any;
    config?: any;
}

http.interceptors.request.use((config: any) => {
    const { retry, retryDelay, timeout, baseURL, headers, filterUrlToken = [] } = getHttpNetworkConfig()
    const { url } = config
    if (url) {
        if (filterUrlToken.some((item: any) => url.includes(item))) {
            config.headers['authorization'] = store.state.user.token
        }
    }
    config.baseURL = baseURL
    config.timeout = timeout
    config.headers = { ...headers }
    config.retry = retry
    config.retryDelay = retryDelay
    return config
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: any) => {
    const { successCode, messageDuration } = getHttpNetworkConfig()
    const { config } = res
    const { code, data, message } = res.data
    if (successCode.indexOf(code) !== -1) {
        if (config.notify) {
            messageModel.success(message, messageDuration)
        }
        return data
    } else {
        if (config.notifyError) {
            messageModel.warning(message, messageDuration)
        }
        const rejectData: resultErrorData = {
            message,
            data: res.data,
            config,
        }
        return Promise.reject(rejectData)
    }
}, async (err: any) => {
    const error = err.response || err.toJSON()
    const { config, status, data, code, message = '' } = error
    const { messageDuration, whiteList, resetPath } = getHttpNetworkConfig()
    // 设置用于跟踪重试计数的变量
    config.__retryCount = config.__retryCount || 0
    const _api = '，接口：' + config.baseURL + config.url
    const msg = (config.__retryCount === 0 ? '发生错误：' : `正在重连 ${config.__retryCount} 次：`) + (data ? data.message + _api : error.message)

    const rejectData: resultErrorData = {
        message: msg,
        error,
        config,
    }

    messageModel.warning(msg, messageDuration)

    const filter = {
        timeout: code === 'ECONNABORTED' || message === 'timeout' || message.includes('timeout'), // 超时
        path: whiteList.indexOf(window.location.href) !== -1,
    }

    if (status === 403) {
        localStore.clearAll()
        const router = useRouter()
        return router.push(resetPath).then()
    }

    if (status === 404) {
        return Promise.reject(rejectData)
    }

    if (config && config.relink) { // 是否重连开启
        return Promise.reject(rejectData)
    }

    // 如果config不存在或没有设置重试选项，请拒绝
    if (!config || !config.retry) {
        return Promise.reject(rejectData)
    }

    // 检查重试次数是否达到最大值
    if (config.__retryCount >= config.retry) {
        return Promise.reject(rejectData)
    }

    // 增加重试次数
    config.__retryCount += 1

    // 创建新的Promise来处理
    const backoff = new Promise(function(resolve: any) {
        setTimeout(function() {
            resolve()
        }, config.retryDelay)
    })

    // 返回promise，其中调用axios来重试请求
    return backoff.then(function() {
        return http(config)
    })
})


const post = (url: string, params?: any, config?: object) => {
    return http.post(rewriteUrl(url), params, config).catch((err: any) => Promise.reject(err))
}

const get = (url: string, params?: any, config?: object) => {
    return http.get(rewriteUrl(url), { params: params, ...config }).catch((err: any) => Promise.reject(err))
}

const upload = (url: string, file: File) => {
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
    let param = new FormData() // 创建form对象
    param.append('file', file, file.name)
    // param.append('chunk', '0') // 添加form表单中其他数据
    return http.post(rewriteUrl(url), param, config)
}


const download = (url: string, data?: any, config?: object) => {
    return http({
        method: 'post',
        url: rewriteUrl(url), //后端下载接口地址
        responseType: 'blob', // 设置接受的流格式
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
