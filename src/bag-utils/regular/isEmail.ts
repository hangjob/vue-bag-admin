/**
 * 邮箱验证
 * @param str
 */
const isEmail = (str: string) => {
    let reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
    return reg.test(str)
}

export default isEmail
