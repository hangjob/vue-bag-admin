const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, TEXT } = app.Sequelize
    return app.model.define('Channel', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '栏目名称',
        },
        pid: {
            type: INTEGER,
            comment: '父级ID',
        },
        image: {
            type: STRING,
            comment: '缩略图',
        },
        url: {
            type: STRING,
            comment: '链接地址',
        },
        keywords: {
            type: STRING,
            comment: '关键词',
            get() {
                const keywords = this.getDataValue('keywords')
                return keywords ? keywords.split(',') : []
            },
            set(value) {
                if (value) {
                    this.setDataValue('keywords', value.join(','))
                } else {

                }
            },
        },
        order: {
            type: INTEGER,
            comment: '排序',
        },
        is_contribute: {
            type: BOOLEAN,
            defaultValue: true,
            comment: '是否允许投稿',
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
        tableName: 'yxs_web_channel', // 定义实际表名 栏目表
    })
}
