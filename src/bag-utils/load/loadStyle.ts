/**
 * 加载样式
 * @param href
 */
function loadStyle(href: string) {
    let link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = href
    link.id = href
    let head = document.getElementsByTagName('head')[0]
    if (document.getElementById(href)) {
        return
    }
    head.appendChild(link)
}


export default loadStyle
