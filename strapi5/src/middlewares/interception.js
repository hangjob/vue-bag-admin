module.exports = (config, {strapi}) => {
    return async (ctx, next) => {
        const $utils = strapi.$utils;
        const redisClient = strapi.redis.connections.default.client;
        const ip = ctx.request.ip;
        if (ctx.request.url.startsWith(strapi.config.api.rest.prefix)) {
            if (ctx.request.header.sing) {
                const sing = await redisClient.get(ctx.request.header.sing)
                if (!sing) {
                    const data = $utils.aesDecrypt(ctx.request.header.sing)
                    if (data?.name === 'bag') {
                        await redisClient.set(ctx.request.header.sing, 1);
                        await redisClient.expire(ctx.request.header.sing, 60 * 10); // 1分钟过期
                        await next();
                    } else {
                        return ctx.throw(403, 'invalid signature')
                    }
                } else {
                    return ctx.throw(403, 'signature exists')
                }
            } else {
                return ctx.throw(403, 'missing sing signature')
            }
        } else {
            await next();
        }
    }
}
