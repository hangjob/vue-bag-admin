'use strict'

const Controller = require('egg').Controller

class IndexSocketController extends Controller {

    async ping() {
        const { ctx, app } = this
        ctx.socket.emit('res', `Hi! I've got your message`)
    }

    async send() {
        const { ctx, app } = this
        // const namespace = app.io.of('/');
        // namespace.sockets['socketId'].emit('message', '111');
    }
}

module.exports = IndexSocketController
