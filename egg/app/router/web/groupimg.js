module.exports = app => {
    const { router, controller } = app
    router.all('/web/groupimg/all', controller.web.groupimg.all)
    router.all('/web/groupimg/create', controller.web.groupimg.create)
    router.all('/web/groupimg/delete', controller.web.groupimg.delete)
    router.all('/web/groupimg/deletes', controller.web.groupimg.deletes)
    router.all('/web/groupimg/update', controller.web.groupimg.update)
    router.all('/web/groupimg/find', controller.web.groupimg.find)
}
