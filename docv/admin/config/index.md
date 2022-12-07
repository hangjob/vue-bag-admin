# 默认配置

### 网络配置

```javascript
const httpNetwork = {
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
    serialize: false, // 在post模式下生效，是否表单序列化
}
```

具体用法参考网络请求

### 主题配置

```javascript
const themeConfig = {
    menu: {
        isFloat: false,  // 是否浮动菜单
        width: 250, // 菜单最大宽度
        tabBarStyle: 1, // 页签样式 1默认 2圆点 3卡片
    },
    project: {
        isFold: false //是否折叠项目菜单
    }
}
```

### 网站配置

``` javascript
const webSite = {
    title: 'vue-bag-admin', // 标题
    subhead: 'admin', // 简写
    logoImage:'', // logo图片，可以是本地，可以是网络
}
```
