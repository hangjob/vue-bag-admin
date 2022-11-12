/**
 * 滚动到指定元素位置
 * @param element
 */
const toElementTop = (element: string) => {
    const dom: any = document.querySelector(element);
    dom.scrollIntoView({
        behavior: 'smooth'
    });
};

export default toElementTop;
