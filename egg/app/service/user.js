const Service = require('egg').Service

class UserService extends Service {
    async getUserinfo() {
        const {ctx} = this
        const token = ctx.cookies.get('token', {signed: false, encrypt: true})
        if (token) {
            return await ctx.model.Member.findOne({
                where: {password: token},
                attributes: {exclude: ['password']},
            })
        } else {
            return false;
        }
    }

    async superadmin() {
        const userinfo = await this.getUserinfo();
        return {
            userinfo: userinfo,
            isSuperadmin: userinfo.id === 1
        }
    }
}


module.exports = UserService
