/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {{security: {csrf: {headerName: string}}}}
     **/
    const config = exports = {
        security: {
            csrf: {
                enable: false,
            }
        }
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1634002379446_8360';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root2', // 数据库用户名
        password: '123456', // 数据库密码
        database: 'egg',
        define: { // model的全局配置
            timestamps: true, // 添加create,update,delete时间戳
            paranoid: false, // 添加软删除
            freezeTableName: true, // 防止修改表名为复数
            underscored: false // 防止驼峰式字段被默认转为下划线
        },
        timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    }

    config.cors = {
        origin: '*',
        allowMethods: 'GET, PUT, POST,DELETE, PATCH',
    };

    return {
        ...config,
        ...userConfig,
    };
};
