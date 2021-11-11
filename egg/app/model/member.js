module.exports = app => {
    const {STRING, INTEGER} = app.Sequelize;
    return app.model.define('menu', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: STRING,
        },
        password: {
            type: STRING,
        },
        sex: {
            type: INTEGER
        },
        age: {
            type: INTEGER
        }
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_member' // 定义实际表名
    });
}

