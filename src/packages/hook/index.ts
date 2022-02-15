// 1、为什么导出的是function
// 因为导出为对象的话就意味着在import导入时就执行了封装的逻辑，而我们封装的逻辑是用composition api包装了的的特殊代码，这些代码只能在setup里才能正常使用，所以需要导出一个函数，这样就可以在组件setup里调用该函数来指定执行时机。
// 导出为function还有一个用途是方便传参，这样可以在不同的组件引用时做一些差异化逻辑处理。
// 2、封装建议
// 导出的function只需要return组件里要引用的数据；对于组件里不需要引用的就不需要return，组件里只调用导入的函数即可。
// 组件里的自定义hooks调用代码最好放在setup里第一行位置，这样比较明确，不容易被遗漏。
// 响应式api的使用风格保持统一，其实这也是整个项目风格统一的问题，对于setup里定义的数据做响应式处理，要么都用ref，要么都用reative，保持统一，这样在使用时不至于有的带.value有的不带。


import { ref, onMounted, watch, watchEffect, computed, toRef } from 'vue'
import { useStore } from 'vuex'

const themeHook = function() {
    const store = useStore()

    const layoutClassName = computed(() => {
        let names: Array<any> = []
        const app = store.state.app
        if (app.collapsed) {
            names.push('layout-is-collapse')
        }
        if (app.themeConfig.floatingMenu) {
            names.push('layout-is-collapse-floating')
        }
        return names.join(' ')
    })

    const tabStyleClassName = computed(() => {
        const themeConfig = store.state.app.themeConfig
        if (themeConfig.tabStyle === 2) {
            return 'tab-style-round'
        }
        if (themeConfig.tabStyle === 3) {
            return 'tab-style-card'
        }
        return null
    })

    return {
        layoutClassName,
        tabStyleClassName,
    }
}

export {
    themeHook,
}
