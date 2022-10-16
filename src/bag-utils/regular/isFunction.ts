/**
 * 判断是否是函数
 * @param fn
 */
function isFunction(fn) {
    return Object.prototype.toString.call(fn)=== '[object Function]';
}


export default isFunction;
