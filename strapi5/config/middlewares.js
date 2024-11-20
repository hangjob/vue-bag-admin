module.exports = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": ["'self'", "data:", "blob:", "https://vipbic.oss-cn-beijing.aliyuncs.com"],
                    "media-src": ["'self'", "data:", "blob:", "https://vipbic.oss-cn-beijing.aliyuncs.com"],
                    upgradeInsecureRequests: null,
                },
            },
            referrerPolicy: {
                policy: ["origin"],
            }
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    'global::interception'
];
