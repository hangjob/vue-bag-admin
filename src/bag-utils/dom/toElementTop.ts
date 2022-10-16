/**
 * 跳转到指定位置
 * @param ele dom元素
 */
const toElementTop = (ele: HTMLElement) => {
    let root = document.body;
    let dom: any = '';
    let height = 0
    do {
        height += ele.offsetTop
        dom = ele.offsetParent
    } while (dom !== root)
    return height
}

export default toElementTop
