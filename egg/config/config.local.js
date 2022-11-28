module.exports = appInfo => {
    const config = {};
    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'vite_itnavs_com', // 数据库用户名
        password: 'MRwiczzP3aGS66rA', // 数据库密码
        database: 'vite_itnavs_com',
        define: { // model的全局配置
            timestamps: true, // 添加create,update,delete时间戳
            paranoid: false, // 添加软删除
            freezeTableName: true, // 防止修改表名为复数
            underscored: false // 防止驼峰式字段被默认转为下划线
        }
    }
    config.redis = {
        clients: {
            bag: {                 // instanceName. See below
                port: 6379,          // Redis port
                host: '127.0.0.1',   // Redis host
                password: '123456',
                db: 0,
            },
        },
    }
    return config;
}
