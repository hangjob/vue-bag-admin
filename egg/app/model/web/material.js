const dayjs = require('dayjs')
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE, TEXT} = app.Sequelize
    return app.model.define('Material', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '图片名称',
        },
        groupimg_id: {
            type: INTEGER,
            comment: '图片分组',
        },
        image: {
            type: STRING,
            comment: '图片地址',
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
        tableName: 'yxs_web_material', // 定义实际表名 栏目表
    })
}
