# 默认配置

```typescript
import install, { $optionsType } from 'vue-bag-admin'

const $options: $optionsType = {
    router: {},
    config: {
        webSite: {},
        httpNetwork: {},
    },
    apis: {}
}
createApp(App).use(install, $options).mount('#app')
```

## router配置

### router.file

本地路由文件，因为是动态路由添加，去寻找匹配，使用方式按照一以下方式即可

```javascript
const file: Record<string, Component> = import.meta.glob('/views/**/*.vue', { eager: true })
```

### router.paths

路由菜单，可以本地添加配置，也可以通过程序的`/menu/all`接口，获取菜单数据，数结构统一如下

```javascript
const paths = [
    {
        name: '测试页1', // 菜单名称
        path: '/test1', //  路由地址
        icon: 'HomeOutlined', // 菜单ICON
        shows: 1, // 是否在左侧显示该菜单
        tabHidden: false, // 是否在切换栏显示该
        tabFix: false, // 是否固定菜单
        keepAlive: true, // 是否开启缓存
        filePath: '/views/test1/index.vue', // 文件地址
        id: 1, // 菜单key 唯一值
        httpFilePath: null, // 异步路由文件，暂未用到
        httpViewPath: null, // 点击 通过window.open() 打开
        iframePath: null, // 是否通过内嵌iframe打开
        order: 0, // 排序
        pid: null, // 上级，添写的如有，会自动形成树状结构
    }
]
```

### router.replaceRouter

替换内置路由，比如`login`页面，如下操作会覆盖已有的登录页面

```javascript
const replaceRouter = [
    {
        path: '/login', name: 'login', meta: { title: '登录' },
        component: () => import('@/views/logintest/index.vue'),
    },
]
```

## config配置

### config.webSite站点配置

```javascript
const webSite = {
    title: 'bag-admin', // 标题
    subhead: 'bag', // 简写标题
    logoImage: 'xxx', // logo 可以是本地阔以是网络
}
```

### config.httpNetwork 网络配置

```javascript
const httpNetwork = {
    headers: {
        'content-type': 'application/json;charset=UTF-8', // 请求头
    },
    messageDuration: 2.5,  //消息框消失时间
    requestTimeout: 20000,  //最长请求时间
    successCode: [1, 1000],  //操作正常code码
    retryDelay: 3000, // 重连间隔时间
    retry: 2, // 最大重试次数
    baseURL: '/api',  // 默认请求前缀url
    whiteList: ['/login', '/403', '/404', '/500', '/502', '/test'], // 白名单
    resetPath: '/login', // 默认重置的路由
    serialize: false, // 在post模式请求，是否表单序列化
}
```

## apis

接口覆盖，可以覆盖框架的任意接口

```javascript
const apis = {
    '/app/library': '/xxx/library'
}
```

