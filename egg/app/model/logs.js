const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize
    return app.model.define('Logs', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ip: {
            type: STRING,
            comment: 'ip',
        },
        browser: {
            type: STRING,
            comment: '浏览器',
        },
        network: {
            type: STRING,
            comment: '网络',
        },
        area: {
            type: STRING,
            comment: '地址',
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
        tableName: 'yxs_logs', // 定义实际表名
    })
}

