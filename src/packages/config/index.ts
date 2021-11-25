const routerMode: String = "hash"; // 路由模式

/**
 * 主题设置
 */
const theme = {
    catchKey: 'themeName'
}

/**
 * 网络配置
 */
const httpNetwork = {
    // 获取请求的时候的路由规则
    token: ["/login", '/refreshToken'],
    // 配后端数据的接收方式
    contentType: 'application/json;charset=UTF-8',
    //消息框消失时间
    messageDuration: 2.5,
    //最长请求时间
    requestTimeout: 3000,
    //操作正常code码
    successCode: [1, 1000],
    // 重连间隔时间
    retryDelay: 3000,
    // 最大重试次数
    retry: 3,
    // 默认前缀url
    baseURL: '/api'
}


export {
    routerMode,
    theme,
    httpNetwork
}