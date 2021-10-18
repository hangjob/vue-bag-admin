module.exports = app => {
    const {STRING, INTEGER} = app.Sequelize;
    const Menu = app.model.define('menu', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: STRING,
            allowNull: false //不允许为null
        },
        icon: {
            type: STRING,
        },
        shows: {
            type: INTEGER,
        },
        router: {
            type: STRING,
        },
        viewPath: {
            type: STRING,
        },
        order: {
            type: INTEGER
        },
        Pid: {
            type: INTEGER
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_menu' // 定义实际表名
    })
    return Menu;
}