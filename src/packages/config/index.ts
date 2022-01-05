/**
 * 路由模式
 */
const routerMode: String = "hash";

/**
 * 主题设置
 */
const themeConfig = {
    catchKey: 'themeName',
    // 是否浮动菜单
    floatingMenu: false,
    // 菜单宽度
    menuMaxWidth: 250,
    // 页签样式 1默认 2圆点 3卡片
    tabStyle: 1,
    // 是否折叠项目菜单
    foldPrjMenu: false
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

/**
 * 路由设置
 */
const routerConfig = {
    filter: ['/login'],
    routerMode: 'hash'
}


export {
    routerMode,
    themeConfig,
    httpNetwork,
    routerConfig
}
