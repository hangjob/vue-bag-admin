// register.ts
module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/user-register',
            handler: 'user-profile.register',
        },
        {
            method: 'POST',
            path: '/user-login',
            handler: 'user-profile.login',
        },
    ]
}
