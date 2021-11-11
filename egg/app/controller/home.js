'use strict';

const baseController = require('./baseController');

class HomeController extends baseController {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, egg';
    }

    async test() {
        const {ctx} = this;
        console.log(ctx.request)
    }

    async addMenu() {
        const {ctx} = this;
        const result = await ctx.model.Menu.create({...ctx.request.body})
        this.result({data: result})
    }

    async deleteMenu() {
        const {ctx} = this;
        const result = await ctx.model.Menu.destroy({
            where: {
                id: 7
            }
        })
        console.log(result)
    }

    async findOne() {
        const {ctx} = this;
        const result = await ctx.model.Menu.findOne({
            where: {
                id: 6
            }
        })
        ctx.body = result;
        console.log(result)
    }

    async findAll() {
        const {ctx} = this;
        const result = await ctx.model.Menu.findAll()
        this.result({data: result})
    }
}

module.exports = HomeController;
