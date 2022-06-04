module.exports = app => {
    const { router, controller } = app
    router.all('/web/links/all', controller.web.links.all)
    router.all('/web/links/create', controller.web.links.create)
    router.all('/web/links/delete', controller.web.links.delete)
    router.all('/web/links/deletes', controller.web.links.deletes)
    router.all('/web/links/update', controller.web.links.update)
    router.all('/web/links/find', controller.web.links.find)
}
