/**
 * 是否 字母 数字 汉字
 * @param data
 */
const isEnglishNumberChinese = (data: string) => {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(data)
}

export default isEnglishNumberChinese;
