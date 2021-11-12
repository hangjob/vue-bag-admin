module.exports = app => {
    const {STRING, INTEGER, BOOLEAN} = app.Sequelize;
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
        viewPath: {
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
            comment: '文件路径'
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
        }
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_menu' // 定义实际表名
    });
}

