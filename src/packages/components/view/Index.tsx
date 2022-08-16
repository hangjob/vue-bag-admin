import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'bag-view',
    setup() {

    },
    props: {},
    render(ctx: any) {
        let html = [];
        if (ctx.$slots.action) {
            // @ts-ignore
            html.push(h('div', {class: classes['bag-view-action']}, ctx.$slots.action?.()));
        }
        if (ctx.$slots.default) {
            // @ts-ignore
            html.push(h('div', {class: classes['bag-view-content']}, ctx.$slots.default?.()));
        }
        return h('div', {class: classes['bag-view']}, html);
    }
})
