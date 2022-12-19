'use strict'

const baseController = require('../baseController')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class WebArticleController extends baseController {

    /**
     * 添加数据
     * @returns {Promise<void>}
     */
    async create() {
        const {ctx} = this
        const result = await ctx.model.Web.Article.create({...ctx.request.body})
        this.result({data: result})
    }

    /**
     * 删除数据
     * @returns {Promise<void>}
     */
    async delete() {
        const {ctx} = this
        const {id} = ctx.request.body
        const result = await ctx.model.Web.Article.destroy({
            where: {id},
        })
        this.result({data: result})
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
    async deletes() {
        const {ctx} = this
        const {ids} = ctx.request.body
        const result = await ctx.model.Web.Article.destroy({
            where: {
                id: [...ids],
            },
        })
        this.result({data: result})
    }


    /**
     * 查找
     * @returns {Promise<void>}
     */
    async find() {
        const {ctx} = this
        const {id} = ctx.request.body
        const result = await ctx.model.Web.Article.findOne({
            where: {id},
            include: [
                {model: ctx.model.Web.Channel, as: 'channel'},
                {
                    model: ctx.model.Web.Like,
                    as: 'like',
                    include: [{
                        model: ctx.model.Member,
                        as: 'member',
                        attributes: {exclude: ['password', 'nanoid', 'email', 'phone']}
                    }]
                },
                {
                    model: ctx.model.Member,
                    as: 'member',
                    // include: [{model: ctx.model.Web.Article, as: 'article'}],
                    attributes: {exclude: ['password', 'nanoid', 'email', 'phone']}
                },
            ],
        })
        const {count} = await ctx.model.Web.Article.findAndCountAll({
            where: {'user_id': result.user_id},
        });
        const userinfo = await ctx.service.user.getUserinfo()
        if (userinfo) {
            const isLike = await ctx.model.Web.Like.findOne({
                where: {type: 1, pid: result.id, user_id: userinfo.id},
            })
            result.setDataValue('isLike', isLike);
        } else {
            result.setDataValue('isLike', false);
        }
        await ctx.model.Web.Article.increment({views: parseInt(Math.random() * 10)}, {where: {id}})
        result.setDataValue('article_count', count);
        this.result({data: result})
    }

    /**
     * 获取所有数据，可以带条件查询
     * @returns {Promise<void>}
     */
    async all() {
        const {ctx} = this
        const param = ctx.request.body || {}
        const where = {}
        for (const paramKey in param) {
            where[paramKey] = { [Op.like]: `%${param[paramKey]}%` } // 模糊查找
        }
        // 角色过滤数据
        const {isSuperadmin, userinfo} = await ctx.service.user.superadmin();
        if (!isSuperadmin) {
            where.user_id = userinfo.id;
        }
        const result = await ctx.model.Web.Article.findAll({
            where: {...where},
        })
        this.result({data: result})
    }

    async page() {
        const { ctx } = this
        const { currentPage = 1, pageSize = 10, ...params } = ctx.request.body
        const where = {}
        for (const whereKey in params) {
            if (params[whereKey]) {
                where[whereKey] = { [Op.like]: `%${params[whereKey]}%` } // 模糊查詢 https://www.sequelize.com.cn/core-concepts/model-querying-basics
            }
        }
        const result = await ctx.model.Web.Article.findAll({
            where: { ...where },
            limit: parseInt(pageSize),
            offset: (currentPage - 1) * pageSize,
        })
        const total = await ctx.model.Web.Article.count({ where: where })
        this.result({ data: { rows: result, total, pageSize, currentPage } })
    }

    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async update() {
        const {ctx} = this
        const body = ctx.request.body
        const result = await ctx.model.Web.Article.update({
            ...body,
        }, {
            where: {
                id: body.id,
            },
        })
        this.result({data: result})
    }
}

module.exports = WebArticleController
