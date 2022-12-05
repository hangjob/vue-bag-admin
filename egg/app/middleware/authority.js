module.exports = options => {
    // 验证是否在登录状态下
    return async function verify(ctx, next) {
        try {
            // const sign = ctx.get('sign')
            // let decodeData = await ctx.nodersa.rsaDecrypt(sign)
            // decodeData = JSON.parse(decodeData)
            // const nanoid = await ctx.service.redis.get(decodeData.nanoid)
             // ctx.response.status = 403
            const req = await ctx.request
            const apis = ['edit', 'update', 'delete', 'deletes', 'updatePas']
            const lastUrls = req.url.split('/')
            if (apis.indexOf(lastUrls[lastUrls.length - 1]) > -1) {
                ctx.body = { code: 1, data: '', message: '演示数据不予许编辑删除' }
            } else {
                await next()
            }
        } catch (e) {
            ctx.response.status = 403
            ctx.body = { code: 9999, data: '', message: '系统异常' }
        }
    }
}
