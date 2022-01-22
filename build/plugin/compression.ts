import viteCompression from 'vite-plugin-compression' // 开启压缩

export function configViteCompression() {
    // 开启压缩 [文档](https://github.com/anncwb/vite-plugin-compression/blob/main/README.zh_CN.md)
    return viteCompression({
        verbose: true,
        disable: false,
        // filter:()=>{}, // 那些资源不压缩
        threshold: 1024 * 50, // 体积大于 threshold 才会被压缩,单位 b
        deleteOriginFile: false,// 压缩后是否删除源文件
        algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: '.gz', // 生成的压缩包后缀
    })
}
