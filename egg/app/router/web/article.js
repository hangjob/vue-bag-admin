module.exports = app => {
    const { router, controller } = app
    router.all('/web/article/all', controller.web.article.all)
    router.all('/web/article/page', controller.web.article.page)
    router.all('/web/article/create', controller.web.article.create)
    router.all('/web/article/delete', controller.web.article.delete)
    router.all('/web/article/deletes', controller.web.article.deletes)
    router.all('/web/article/update', controller.web.article.update)
    router.all('/web/article/find', controller.web.article.find)
}
