module.exports = app => {
    const { router, controller } = app
    router.all('/web/material/all', controller.web.material.all)
    router.all('/web/material/create', controller.web.material.create)
    router.all('/web/material/delete', controller.web.material.delete)
    router.all('/web/material/deletes', controller.web.material.deletes)
    router.all('/web/material/update', controller.web.material.update)
    router.all('/web/material/find', controller.web.material.find)
}
