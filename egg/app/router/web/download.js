module.exports = app => {
    const { router, controller } = app
    router.all('/web/download/all', controller.web.download.all)
    router.all('/web/download/page', controller.web.download.page)
    router.all('/web/download/create', controller.web.download.create)
    router.all('/web/download/delete', controller.web.download.delete)
    router.all('/web/download/deletes', controller.web.download.deletes)
    router.all('/web/download/update', controller.web.download.update)
    router.all('/web/download/find', controller.web.download.find)
}
