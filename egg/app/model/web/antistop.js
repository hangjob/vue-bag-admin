const dayjs = require('dayjs')
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE, TEXT} = app.Sequelize
    return app.model.define('Antistop', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '关键词',
        },
        describe: {
            type: STRING,
            comment: '描述',
        },
        tag: {
            type: STRING,
            comment: '标识符',
        },
        order: {
            type: INTEGER,
            comment: '排序',
        },
        shows: {
            type: BOOLEAN,
            defaultValue: true,
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
                return dayjs(this.getDataValue('updateTime')).format('YYYY-MM-DD HH:mm:ss')
            },
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_web_antistop', // 定义实际表名 文章表
    })
}
