'use strict'

const baseController = require('./baseController')

class UploadController extends baseController {

    async uploadImg() {
        const { ctx } = this
        const result = await ctx.service.upload.uploadImg()
        this.result({ data: result })
    }

    async uploadFile() {
        const { ctx } = this
        const result = await ctx.service.upload.uploadFile()
        this.result({ data: result })
    }

}

module.exports = UploadController
