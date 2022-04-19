import axios from 'axios'
import store from '@/packages/store'
import { httpNetwork, routerSet } from '@/packages/config'
import { message as messageModel } from 'ant-design-vue'
import { handleExport } from '@/packages/utils/utils'
import localStore from '@/packages/utils/persistence'
import { useRouter } from 'vue-router'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const http: any = axios.create({
    baseURL: httpNetwork.baseURL,
    timeout: httpNetwork.requestTimeout,
    withCredentials: true,
    headers: httpNetwork.headers,
    cancelToken: source.token,
})

http.defaults.retry = httpNetwork.retry
http.defaults.retryDelay = httpNetwork.retryDelay


interface resultErrorData {
    message: string;
    data?: any;
    error?: any;
    config?: any;
}

http.interceptors.request.use((config: any) => {
    const token = store.state.user.token
    const { url } = config
    if (url) {
        if (httpNetwork.token.some((item) => url.includes(item))) {
            config.headers['authorization'] = token
        }
    }
    return config
}, (error: any) => {
    return Promise.reject(error)
})

http.interceptors.response.use((res: any) => {
    const { config } = res
    const { code, data, message } = res.data
    if (httpNetwork.successCode.indexOf(code) !== -1) {
        if (config.notify) {
            messageModel.success(message, httpNetwork.messageDuration)
        }
        return data
    } else {
        if (config.notifyError) {
            messageModel.warning(message, httpNetwork.messageDuration)
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

    // 设置用于跟踪重试计数的变量
    config.__retryCount = config.__retryCount || 0
    const _api = '，接口：' + config.baseURL + config.url
    const msg = (config.__retryCount === 0 ? '发生错误：' : `正在重连 ${config.__retryCount} 次：`) + (data ? data.message + _api : error.message)

    const rejectData: resultErrorData = {
        message: msg,
        error,
        config,
    }

    messageModel.warning(msg, httpNetwork.messageDuration)

    const filter = {
        timeout: code === 'ECONNABORTED' || message === 'timeout' || message.includes('timeout'), // 超时
        path: routerSet.whiteList.indexOf(window.location.href) !== -1,
    }

    if (status === 403) {
        localStore.clearAll()
        const router = useRouter()
        return router.push(routerSet.resetPath).then()
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

// 包装url
const rewriteUrl = (url: string) => {
    return url
}


const post = (url: string, params?: any, config?: object) => {
    return http.post(rewriteUrl(url), params, config).catch((err: any) => Promise.reject(err))
}

const get = (url: string, params?: any, config?: object) => {
    return http.get(rewriteUrl(url), { params: params, ...config }).catch((err: any) => Promise.reject(err))
}

const all = (request: Array<any>) => {
    return axios.all(request)
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


const download = (url: string, params?: object, config?: any) => {
    return axios({
        method: 'post',
        url: rewriteUrl(url), //后端下载接口地址
        responseType: 'blob', // 设置接受的流格式
        data: {
            ...params,
        },
        params: {
            ...params,
        },
    }).then((res: any) => {
        handleExport(res.data, config.fileName)
    })
}


export default http
export {
    post,
    get,
    all,
    upload,
    download,
    axios,
}
