module.exports = options => {
    // 验证是否在登录状态下
    return async function verify(ctx, next) {
        const filter = ['/user/login', '/user/logout']
        const sign = await ctx.get('sign')
        try {
            let decodeData = await ctx.nodersa.rsaDecrypt(sign)
            decodeData = JSON.parse(decodeData)
            const nanoid = await ctx.service.redis.get(decodeData.nanoid);
            if (decodeData.name !== 'bag' || nanoid) {
                ctx.response.status = 403
                ctx.body = {code: 9999, data: '', message: 'sign签名信息无效'}
            } else {
                await ctx.service.redis.set(decodeData.nanoid, decodeData.nanoid, 3)
                await next()
            }
        } catch (e) {
            ctx.response.status = 403
            ctx.body = {code: 9999, data: '', message: '系统异常'}
        }
        // const result = filter.findIndex(item => ctx.request.url.indexOf(item) > -1) !== -1
        // if (result) {
        //     await next()
        // } else {
        //     const token = ctx.cookies.get('token', { signed: false, encrypt: true })
        //     console.log(token)
        //     if (token) {
        //         const result = await ctx.model.Member.findOne({ where: { password: token } })
        //         if (result) {
        //             await next()
        //         } else {
        //             ctx.response.status = 403
        //             ctx.body = { code: 9999, data: '', message: '你的登录信息已过期，请重新登录' }
        //         }
        //     } else {
        //         ctx.response.status = 403
        //         ctx.body = { code: 9999, data: '', message: '你的登录信息已过期，请重新登录' }
        //     }
        // }
    }
}
