const Controller = require('egg').Controller
module.exports = class baseController extends Controller {
    result({ code = 1, data = '', message = '请求成功', status = 200 }) {
        const { ctx } = this
        if (code !== 1) {
            message = message === '请求成功' ? '请求失败' : message
        }
        ctx.response.status = status
        ctx.body = { code, data, message }
    }
}
