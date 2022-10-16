'use strict'

const baseController = require('../baseController')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class WebWebsiteController extends baseController {

    /**
     * 添加数据
     * @returns {Promise<void>}
     */
    async create() {
        const { ctx } = this
        const result = await ctx.model.Web.Website.create({ ...ctx.request.body })
        this.result({ data: result })
    }

    /**
     * 删除数据
     * @returns {Promise<void>}
     */
    async delete() {
        const { ctx } = this
        const { id } = ctx.request.body
        const result = await ctx.model.Web.Website.destroy({
            where: { id },
        })
        this.result({ data: result })
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
    async deletes() {
        const { ctx } = this
        const { ids } = ctx.request.body
        const result = await ctx.model.Web.Website.destroy({
            where: {
                id: [...ids],
            },
        })
        this.result({ data: result })
    }


    /**
     * 查找
     * @returns {Promise<void>}
     */
    async find() {
        const { ctx } = this
        const param = ctx.request.body
        const result = await ctx.model.Web.Website.findOne({
            where: param,
        })
        this.result({ data: result })
    }

    /**
     * 获取所有数据，可以带条件查询
     * @returns {Promise<void>}
     */
    async all() {
        const { ctx } = this
        const param = ctx.request.body || {}
        const where = {}
        for (const paramKey in param) {
            where[paramKey] = { [Op.like]: `%${param[paramKey]}%` } // 模糊查找
        }
        const result = await ctx.model.Web.Website.findAll({
            where: { ...where },
        })
        this.result({ data: result })
    }

    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async update() {
        const { ctx } = this
        const body = ctx.request.body
        const result = await ctx.model.Web.Website.update({
            ...body,
        }, {
            where: {
                id: body.id,
            },
        })
        this.result({ data: result })
    }
}

module.exports = WebWebsiteController
