const Service = require('egg').Service

const dbConfig = ['bag'] // 配置文件中的名称，便于读取

class RedisService extends Service {

    // 60s 过期
    async set(key, val, expir = 60, db = 0) {
        const { redis } = this.app
        const dbRedis = redis.clients.get(dbConfig[db])
        if (expir === 0) {
            return await dbRedis.set(key, JSON.stringify(val))
        }
        return await dbRedis.set(key, JSON.stringify(val), 'EX', expir)
    }

    async get(key, db = 0) {
        const { redis } = this.app
        const dbRedis = await redis.clients.get(dbConfig[db]).get(key)
        return JSON.parse(dbRedis)

    }
}


module.exports = RedisService
