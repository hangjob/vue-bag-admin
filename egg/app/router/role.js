module.exports = app => {
    const {router, controller} = app;
    router.all('/role/all', controller.role.all);
    router.all('/role/create', controller.role.create);
    router.all('/role/delete', controller.role.delete);
    router.all('/role/deletes', controller.role.deletes);
    router.all('/role/update', controller.role.update)
    router.all('/role/find', controller.role.find);
};
