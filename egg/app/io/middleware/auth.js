//这里回话会在socket链接成功的时候一次才会触发
module.exports  = () => {
    return  async (ctx, next) => {
        console.log(1111)
        await  next()
    }
}
