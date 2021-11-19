/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;

    // 模型添加字段同步数据库
    app.beforeStart(async () => {
        await app.model.sync({alter: true});//force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
    });
    router.get('/', controller.home.index);
    router.all('/test', controller.home.test);
    router.all('/findAll', controller.home.findAll);
    router.all('/addMenu', controller.home.addMenu);
    router.all('/deleteMenu', controller.home.deleteMenu);
    router.all('/deleteMenus', controller.home.deleteMenus);
    router.all('/editMenu', controller.home.editMenu)
    router.all('/findOne', controller.home.findOne);
    router.all('/appRouter', controller.home.appRouter);
};
