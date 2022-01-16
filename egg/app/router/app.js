module.exports = app => {
    const {router, controller} = app;
    router.all('/app/router', controller.home.appRouter);
    router.all('/app/library',controller.home.library)
};
