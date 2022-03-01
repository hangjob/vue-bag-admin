module.exports = app => {
    const { router, controller } = app
    router.all('/web/channel/all', controller.web.channel.all)
    router.all('/web/channel/create', controller.web.channel.create)
    router.all('/web/channel/delete', controller.web.channel.delete)
    router.all('/web/channel/deletes', controller.web.channel.deletes)
    router.all('/web/channel/update', controller.web.channel.update)
    router.all('/web/channel/find', controller.web.channel.find)
}
