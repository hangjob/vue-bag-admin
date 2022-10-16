const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize
    return app.model.define('Role', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '名称',
        },
        tag: {
            type: STRING,
            comment: '标识符',
        },
        describe: {
            type: STRING,
            comment: '备注',
        },
        order: {
            type: STRING,
            comment: '排序',
        },
        menus: {
            type: STRING,
            comment: '菜单ID',
            get() {
                const str = this.getDataValue('menus')
                return str ? str.split(',') : []
            },
            set(value) {
                if (value) {
                    this.setDataValue('menus', value.join(','))
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
        tableName: 'yxs_role', // 定义实际表名
    })
}

