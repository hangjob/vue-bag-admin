module.exports = options => {
    // 验证是否在登录状态下
    return async function verify(ctx, next) {
        try {
            const sign = ctx.get('sign')
            let decodeData = await ctx.nodersa.rsaDecrypt(sign)
            decodeData = JSON.parse(decodeData)
            const nanoid = await ctx.service.redis.get(decodeData.nanoid);
            if (decodeData.name !== 'bag' || nanoid) {
                ctx.response.status = 403
                ctx.body = {code: 9999, data: '', message: 'sign签名信息无效'}
            } else {
                await ctx.service.redis.set(decodeData.nanoid, decodeData.nanoid, 3)
                const req = await ctx.request;
                const apis = []
                const lastUrls = req.url.split('/');
                if (apis.indexOf(lastUrls[lastUrls.length - 1]) > -1) {
                    ctx.body = {code: 1, data: '', message: '演示数据不予许编辑删除'}
                } else {
                    await next()
                }
            }
        } catch (e) {
            ctx.response.status = 403
            ctx.body = {code: 9999, data: '', message: '系统异常'}
        }
    }
}
