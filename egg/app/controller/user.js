'use strict';

const baseController = require('./baseController');

class UserController extends baseController {
    userinfo() {

    }

    async login() {
        const {ctx} = this;
        const body = ctx.request.body;
        try {
            this.ctx.validate({
                username: {type: 'string', min: 3, max: 20, require: true},
                password: {type: 'string', min: 3, max: 20, require: true}
            });
            const token = ctx.setToken({password: body.password});
            const result = await ctx.model.Member.findOne({
                where: {
                    username: body.username,
                    password: token
                }
            })
            if (result) {
                this.ctx.cookies.set("token", token, {
                    maxAge: 1000 * 3600 * 0.05,  //cookie存储一天     设置过期时间后关闭浏览器重新打开cookie还存在
                    httpOnly: true,
                    signed: true,     //对cookie进行签名  防止用户修改cookie
                    encrypt: true   //是否对cookie进行加密     如果cookie加密那么获取的时候要对cookie进行解密
                })
                this.result({data: result})
            } else {
                this.result({data: '', message: '没有找到该用户', code: 1002})
            }
        } catch (error) {
            const {errors = []} = error;
            this.result({data: '', message: errors[0], code: 1001})
        }
    }

    async logout() {
        this.ctx.cookies.set("token", null, {maxAge: 0})
        this.result({data: ''})
    }

    register() {

    }
}

module.exports = UserController;
