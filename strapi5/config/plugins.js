module.exports = ({env}) => ({
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
    upload: {
        config: {
            provider: 'strapi-provider-upload-oss', // full package name is required
            providerOptions: {
                accessKeyId: env('ACCESS_KEY_ID'),  // required
                accessKeySecret: env('ACCESS_KEY_SECRET'), // required
                region: env('REGION'), // required
                bucket: env('BUCKET'), // required
                baseUrl: env('BASE_URL'),
                timeout: env('TIMEOUT'),
                uploadPath:env('UPLOAD_PATH'),
                secure: env.bool('OSS_SECURE',true),
                internal: env.bool('OSS_INTERNAL', false),
            },
            breakpoints: {
                xlarge: 5000,
                large: 2500,
                small: 500,
            },
        }
    },
    'media-prefix': {
        enabled: true,
    },
});
