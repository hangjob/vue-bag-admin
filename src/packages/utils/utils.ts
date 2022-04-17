import { cloneDeep } from 'lodash'

/**
 * 获取数据在数组对象的链
 * @param list
 * @param path
 */
const getAllParentArr = (list: any, path: any) => {
    for (let i in list) {
        if (list.hasOwnProperty(i)) {
            if (list[i].path === path) {
                //查询到返回该数组对象
                return [list[i]]
            }
            if (list[i].children) {
                let node: any = getAllParentArr(list[i].children, path)
                if (node !== undefined) {
                    //查询到把父节点连起来
                    return node.concat(list[i])
                }
            }
        }
    }
}

/**
 * 获取设备信息
 */
const getBrowser = () => {
    const { clientHeight, clientWidth } = document.documentElement

    // 浏览器信息
    const ua = navigator.userAgent.toLowerCase()

    // 浏览器类型
    let type = (ua.match(/firefox|chrome|safari|opera/g) || 'other')[0]

    if ((ua.match(/msie|trident/g) || [])[0]) {
        type = 'msie'
    }

    // 平台标签
    let tag = ''

    const isTocuh = 'ontouchstart' in window || ua.indexOf('touch') !== -1 || ua.indexOf('mobile') !== -1
    if (isTocuh) {
        if (ua.indexOf('ipad') !== -1) {
            tag = 'pad'
        } else if (ua.indexOf('mobile') !== -1) {
            tag = 'mobile'
        } else if (ua.indexOf('android') !== -1) {
            tag = 'androidPad'
        } else {
            tag = 'pc'
        }
    } else {
        tag = 'pc'
    }

    // 浏览器内核
    let prefix: string

    switch (type) {
    case 'chrome':
    case 'safari':
    case 'mobile':
        prefix = 'webkit'
        break
    case 'msie':
        prefix = 'ms'
        break
    case 'firefox':
        prefix = 'Moz'
        break
    case 'opera':
        prefix = 'O'
        break
    default:
        prefix = 'webkit'
        break
    }

    // 操作平台
    const plat = ua.indexOf('android') > 0 ? 'android' : navigator.platform.toLowerCase()

    // 屏幕信息
    let screen: string

    if (clientWidth < 768) {
        screen = 'xs'
    } else if (clientWidth < 992) {
        screen = 'sm'
    } else if (clientWidth < 1200) {
        screen = 'md'
    } else if (clientWidth < 1920) {
        screen = 'xl'
    } else {
        screen = 'full'
    }

    // 是否 ios
    const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

    // 浏览器版本
    const version = (ua.match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1]

    // 是否 PC 端
    const isPC = tag === 'pc'

    // 是否移动端
    const isMobile = !isPC

    // 是否移动端 + 屏幕宽过小
    const isMini = screen === 'xs' || isMobile

    return {
        height: clientHeight,
        width: clientWidth,
        version,
        type,
        plat,
        tag,
        prefix,
        isMobile,
        isIOS,
        isPC,
        isMini,
        screen,
    }
}


const repeat = (str: string, n: number) => {
    let res = ''
    for (let i = 0; i < n; i++) {
        res += str
    }
    return res
}


/**
 * 生成随机id
 */
const randomId = () => {
    let str = ''
    for (let i = 0; i < 4; i++) {
        str += Math.random().toString().replace(/\./, '')
    }
    str = 'uid' + str
    // 取前32位随机字符，不足补0
    return str.length >= 32 ? str.substr(0, 32) : str + repeat('0', 32 - str.length)
}

/**
 * 生成树结构
 * @param data
 * @param idName
 * @param parentIdName
 */
const toTree = (data: any, idName?: string, parentIdName?: string) => {
    if (!data) {
        return []
    }
    data = cloneDeep(data) // 防止对象引用
    const id = idName || 'id'
    const parentId = parentIdName || 'pid'
    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    const map: any = {}
    data.forEach(function(item: any) {
        map[item[id]] = item
    })
    const menu: any = []
    data.forEach(function(item: any) {
        // 在map中找到当前项的父级菜单
        const parent = map[item[parentId]]
        if (parent) {
            // 如果父级菜单存在，则将当前项存入父级的children
            // 如果父级的children不存在，初始化为空数组[]后再存入
            (parent.children || (parent.children = [])).push(item)
        } else {
            // 如果父级菜单不存在，则做为顶级菜单存入
            menu.push(item)
        }
    })
    return menu
}


/**
 * 将中划线转驼峰
 * @param name
 */
const toHump = (name: string) => {
    return name.replace(/(\b[a-z])[-(\w)]/g, function($, $1) {
        return $1.toUpperCase()
    }).replace(/-/g, '')
}


/**
 * 是否是数组
 */
const isArray = (o: any) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}


/**
 * 下载
 */
const handleExport = (data: Blob, fileName?: string) => {
    let blob = new Blob([data], {
        type: 'application/octet-stream',
    })
    if ('download' in document.createElement('a')) {
        // 不是IE浏览器
        let url = window.URL.createObjectURL(blob)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', typeof fileName === 'string' ? fileName : '下载')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    } else {
        // IE10+
        const navigator: any = window.navigator
        navigator.msSaveBlob(blob, typeof fileName === 'string' ? fileName : '下载')
    }
}


const loadScript = (src: string) => {
    return new Promise((resolve: any, reject: any) => {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = src
        script.id = src
        if (document.getElementById(src)) {
            return resolve()
        }
        document.body.appendChild(script)
        script.onload = () => {
            resolve()
        }
        script.onerror = () => {
            reject()
        }
    })
}

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

function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
}


export {
    getAllParentArr,
    getBrowser,
    randomId,
    toTree,
    toHump,
    isArray,
    handleExport,
    loadScript,
    loadCssCode,
    loadStyle,
    getBase64,
}
