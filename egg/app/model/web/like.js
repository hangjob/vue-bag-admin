const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, TEXT } = app.Sequelize
    return app.model.define('Like', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: INTEGER,
            comment: '用户id',
        },
        article_id: {
            type: INTEGER,
            comment: '文章ID',
        },
        type: {
            type: INTEGER,
            comment: '类型',
        },
        order: {
            type: INTEGER,
            comment: '排序',
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
        tableName: 'yxs_web_like', // 定义实际表名 文章表
    })
}
