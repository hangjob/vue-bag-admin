module.exports = app => {
    const {router, controller} = app;
    router.all('/upload/uploadImg', controller.upload.uploadImg);
    router.all('/upload/uploadFile', controller.upload.uploadFile);
};
