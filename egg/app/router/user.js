module.exports = app => {
    const {router, controller} = app;
    router.all('/user/login', controller.user.login);
};
