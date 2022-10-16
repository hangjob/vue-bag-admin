module.exports = app => {
    // 模型添加字段同步数据库
    app.beforeStart(async () => {
        await app.model.sync({alter: true});//force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
    });
    // 加载路由文件
    require('./router/branch')(app);
    require('./router/app')(app);
    require('./router/member')(app);
    require('./router/role')(app);
    require('./router/user')(app);
    require('./router/menu')(app);
    require('./router/upload')(app);
    require('./router/btns')(app);
    // require('./router/socket')(app); // 开启之后需要连接 有超时阻塞
    require('./router/web/article')(app);
    require('./router/web/channel')(app);
    require('./router/web/antistop')(app);
    require('./router/web/website')(app);
    require('./router/web/leave')(app);
    require('./router/web/like')(app);
    require('./router/web/banner')(app);
    require('./router/web/links')(app);
    require('./router/web/download')(app);
    require('./router/web/groupimg')(app);
    require('./router/web/material')(app);
};
