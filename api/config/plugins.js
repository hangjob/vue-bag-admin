// path: ./config/plugins.js
module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.163.com'),
                port: env('SMTP_PORT', 465),
                auth: {
                    // 发送账号和客户端鉴权码
                    user: env('SMTP_USERNAME', 'itnavs@163.com'),
                    pass: env('SMTP_PASSWORD', 'UCFFVZNTKCVSVSVI'),
                },
            },
            settings: {
                // 默认发送账号
                defaultFrom: 'itnavs@163.com',
                // 默认回复账号
                defaultReplyTo: 'itnavs@163.com',
            },
        },
    },
    transformer: {
        enabled: true,
        config: {
            prefix: '/api/',
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            }
        }
    }
});
