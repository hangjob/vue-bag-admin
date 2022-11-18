import {defineComponent, h, App} from 'vue'
import {toHump} from '@/packages/utils/utils'

const modules = import.meta.glob('./*-icons.ts')


const iconComponent = (className: string) => {
    return defineComponent({
        render() {
            let html = h(`i`, {class: `${className}`})
            return h('span', {class: 'anticon'}, html)
        }
    })
}

const setupIcons = (app: App) => {
    for (const path in modules) {
        modules[path]().then((mod:any) => {
            mod.default.forEach((item: string) => {
                app.component(item, iconComponent(item))
                app.component(toHump(item), iconComponent(item))
            })
        })
    }
}

export {
    setupIcons
}
