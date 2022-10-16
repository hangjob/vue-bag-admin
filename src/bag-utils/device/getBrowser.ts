/**
 * 获取浏览器设备信息
 */
const getBrowser = () => {
    try {
        const { clientHeight, clientWidth } = document.documentElement

        // 浏览器信息
        const ua = navigator.userAgent.toLowerCase()

        // 浏览器类型
        let type = (ua.match(/firefox|chrome|safari|opera/g) || 'other')[0]

        if ((ua.match(/msie|trident/g) || [])[0]) {
            type = 'msie'
        }

        // 平台标签
        let tag: string

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
        let browserName:string
        switch (type) {
        case 'chrome':
            prefix = 'webkit'
            browserName = '谷歌浏览器'
            break
        case 'safari':
            prefix = 'webkit'
            browserName = '苹果浏览器'
            break
        case 'mobile':
            prefix = 'webkit'
            browserName = '移动端webkit'
            break
        case 'msie':
            prefix = 'ms'
            browserName = 'Ie浏览器'
            break
        case 'firefox':
            browserName = '火狐浏览器'
            prefix = 'Moz'
            break
        case 'opera':
            prefix = 'O'
            browserName = 'Opera浏览器'
            break
        default:
            prefix = 'webkit'
            browserName = 'Chrome内核浏览器'
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
            browserName
        }
    } catch (err) {
        return  {

        }
    }
}

export default getBrowser
