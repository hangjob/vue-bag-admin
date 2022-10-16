/**
 * 判断是否是http开头的链接
 * @param fn
 */
function isHttp(str: string) {
    const exp = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    return new RegExp(exp).test(str);
}


export default isHttp;
