const dayjs = require('dayjs')

module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize
    return app.model.define('btns', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: STRING,
            comment: '菜单按钮名称',
        },
        type: {
            type: INTEGER,
            comment: '菜单类型',// edit create updata delete
        },
        role_id: {
            type: INTEGER,
            comment: '角色id',
        },
        menu_id: {
            type: INTEGER,
            comment: '菜单id',
        },
        state: {
            type: BOOLEAN,
            defaultValue: false,
            comment: '状态', // 控制按钮是否展示
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
        tableName: 'yxs_btns', // 定义实际表名
    })
}
