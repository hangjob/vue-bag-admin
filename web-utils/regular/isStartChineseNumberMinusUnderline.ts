/**
 * 是否 以字母开头，字母，数字，减号，下划线 1至20位
 * @param data
 */
const isStartChineseNumberMinusUnderline = (data: string) => {
    const reg = /^[a-zA-Z][-_a-zA-Z0-9]{1,19}$/
    return reg.test(data)
}

export default isStartChineseNumberMinusUnderline;
