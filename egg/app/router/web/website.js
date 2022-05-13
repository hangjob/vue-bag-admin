module.exports = app => {
    const { router, controller } = app
    router.all('/web/website/all', controller.web.website.all)
    router.all('/web/website/create', controller.web.website.create)
    router.all('/web/website/delete', controller.web.website.delete)
    router.all('/web/website/deletes', controller.web.website.deletes)
    router.all('/web/website/update', controller.web.website.update)
    router.all('/web/website/find', controller.web.website.find)
}
