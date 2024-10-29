module.exports = () => ({
    'strapi-plugin-utils': {
        enabled: true,
        resolve: './src/plugins/strapi-plugin-utils'
    },
    redis: {
        config: {
            settings:{
                debug: false,
                enableRedlock: true,
            },
            connections: {
                default: {
                    connection: {
                        host: '127.0.0.1',
                        port: 6379,
                        db: 0,
                    },
                    settings: {
                        debug: false,
                    },
                },
            },
        },
    },
});
