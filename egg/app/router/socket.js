module.exports = app => {
    const { router, controller, io } = app;
    io.of('/').route('/send', io.controller.index.send);
};
