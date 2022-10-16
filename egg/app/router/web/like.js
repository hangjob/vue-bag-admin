module.exports = app => {
    const { router, controller } = app
    router.all('/web/like/all', controller.web.like.all)
    router.all('/web/like/create', controller.web.like.create)
    router.all('/web/like/delete', controller.web.like.delete)
    router.all('/web/like/deletes', controller.web.like.deletes)
    router.all('/web/like/update', controller.web.like.update)
    router.all('/web/like/find', controller.web.like.find)
}
