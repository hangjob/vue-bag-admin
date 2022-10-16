module.exports  = (app) => {
    return  async (ctx, next) => {
        console.log(1)
        ctx.socket.emit('res', '我在每次回话的时候才执行')
        await  next()
    }
}
