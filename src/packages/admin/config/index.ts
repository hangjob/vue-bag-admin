const routerMode: String = "hash"; // 路由模式

const httpIgnore = {
    token: ["/login", '/refreshToken']  // 获取请求的时候的路由规则
}

const theme = {
    catchKey: 'themeName'
}

export {
    routerMode,
    httpIgnore,
    theme
}