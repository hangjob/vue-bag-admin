module.exports = app => {
    const {router, controller} = app
    router.all('/web/antistop/all', controller.web.antistop.all)
    router.all('/web/antistop/create', controller.web.antistop.create)
    router.all('/web/antistop/delete', controller.web.antistop.delete)
    router.all('/web/antistop/deletes', controller.web.antistop.deletes)
    router.all('/web/antistop/update', controller.web.antistop.update)
    router.all('/web/antistop/find', controller.web.antistop.find)
}
