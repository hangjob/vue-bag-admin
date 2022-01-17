module.exports = options => {
    // 验证是否在登录状态下
    return async function verify(ctx, next) {
        const filter = ['/user/login', '/user/logout'];
        const result = filter.findIndex(item => ctx.request.url.indexOf(item) > -1) !== -1;
        if (result) {
            await next();
        } else {
            const token = ctx.cookies.get('token', {signed: false, encrypt: true})
            console.log(token)
            if (token) {
                const result = await ctx.model.Member.findOne({where: {password: token}})
                if (result) {
                    await next();
                } else {
                    ctx.response.status = 403;
                    ctx.body = {code: 9999, data: '', message: '你的登录信息已过期，请重新登录'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: 9999, data: '', message: '你的登录信息已过期，请重新登录'}
            }
        }
    };
};
