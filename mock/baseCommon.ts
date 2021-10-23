// 定义返回数据的类型
interface resData {
    readonly  code: number, // 只读 属性
    readonly  message: string, // 只读 属性
    data: any,

    [propName: string]: any, // 可能会有的新的属性添加进来
}

export {
    resData
}