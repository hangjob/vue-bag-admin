'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async ping() {
        const {ctx, app} = this;
        const message = ctx.args[0];
        ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
    }
}

module.exports = IndexController;
