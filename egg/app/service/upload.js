const Service = require('egg').Service
const fs = require('fs')
const path = require('path')
const pump = require('mz-modules/pump')
const mkdirp = require('mkdirp')
const dayjs = require('dayjs')
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole')

class UploadService extends Service {

    // 上传图片
    async uploadImg() {
        const { ctx } = this
        const parts = ctx.multipart({ autoFields: true })
        const urls = []
        let targetDir = '/public/upload/image/' + dayjs().format('YYYY-MM-DD')
        const dir = path.join(this.config.baseDir, 'app', targetDir)
        await mkdirp.sync(dir)
        let stream
        while ((stream = await parts()) != null) {
            const fileType = stream.mimeType.split('/')[1]
            const filename = dayjs().valueOf() + '.' + fileType || stream.filename.toLowerCase()
            const target = path.join(dir, filename)
            urls.push(`${targetDir}/${filename}`)
            const writeStream = await fs.createWriteStream(target)
            await pump(stream, writeStream)
        }
        console.log(ctx.request)
        return urls[0]
    }

    // 上传文件
    async uploadFile() {
        const { ctx } = this
        const urls = []
        const stream = await ctx.getFileStream()
        let targetDir = '/public/upload/file/' + dayjs().format('YYYY-MM-DD')
        const dir = path.join(this.config.baseDir, 'app', targetDir)
        await mkdirp.sync(dir)
        const fileType = stream.filename.toLowerCase().split('.')
        const filename = dayjs().valueOf() + '.' + fileType[fileType.length - 1]
        // 生成写入路径
        const target = path.join(dir, filename)
        const writeStream = await fs.createWriteStream(target) // 写入流
        stream.pipe(writeStream) // 以管道方式写入流
        await new Promise((resolve, reject) => {
            writeStream.on('finish', () => {
                // 监听写入完成事件
                urls.push(`${targetDir}/${filename}`)
                resolve(stream.fields)
            })
            writeStream.on('error', async (err) => {
                await sendToWormhole(stream) // 关闭管道
                writeStream.destroy() // 销毁
                reject(err)
            })
        })
        return urls[0]
    }

}

module.exports = UploadService
