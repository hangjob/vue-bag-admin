module.exports = options => {
    // 验证是否在登录状态下
    return async function verify(ctx, next) {
        try {
            const sign = await ctx.get('sign')
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
    }
}
