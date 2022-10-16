module.exports = app => {
    const {router, controller} = app;
    router.all('/btns/all', controller.btns.all);
    router.all('/btns/create', controller.btns.create);
    router.all('/btns/delete', controller.btns.delete);
    router.all('/btns/deletes', controller.btns.deletes);
    router.all('/btns/update', controller.btns.update)
    router.all('/btns/find', controller.btns.find);
};
