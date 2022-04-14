import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'yxs-form-table',
    setup() {

    },
    props: {},
    render(ctx: any) {
        const html = [];
        if (ctx.$slots.default) {
            html.push(h('div', {class: classes['yxs-table-content']}, ctx.$slots.default?.()));
        }
        return h('div', {class: classes['yxs-table']}, [html]);
    }
})
