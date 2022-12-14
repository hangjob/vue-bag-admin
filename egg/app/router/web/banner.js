module.exports = app => {
    const { router, controller } = app
    router.all('/web/banner/all', controller.web.banner.all)
    router.all('/web/banner/create', controller.web.banner.create)
    router.all('/web/banner/delete', controller.web.banner.delete)
    router.all('/web/banner/deletes', controller.web.banner.deletes)
    router.all('/web/banner/update', controller.web.banner.update)
    router.all('/web/banner/find', controller.web.banner.find)
    router.all('/web/banner/page', controller.web.banner.page)
}
