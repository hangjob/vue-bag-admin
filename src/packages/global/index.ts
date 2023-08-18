import {breakpointsTailwind, useBreakpoints, useEventListener, useThrottleFn} from "@vueuse/core"
import type {App} from "vue"
import appStore from "@/packages/pinia/app.ts"

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

const setupGlobal = () => {
    throttledFn().then(() => (
        useEventListener(window, "resize", throttledFn)
    ))
}

export default setupGlobal
