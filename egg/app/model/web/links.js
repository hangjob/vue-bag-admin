const dayjs = require('dayjs')
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE, TEXT} = app.Sequelize
    return app.model.define('Links', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '网站名称',
        },
        url: {
            type: STRING,
            comment: '网站链接',
        },
        email: {
            type: STRING,
            comment: '邮箱',
        },
        logo: {
            type: STRING,
            comment: '缩略图',
        },
        shows: {
            type: BOOLEAN,
            defaultValue: false,
            comment: '是否显示',
        },
        describe: {
            type: STRING,
            comment: '网站描述',
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
        tableName: 'yxs_web_links', // 定义实际表名 栏目表
    })
}
