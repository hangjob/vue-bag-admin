'use strict'

const baseController = require('./baseController')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class MemberController extends baseController {

    /**
     * 添加数据
     * @returns {Promise<void>}
     */
    async create() {
        const {ctx} = this
        const body = ctx.request.body
        try {
            this.ctx.validate({
                username: {type: 'string', min: 2, max: 20, require: true},
            })

            const resultUsername = await ctx.model.Member.findOne({
                where: {
                    username: body.username,
                },
            })
            if (resultUsername) {
                this.result({data: '', message: '该用户名已存在', code: 1003})
            } else {
                let password = body.password
                if (password) {
                    this.ctx.validate({
                        password: {type: 'string', min: 2, max: 20, require: true},
                    })
                } else {
                    password = ctx.randomString()
                }
                body.roles = 15; // 默认角色
                const result = await ctx.model.Member.create({
                    ...ctx.request.body,
                    password: ctx.setToken({password: password, username: ctx.request.body.username}),
                })
                this.result({data: result})
            }
        } catch (error) {
            const {errors = []} = error
            this.result({data: '', message: errors[0].field + ' ' + errors[0].message, code: 1001})
        }
    }

    /**
     * 删除数据
     * @returns {Promise<void>}
     */
    async delete() {
        const {ctx} = this
        const {id} = ctx.request.body
        if (Number(id) === 1) {
            this.result({data: '', message: '禁止删除该条数据', code: 1001})
        } else {
            const result = await ctx.model.Member.destroy({
                where: {id},
            })
            this.result({data: result})
        }
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
    async deletes() {
        const {ctx} = this
        const {ids} = ctx.request.body
        const result = await ctx.model.Member.destroy({
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
        const result = await ctx.model.Member.findOne({
            where: {id},
        })
        const rolesDetail = await ctx.model.Role.findOne({
            where: {id: result.roles},
        })
        result.setDataValue('rolesDetail', rolesDetail)
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
        // attributes : 查询字段信息，可以通过 exclude 来指定不查询的字段，或者可以直接传入数组查询数组中的字段( attributes: ['id', 'nickname'] )
        // include : 指定查询的关联，as 必须和定义关联关系的 as 相同，model 指定关联的模型
        const result = await ctx.model.Member.findAll({
            where: {...where},
            include: [{model: ctx.model.Branch, as: 'branch'}],
        })

        for (let i = 0; i < result.length; i++) {
            const item = result[i]
            const rolesDetail = await ctx.model.Role.findOne({
                where: {id: item.roles},
            })
            item.setDataValue('rolesDetail', rolesDetail)
        }
        this.result({data: result})
    }


    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async update() {
        const {ctx} = this
        const body = ctx.request.body
        const result = await ctx.model.Member.update({
            ...body,
        }, {
            where: {
                id: body.id,
            },
        })
        this.result({data: result})
    }

    /**
     * 修改密码
     * @returns {Promise<void>}
     */
    async updatePas() {
        const {ctx} = this
        const body = ctx.request.body
        try {
            this.ctx.validate({
                password: {type: 'string', min: 3, max: 20, require: true},
            })
            const result = await ctx.model.Member.update({
                password: ctx.setToken({password: body.password, username: body.username}),
            }, {
                where: {
                    id: body.id,
                },
            })
            this.result({data: result})
        } catch (error) {
            const {errors = []} = error
            this.result({data: '', message: errors[0].field + ' ' + errors[0].message, code: 1001})
        }
    }

    async getPas() {
        const {ctx} = this
        const body = ctx.request.body
        try {
            this.ctx.validate({
                password: {type: 'string', require: true},
            })
            this.result({data: ctx.getDecodeToken(body.password)})
        } catch (error) {
            const {errors = []} = error
            this.result({data: '', message: errors[0].field + ' ' + errors[0].message, code: 1001})
        }
    }
}

module.exports = MemberController
