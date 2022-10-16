import {App} from "vue";
import {throttle, merge} from 'lodash'

/**
 * 节流
 * @param app
 */
const setupThrottle = (app: App) => {
    app.directive('throttle', {
        beforeMount(el, binding, vnode, prevVnode) {
            let {
                func,
                wait = 300,
                leading = false,
                trailing = true,
                type = 'click',
                params,
            } = binding.value;
            const proxy = function proxy() {
                return func.call(this, params);
            };
            el.$type = type;
            el.$handle = throttle(proxy, wait, {leading, trailing});
            el.addEventListener(el.$type, el.$handle);
        },
        unmounted(el) {
            el.removeEventListener(el.$type, el.$handle);
        }
    });
}

export default setupThrottle
