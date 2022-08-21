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

    async ipInfo() {
        const {ctx} = this;
        const ip = '117.147.17.218';
        const url = `https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=${ip}&co=&resource_id=6006&t=${+new Date()}&ie=utf8&oe=utf8&format=json&tn=baidu`
        try {
            const result = await ctx.curl(url, {
                method: 'get', // 设置请求方式 默认是GET
                dataType: 'json',
            });
            return {
                data: result.data.data[0]
            }
        } catch (e) {
            return {
                data: {},
                error: '获取失败'
            }
        }
    }
}


module.exports = UserService
