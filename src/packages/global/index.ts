import {breakpointsTailwind, useBreakpoints, useEventListener, useThrottleFn} from "@vueuse/core"
import type {App} from "vue"
import appStore from "@/packages/pinia/app.ts"
import {htmlElementClass} from "@/packages/utils/utils.ts"

/**
 * 监听窗口
 */
const throttledFn = useThrottleFn(() => {
    const app = appStore()
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const xs = breakpoints.smaller("sm")
    const sm = breakpoints.between("sm", "md")
    const md = breakpoints.between("md", "lg")
    const lg = breakpoints.between("lg", "xl")
    const xl = breakpoints.between("xl", "2xl")
    const xxl = breakpoints["2xl"]
    app.browser = {xs, sm, md, lg, xl, xxl}
    app.mobile = xs.value
    app.collapsed = sm.value || md.value
}, 200)


/**
 * 更新灰色模式
 * @constructor
 */
const updateHtmlGray = () => {
    const app = appStore()
    htmlElementClass(app.userSetting.gray, "bag-grey")
}

/**
 * 更新色弱模式
 * @constructor
 */
const updateHtmlWeak = () => {
    const app = appStore()
    htmlElementClass(app.userSetting.weak, "bag-weak")
}

const setupGlobal = () => {
    throttledFn().then(() => (
        useEventListener(window, "resize", throttledFn)
    ))
}

const resetApiInstanceUrl = (key) => {
    const app = appStore()
    const url = app.configOptions.apis[key]
    return url ? url : key
}

export default setupGlobal
export {
    updateHtmlGray,
    updateHtmlWeak,
    resetApiInstanceUrl
}
