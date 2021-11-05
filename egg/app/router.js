'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/test', controller.home.test);
    router.get('/findAll', controller.home.findAll);
    router.get('/addMenu', controller.home.addMenu);
    router.get('/deleteMenu', controller.home.deleteMenu);
    router.get('/findOne', controller.home.findOne);
};
