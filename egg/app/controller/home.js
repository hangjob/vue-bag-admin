'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, egg';
    }
    async test(){
        const {ctx} = this;
        console.log(ctx.request)
    }
    async addMneu(){

    }
    async findAll(){
        const {ctx} = this;
        const result = await ctx.model.Menu.findAll()
        console.log(result)
    }
}

module.exports = HomeController;
