module.exports = app => {
    const {router, controller} = app;
    router.all('/logs/all', controller.logs.all);
    router.all('/logs/create', controller.logs.create);
    router.all('/logs/delete', controller.logs.delete);
    router.all('/logs/deletes', controller.logs.deletes);
    router.all('/logs/update', controller.logs.update)
    router.all('/logs/find', controller.logs.find);
};
