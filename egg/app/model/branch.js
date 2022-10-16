const dayjs = require("dayjs");
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE} = app.Sequelize;
    return app.model.define('Branch', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: STRING,
            comment: '名称'
        },
        order: {
            type: STRING,
            comment: '排序'
        },
        pid: {
            type: INTEGER,
            comment: '父级ID'
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY/MM/DD HH:mm:ss');
            }
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY/MM/DD HH:mm:ss');
            }
        }
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_branch' // 定义实际表名
    })
}

