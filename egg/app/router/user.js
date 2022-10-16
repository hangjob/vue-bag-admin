module.exports = app => {
    const {router, controller} = app;
    router.all('/user/login', controller.user.login);
    router.all('/user/logout', controller.user.logout);
    router.all('/user/userinfo', controller.user.userinfo);
    router.all('/user/sendEmail', controller.user.sendEmail);
    router.all('/user/siteIpInfo', controller.user.siteIpInfo);
};
