import { defineComponent, h } from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'bag-form-table',
    setup() {

    },
    props: {},
    render(ctx: any) {
        const html: Array<any> = []
        if (ctx.$slots.default) {
            html.push(h('div', { class: classes['bag-table-content'] }, ctx.$slots.default?.()))
        }
        return h('div', { class: classes['bag-table'] }, [html])
    },
})
