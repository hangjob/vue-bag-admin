```ts
import install, {$optionsType} from '@/packages/install'
```

### $optionsType

options所支持的参数

```ts
interface $optionsType {
    router?: {
        paths?: Array<any>,
        file: Record<string, Component>,
        defaults?: Boolean,
    },
    store?: {
        module: object,
        namespace?: string
    },
    priest?: {
        list: Array<any>
    },
    header?: {
        themeBar: any
    },
    config?: object
}
```

#### router.paths

```ts
const paths = addUniqueId([
    {
        name: '首页',
        path: '/home',
        icon: '',
        shows: 1,
        tabHidden: false,
        tabFix: false,
        keepAlive: true,
        filePath: '/views/article/Index.vue', // 路由文件名称
    },
    {
        name: 'CMS管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        children: [
            {
                name: '栏目管理',
                path: '/channel',  // 路由名称
                icon: '',
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/views/channel/Index.vue', // 路由文件名称
            },
        ],
    },
])
```

#### router.file

> 路由文件，类似 import.meta.globEager('xxxx/views/**/*.vue')，框架自动根据你填写paths参数中的filePath，寻找路由文件

#### router.defaults

> 是否显示默认菜单，框架有内置菜单，默认显示

#### store.module

```ts
import app from '@/example/store/app'

const store: any = {
    app,
}
const $options: $optionsType = {
    store: {
        module: store,
    },
}
```

#### store.namespace

> 命名空间名称

### priest.list

> 项目切换菜单

```ts
let defaultPrjMenu = [
    {
        name: '系統菜单',
        icon: 'UserOutlined',
        shows: 1,
        menus: [], // 继承 router.paths
    },
]
```

#### header.themeBar

接受一个组件

```ts
import ThemeBar from '@www/admin/components/ThemeBar.vue'

const $options: $optionsType = {
    header: {
        themeBar: shallowRef(ThemeBar),
    },
}
```

### 例子

```ts
const $options: $optionsType = {
    ...
}
createApp(App).use(install, $options).mount('#app')
```
