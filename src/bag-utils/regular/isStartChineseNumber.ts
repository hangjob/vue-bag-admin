/**
 * 开头，数字和字母 组合
 * @param data
 */
const isStartChineseNumber = (data: string) => {
    const reg = /^([\/]([a-zA-Z]+))*[0-9a-zA-Z]+$/
    return reg.test(data)
}

export default isStartChineseNumber
