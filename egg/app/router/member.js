module.exports = app => {
    const {router, controller} = app;
    router.all('/member/all', controller.member.all);
    router.all('/member/create', controller.member.create);
    router.all('/member/delete', controller.member.delete);
    router.all('/member/deletes', controller.member.deletes);
    router.all('/member/update', controller.member.update)
    router.all('/member/find', controller.member.find);
    router.all('/member/updatePas', controller.member.updatePas);
    router.all('/member/getPas', controller.member.getPas);
};
