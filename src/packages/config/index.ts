const routerMode: String = "hash"; // 路由模式

// 过滤路由
const httpIgnore = {
    token: ["/login", '/refreshToken']  // 获取请求的时候的路由规则
}

// 主题设置
const theme = {
    catchKey: 'themeName'
}

// 网络配置
const network = {
    // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
    contentType: 'application/json;charset=UTF-8',
    //消息框消失时间
    messageDuration: 3000,
    //最长请求时间
    requestTimeout: 10000,
    //操作正常code，支持String、Array、int多种类型
    successCode: [200, 0],
}

export {
    routerMode,
    httpIgnore,
    theme,
    network
}