```ts
interface $optionsType {
    router?: {
        file: Record<string, Component>, // 外接路由文件所在路径 import xxx from 'home.vue'
        paths?: Array<any>,
        defaults?: Boolean,
        replaceRouter?: Array<any> // 可以替换内部路由
    }
}
```

### file

> 路由文件，类似 import.meta.globEager('admin/views/**/*.vue')，框架自动根据你填写paths参数中的filePath，寻找路由文件

### paths

```ts
const paths = [
    {
        name: '首页',
        path: '/home',
        icon: '',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        id: 123,
        keepAlive: true,
        filePath: '/admin/views/home/Index.vue',
        children: []
    },
]
```

###### name

> 菜单标题

###### path

> 路由地址

###### icon

> 菜单icon

###### tabHidden

> 菜单面包屑是否显示

###### tabFix

> 菜单是否固定在面包屑

###### id

> 唯一标识符

###### keepAlive

> 是否开启路由缓存，注意路由组件需要有name属性

###### filePath

> 组件的路由文件位置

###### children

> 子菜单

### defaults

> 是否显示默认路由

### replaceRouter

> 替换内置内有模板，比如login，404，以及'/'跟路由

> 不建议替换'/'路由，意味着你要重新编写整个布局，左侧菜单、头部、主体
