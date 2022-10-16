/**
 *
 * loadCssCode('body{background-color:#f00}')
 * @param code
 */
function loadCssCode(code: any) {
    let style: any = document.createElement('style')
    style.type = 'text/css'
    style.rel = 'stylesheet'
    try {
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code))
    } catch (ex) {
        //for IE
        style.styleSheet.cssText = code
    }
    let head = document.getElementsByTagName('head')[0]
    head.appendChild(style)
}


export default loadCssCode
