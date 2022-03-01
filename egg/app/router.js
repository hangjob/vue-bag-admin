module.exports = app => {
    // 模型添加字段同步数据库
    app.beforeStart(async () => {
        await app.model.sync({alter: true});//force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
    });
    app.io.of('/').route('/', app.io.controller.index.ping)
    // 加载路由文件
    require('./router/branch')(app);
    require('./router/app')(app);
    require('./router/member')(app);
    require('./router/role')(app);
    require('./router/user')(app);
    require('./router/menu')(app);
    require('./router/web/article')(app);
    require('./router/web/channel')(app);
};
