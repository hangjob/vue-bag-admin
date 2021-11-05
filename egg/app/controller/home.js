'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
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
        const result = await ctx.model.Menu.create({name: 'dad'})
        console.log(result)
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
        ctx.body = result;
        console.log(result)
    }
}

module.exports = HomeController;
