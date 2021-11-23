'use strict';

const baseController = require('./baseController');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class HomeController extends baseController {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, egg';
    }


    async test() {
        const {ctx} = this;
        console.log(ctx.request)
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

    /**
     * 添加路由
     * @returns {Promise<void>}
     */
    async addMenu() {
        const {ctx} = this;
        const result = await ctx.model.Menu.create({...ctx.request.body})
        this.result({data: result})
    }

    /**
     * 删除路由
     * @returns {Promise<void>}
     */
    async deleteMenu() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Menu.destroy({
            where: {id}
        })
        this.result({data: result})
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
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


    /**
     * 查找
     * @returns {Promise<void>}
     */
    async findOne() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Menu.findOne({
            where: {id}
        })
        this.result({data: result})
    }

    /**
     * 获取所有数据，可以带条件查询
     * @returns {Promise<void>}
     */
    async findAll() {
        const {ctx} = this;
        const {ks} = ctx.request.body;
        const where = {}
        if (ks) {
            where.name = {[Op.like]: `%${ks}%`} // 模糊查詢 https://www.sequelize.com.cn/core-concepts/model-querying-basics
        }
        const result = await ctx.model.Menu.findAll({
            where: {...where}
        })
        this.result({data: result})
    }

    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async editMenu() {
        const {ctx} = this;
        const body = ctx.request.body;
        console.log(body)
        const result = await ctx.model.Menu.update({
            ...body,

        }, {
            where: {
                id: body.id
            }
        })
        this.result({data: result})
    }
}

module.exports = HomeController;
