import {defineComponent, h, App} from 'vue'
import {toHump} from '@/packages/utils/utils'

const modules = import.meta.glob('./*-icons.ts')


const iconComponent = (className: string) => {
    return defineComponent({
        render() {
            return h(`i`, {class: className})
        }
    })
}

const setupIcons = (app: App) => {
    for (const path in modules) {
        modules[path]().then((mod) => {
            mod.default.forEach((item: string) => {
                app.component(toHump(item), iconComponent(item))
            })
        })
    }
}

export {
    setupIcons
}