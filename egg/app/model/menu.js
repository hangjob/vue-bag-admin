const dayjs = require('dayjs')

module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize
    return app.model.define('menu', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: INTEGER,
            comment: '用户id',
        },
        meun_id: {
            type: STRING,
            comment: '菜单ID', // 生成唯一标识符
        },
        name: {
            type: STRING,
            allowNull: false, //不允许为null
        },
        icon: {
            type: STRING,
        },
        shows: {
            type: BOOLEAN,
            comment: '是否显示',
        },
        path: {
            type: STRING,
            comment: '路由名称',
        },
        httpViewPath: {
            type: STRING,
            comment: '外部链接',
        },
        order: {
            type: INTEGER,
            defaultValue:0,
            comment: '排序',
        },
        pid: {
            type: INTEGER,
            comment: '父级id',
        },
        type: {
            type: INTEGER,
            comment: '类型',
        },
        filePath: {
            type: STRING,
            comment: '组件路径',
        },
        iframePath: {
            type: STRING,
            comment: 'iframe路径',
        },
        keepAlive: {
            type: BOOLEAN,
            comment: '是否缓存',
        },
        tabHidden: {
            type: BOOLEAN,
            comment: '是否隐藏tab路由',
        },
        tabFix: {
            type: BOOLEAN,
            comment: '是否固定菜单路由',
        },
        httpFilePath: {
            type: STRING,
            comment: '网络组件',
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY/MM/DD HH:mm:ss')
            },
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY/MM/DD HH:mm:ss')
            },
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_menu', // 定义实际表名
    })

}

