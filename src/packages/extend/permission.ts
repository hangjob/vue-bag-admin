import { App, Directive, DirectiveBinding } from 'vue'
import userPinia from '@/packages/pinia/user'


const isButton = (el: Element) => {
    return el.tagName.toLowerCase() === 'button'
}

// 权限指令
function handlePermission(el: Element, binding: DirectiveBinding) {
    const { value, arg } = binding
    const userStore = userPinia()
    if (value && value instanceof Array) {
        const roles = userStore.userInfo.role
        const hasPermission = roles.some((role: any) => {
            return value.includes(role)
        })

        if (!hasPermission && arg) {
            return el.parentNode && el.parentNode.removeChild(el) // 条件不成立删除
        }

        if (!hasPermission) {

            if (isButton(el)) {
                el.classList.add('ant-btn-dashed')
                el.setAttribute('disabled', 'disabled')
            } else {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    } else {
        console.error('权限控制使用例子 v-auth="[\'admin\',\'editor\']"')
    }
}

const permission: Directive = {
    // 指令绑定元素挂载前
    beforeMount() {

    },
    // 指令绑定元素挂载后
    mounted(el: Element, binding: DirectiveBinding) {
        handlePermission(el, binding)
    },
    // 指令绑定元素因为数据修改触发修改后
    updated(el: Element, binding: DirectiveBinding) {
        handlePermission(el, binding)
    },
    // 指令绑定元素销毁前
    beforeUnmount() {

    },
    // 指令绑定元素销毁后
    unmounted() {

    },
}

const setupPermission = (app: App) => {
    app.directive('auth', permission)
}

export default setupPermission
