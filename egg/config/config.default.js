const path = require('path')
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
            },
        },
    }


    // 验证规则
    config.validate = {
        convert: true,
        widelyUndefined: true,
    }

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1634002379446_8360'

    // add your middleware config here
    config.middleware = ['authority']

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    }

    config.cors = {
        origin: '*',
        allowMethods: 'GET, PUT, POST,DELETE, PATCH',
    }

    // config.io = {
    //     init: {}, // passed to engine.io
    //     namespace: {
    //         '/': {
    //             connectionMiddleware: ['auth'], // 这个是连接中间件， 只在connection的时候触发
    //             packetMiddleware: ['auth'],  // 这个会在每次消息的时候触发
    //         }
    //     },
    // }

    config.cluster = {
        listen: {
            path: '',
            port: 8001,
            hostname: '0.0.0.0',
        },
    }

    config.session = {
        key: 'EGG_SESS_TOKEN',
        maxAge: 1000 * 3600, // 1 天
        httpOnly: true,
        encrypt: true,
    }

    // 设置静态目录
    config.static = {
        prefix: '/public',
        dir: [path.join(appInfo.baseDir, 'app/public')],
        dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
        preload: false,
        maxAge: 31536000, // in prod env, 0 in other envs
        buffer: true, // in prod env, false in other envs
        maxFiles: 1000,
    }

    config.multipart = {
        // 表单 Field 文件名长度限制
        fieldNameSize: 100,
        // 表单 Field 内容大小
        fieldSize: '100kb',
        // 表单 Field 最大个数
        fields: 10,
        // 单个文件大小
        fileSize: '10mb',
        // 允许上传的最大文件数
        files: 10,
        whitelist: ['.txt', '.png', '.jpeg', '.jpg', '.zip', '.xls', '.ppt', '.doc', '.docx', '.pdf', '.xls', '.xlsx'],
    }

    return {
        ...config,
        ...userConfig,
    }
}
