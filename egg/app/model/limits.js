module.exports = app => {
    const {STRING, INTEGER} = app.Sequelize;
    return app.model.define('menu', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: STRING,
            comment: '类型，列如admin edit',
            allowNull: false //不允许为null
        },
        uid: {
            type: INTEGER,
            comment: '用户id'
        }
    }, {
        timestamps: false,
        tableName: 'yxs_limits' // 定义实际表名
    });
}

