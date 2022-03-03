module.exports = app => {
    const { router, controller, io } = app;
    // socket.io
    io.of('/').route('/send', io.controller.index.send);
};
