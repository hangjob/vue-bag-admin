# 路由配置

```typescript
import install, {$optionsType} from 'vue-bag-admin'

const $options: $optionsType = {
    router: {file, paths, replaceRouter},
}
createApp(App).use(install, $options).mount('#app')
```

## file

本地路由文件，因为是动态路由添加，去寻找匹配，使用方式按照一以下方式即可

```javascript
const file: Record<string, Component> = import.meta.glob('/views/**/*.vue', {eager: true})
```

## paths

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
        httpFilePath: null, // 网络异步路由文件
        httpViewPath: null, // 点击 通过window.open() 打开
        iframePath: null, // 是否通过内嵌iframe打开
        order: 0, // 排序
        pid: null, // 上级，添写的如有，会自动形成树状结构
    }
]
```

## replaceRouter

替换内置路由，比如`login`页面，如下操作会覆盖已有的登录页面

```javascript
const replaceRouter = [
    {
        path: '/login', name: 'login', meta: {title: '登录'},
        component: () => import('@/views/logintest/index.vue'),
    },
]
```

