module.exports = app => {
    const {router, controller} = app;
    router.all('/menu/all', controller.menu.all);
    router.all('/menu/create', controller.menu.create);
    router.all('/menu/delete', controller.menu.delete);
    router.all('/menu/deletes', controller.menu.deletes);
    router.all('/menu/update', controller.menu.update)
    router.all('/menu/find', controller.menu.find);
    router.all('/menu/page', controller.menu.page);
};
