import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'bag-view',
    setup() {

    },
    props: {},
    render(ctx: any) {
        let html: any = [];
        if (ctx.$slots.action) {
            html.push(h('div', {class: classes['bag-view-action']}, ctx.$slots.action?.()));
        }
        if (ctx.$slots.default) {
            html.push(h('div', {class: classes['bag-view-content']}, ctx.$slots.default?.()));
        }
        return h('div', {class: classes['bag-view']}, html);
    }
})
