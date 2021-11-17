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
        const {id} = ctx.request.body;
        const result = await ctx.model.Menu.destroy({
            where: {id}
        })
        this.result({data: result})
    }

    async deleteMenus() {
        const {ctx} = this;
        const {ids} = ctx.request.body;
        const result = await ctx.model.Menu.destroy({
            where: {
                id: [...ids]
            }
        })
        this.result({data: result})
    }


    async findOne() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Menu.findOne({
            where: {id}
        })
        this.result({data: result})
    }

    async findAll() {
        const {ctx} = this;
        const result = await ctx.model.Menu.findAll()
        this.result({data: result})
    }

    async editMenu() {
        const {ctx} = this;
        const body = ctx.request.body;
        const result = await ctx.model.Menu.update({
            ...body
        })
        this.result({data: result})
    }
}

module.exports = HomeController;
