import { App } from 'vue'
import { debounce } from 'lodash'

/**
 * 防抖
 * @param app
 */
const setupDebounce = (app: App) => {
    app.directive('debounce', {
        // 指令首次绑定到元素且在安装父组件之前...「等同于bind」
        beforeMount(el, binding, vnode, prevVnode) {
            // binding:数据对象
            //   + arg:传给指令的参数   v-xxx:n -> arg:"n"
            //   + modifiers:修饰符对象 v-xxx.stop -> modifiers:{stop:true}
            //   + value:指令绑定的值   v-xxx="1+1" -> value:2
            //   + oldValue:之前绑定的值
            let {
                func,
                wait = 300,
                leading = true,
                trailing = true,
                type = 'click',
                params = {},
            } = binding.value
            const proxy = function proxy(args = {}) {
                return func.call(this, { ...params, ...args })
            }
            el.$type = type
            el.$handle = debounce(proxy, wait, { leading, trailing })
            el.addEventListener(el.$type, el.$handle)
        },
        // 安装绑定元素的父组件时...「等同于inserted」
        mounted() {
        },
        // 在包含组件的VNode更新之前...
        beforeUpdate() {
        },
        // 在包含组件的VNode及其子VNode更新后...「等同于componentUpdated」
        updated() {
        },
        // 在卸载绑定元素的父组件之前...
        beforeUnmount() {
        },
        // 指令与元素解除绑定且父组件已卸载时...「等同于unbind」
        unmounted(el) {
            el.removeEventListener(el.$type, el.$handle)
        },
    })
}

export default setupDebounce
