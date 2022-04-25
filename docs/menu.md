### 具体用法

```js
import install from '@/packages/install'

const file = import.meta.globEager('/www/admin/views/**/*.vue')
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
    },
    {
        name: 'CMS管理',
        router: '',
        icon: 'SettingOutlined',
        shows: 1,
        id: 678,
        children: [
            {
                name: '栏目管理',
                path: '/channel',
                icon: '',
                id: 345,
                shows: 1,
                tabHidden: false,
                tabFix: false,
                keepAlive: true,
                filePath: '/admin/views/channel/Index.vue',
            },
        ],
    }
]
const $options: $optionsType = {
    router: {file, paths, defaults: false},
}
app.use(install, $options).mount('#app')
```

#### file

?>类型：Array

?>传递文件路径、框架会自动根据`filePath`加载相对应该的file文件

#### paths

?>类型：Array

?>框架菜单，包含一些必要的，具体参数请看下放

#### defaults

?>类型：Boolean

?>是否开启默认菜单

#### replaceRouter

?> 类型：Array

?> 替换内置路由，内置路由包含`['/login','/404']`

```ts
replaceRouter: [{name: 'login', path: '/login', component: () => import('@/example/views/login/Index.vue')}],
```

### 添加菜单

```ts
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
        width: 80,
        align: 'center',
        ellipsis: true,
        slots: {customRender: 'icon'},
    },
    {
        title: '节点类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: {customRender: 'type'},
    },
    {
        title: '路由地址',
        dataIndex: 'path',
        key: 'path',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '文件路径',
        dataIndex: 'filePath',
        key: 'filePath',
        ellipsis: true,
        align: 'center',
    },
    {
        title: 'iframe',
        dataIndex: 'iframePath',
        key: 'iframePath',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '外链',
        dataIndex: 'httpViewPath',
        key: 'httpViewPath',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '路由缓存',
        dataIndex: 'keepAlive',
        key: 'keepAlive',
        align: 'center',
        ellipsis: true,
        width: 90,
    },
    {
        title: '是否隐藏Tab切换',
        dataIndex: 'tabHidden',
        key: 'tabHidden',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '固定菜单',
        dataIndex: 'tabFix',
        key: 'tabFix',
        align: 'center',
        ellipsis: true,
        width: 90,
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        align: 'center',
        width: 90,
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: {customRender: 'action'},
    },
]
export default columns
```

### 数据库模型

```js
const dayjs = require('dayjs');
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE} = app.Sequelize;
    return app.model.define('menu', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: STRING,
            allowNull: false //不允许为null
        },
        icon: {
            type: STRING,
        },
        shows: {
            type: BOOLEAN,
            comment: '是否显示'
        },
        path: {
            type: STRING,
            comment: '路由名称'
        },
        httpViewPath: {
            type: STRING,
            comment: '外部链接'
        },
        order: {
            type: INTEGER,
            comment: '排序'
        },
        pid: {
            type: INTEGER,
            comment: '父级id'
        },
        type: {
            type: INTEGER,
            comment: '类型'
        },
        filePath: {
            type: STRING,
            comment: '组件路径'
        },
        iframePath: {
            type: STRING,
            comment: 'iframe路径'
        },
        keepAlive: {
            type: BOOLEAN,
            comment: '是否缓存'
        },
        tabHidden: {
            type: BOOLEAN,
            comment: '是否隐藏tab路由'
        },
        tabFix: {
            type: BOOLEAN,
            comment: '是否固定菜单路由'
        },
        httpFilePath: {
            type: STRING,
            comment: '网络组件'
        },
    });
}
```


