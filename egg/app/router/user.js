module.exports = app => {
    const {router, controller} = app;
    router.all('/user/login', controller.user.login);
    router.all('/user/logout', controller.user.logout);
    router.all('/user/userinfo', controller.user.userinfo);
};
