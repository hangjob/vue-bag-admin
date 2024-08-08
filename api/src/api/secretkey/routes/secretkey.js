module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/secretkey',
            handler: 'secretkey.getSecreKey',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
