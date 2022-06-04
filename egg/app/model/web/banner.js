const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, TEXT } = app.Sequelize
    return app.model.define('Banner', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '图片名称',
        },
        image: {
            type: STRING,
            comment: '图片地址',
        },
        url: {
            type: STRING,
            comment: '链接地址',
        },
        shows: {
            type: BOOLEAN,
            defaultValue: true,
            comment: '是否显示',
        },
        describe: {
            type: TEXT,
            comment: '图片描述',
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
        tableName: 'yxs_web_banner', // 定义实际表名 文章表
    })
}
