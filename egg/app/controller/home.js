'use strict';

const baseController = require('./baseController');

class HomeController extends baseController {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, i am 羊先生';
    }

    /**
     * 获取所有路由
     * @returns {Promise<void>}
     */
    async appRouter() {
        const {ctx} = this;
        const result = await ctx.model.Menu.findAll()
        this.result({data: result})
    }

}

module.exports = HomeController;
