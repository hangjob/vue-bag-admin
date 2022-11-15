'use strict'

const baseController = require('./baseController')

class UserController extends baseController {
    async userinfo() {
        const { ctx } = this
        const token = ctx.cookies.get('token', { signed: false, encrypt: true })
        if (token) {
            const result = await ctx.model.Member.findOne({
                where: { password: token },
                attributes: { exclude: ['password'] },
            })
            if (result) {
                const rolesDetail = await ctx.model.Role.findOne({
                    where: { id: result.roles },
                })
                result.setDataValue('rolesDetail', rolesDetail)
                this.result({ data: result })
            } else {
                this.result({ data: '', message: '没有找到该用户', code: 1002 })
            }
        } else {
            this.result({ data: '', message: '亲，您还未登录', code: 1001 })
        }
    }

    async login() {
        const { ctx } = this
        const body = ctx.request.body
        try {
            this.ctx.validate({
                username: { type: 'string', min: 2, max: 20, require: true },
                password: { type: 'string', min: 6, max: 20, require: true },
            })
            const token = ctx.setToken({ password: body.password, username: body.username })
            console.log(body, token)
            const result = await ctx.model.Member.findOne({
                where: {
                    username: body.username,
                    password: token,
                },
                attributes: { exclude: ['password'] }, // 排除该字段显示
            })
            console.log(result)
            if (result) {
                this.ctx.cookies.set('token', token, {
                    maxAge: 1000 * 3600 * 30,  //cookie存储一天     设置过期时间后关闭浏览器重新打开cookie还存在
                    httpOnly: true,
                    signed: true,     //对cookie进行签名  防止用户修改cookie
                    encrypt: true,   //是否对cookie进行加密     如果cookie加密那么获取的时候要对cookie进行解密
                })
                this.result({ data: result })
            } else {
                this.result({ data: '', message: '没有找到该用户', code: 1002 })
            }
        } catch (error) {
            const { errors = [] } = error
            this.result({ data: '', message: errors[0].message, code: 1001 })
        }
    }

    async logout() {
        this.ctx.cookies.set('token', null, { maxAge: 0 })
        this.result({ data: '' })
    }

    register() {

    }

    async siteIpInfo() {
        const { data, error } = await this.ctx.service.user.ipInfo()
        if (error) {
            this.result({ data: '', message: error, code: 1001 })
        } else {
            this.result({ data: data })
        }
    }

    async sendEmail() {
        const { ctx } = this
        const body = ctx.request.body
        try {
            this.ctx.validate({
                userEmail: { type: 'string', min: 2, max: 20, require: true },
            })
            const res = await this.ctx.email.sendEmail({ userEmail: body.userEmail, title: '下载Bga开源博客门户系统' })
            if (res) {
                this.result({ data: res })
            } else {
                this.result({ data: '', message: res, code: 1001 })
            }
        } catch (e) {
            this.result({ data: '', message: e, code: 1001 })
        }
    }
}

module.exports = UserController
