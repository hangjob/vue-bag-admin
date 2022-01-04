module.exports = options => {
    // 验证是否在登录状态下
    return async function verify(ctx, next) {
        const filter = ['login'];
        if (filter.indexOf(ctx.request.url) !== -1) {
            await next();
        } else {
            const token = ctx.cookies.get('token', {signed: false})

            if (token) {
                await next();
            } else {
                ctx.response.status = 403;
                ctx.body = {code: 9999, data: '', message: '你的登录信息已过期，请重新登录'}
            }
        }
    };
};
