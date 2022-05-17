const dayjs = require('dayjs')
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE, TEXT} = app.Sequelize
    return app.model.define('Leave', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '用户昵称',
        },
        email: {
            type: STRING,
            comment: '邮箱',
        },
        url: {
            type: STRING,
            comment: '网站链接',
        },
        message: {
            type: STRING(512),
            comment: '留言记录',
        },
        shows:{
            type: BOOLEAN,
            defaultValue: false,
            comment: '是否显示',
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
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
        tableName: 'yxs_web_leave', // 定义实际表名 栏目表
    })
}
