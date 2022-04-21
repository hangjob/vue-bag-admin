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


