//这里回话会在socket链接成功的时候一次才会触发
module.exports  = () => {
    return  async (ctx, next) => {
        console.log(1)
        ctx.socket.emit('res', '我是服务端的数据-只会第一次执行')
        await  next()
    }
}
