module.exports = app => {
    const {router, controller} = app;
    router.all('/branch/all', controller.branch.all);
    router.all('/branch/create', controller.branch.create);
    router.all('/branch/delete', controller.branch.delete);
    router.all('/branch/deletes', controller.branch.deletes);
    router.all('/branch/update', controller.branch.update)
    router.all('/branch/find', controller.branch.find);
};
