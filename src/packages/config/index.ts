import logoImage from '@/common/assets/image/logo3.png'

/**
 * 主题设置
 */
const themeConfig = {
    // 是否浮动菜单
    floatingMenu: false,
    // 菜单宽度
    menuMaxWidth: 250,
    // 页签样式 1默认 2圆点 3卡片
    tabStyle: 1,
    // 是否折叠项目菜单
    foldPrjMenu: false,
}

/**
 * 网络配置
 */
const httpNetwork = {
    // 获取请求的时候的路由规则
    token: ['/login', '/refreshToken'],
    // 请求头
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
    //消息框消失时间
    messageDuration: 2.5,
    //最长请求时间
    requestTimeout: 20000,
    //操作正常code码
    successCode: [1, 1000],
    // 重连间隔时间
    retryDelay: 3000,
    // 最大重试次数
    retry: 2,
    // 默认请求前缀url
    baseURL: '/api',
    // 白名单
    whiteList: ['/login', '/403', '/404', '/500', '/502', '/test'],
    // 重置路由
    resetPath: '/login',
    // 序列化
    serialize: false, // 是否表单序列化
}

// 网站配置
const webSite = {
    title: 'vue-bag-admin',
    subhead: '品茗',
    logoImage,
}

export {
    themeConfig,
    httpNetwork,
    webSite,
}
