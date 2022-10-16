module.exports = app => {
    const { router, controller } = app
    router.all('/web/leave/all', controller.web.leave.all)
    router.all('/web/leave/create', controller.web.leave.create)
    router.all('/web/leave/delete', controller.web.leave.delete)
    router.all('/web/leave/deletes', controller.web.leave.deletes)
    router.all('/web/leave/update', controller.web.leave.update)
    router.all('/web/leave/find', controller.web.leave.find)
}
