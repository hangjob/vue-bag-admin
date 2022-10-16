const dayjs = require('dayjs')
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE, TEXT} = app.Sequelize
    return app.model.define('Website', {
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
        logo: {
            type: STRING,
            comment: '缩略图',
        },
        loginbg: {
            type: STRING,
            comment: '登录页面背景图',
        },
        slogan: {
            type: STRING,
            comment: '网站描述',
        },
        qrcode: {
            type: STRING,
            comment: '二维码地址',
        },
        record: {
            type: STRING,
            comment: '备案号',
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
        tableName: 'yxs_web_website', // 定义实际表名 栏目表
    })
}
