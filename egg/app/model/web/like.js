const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, TEXT } = app.Sequelize
    const Like =  app.model.define('Like', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: INTEGER,
            comment: '用户id',
        },
        pid: {
            type: INTEGER,
            comment: '1是文章ID/其他ID',
        },
        type: {
            type: INTEGER,
            comment: '类型', // 1 是文章表article.js 、2 下载表 download.js
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

    Like.associate = function() {
        app.model.Web.Like.belongsTo(app.model.Member, {
            foreignKey: 'user_id',
            targetKey: 'id',
            sourceKey: 'id',
            as: 'member',
        })
    }

    return Like;
}
