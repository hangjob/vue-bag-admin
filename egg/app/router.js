'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;

    // 模型添加字段同步数据库
    app.beforeStart(async () => {
        await app.model.sync({ alter: true });//force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
    });
    router.get('/', controller.home.index);
    router.get('/test', controller.home.test);
    router.get('/findAll', controller.home.findAll);
    router.get('/addMenu', controller.home.addMenu);
    router.get('/deleteMenu', controller.home.deleteMenu);
    router.get('/findOne', controller.home.findOne);
};
