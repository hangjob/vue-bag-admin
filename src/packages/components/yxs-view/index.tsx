import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'yxs-card',
    setup() {

    },
    props: {},
    render(ctx: any) {
        let html = [];
        if (ctx.$slots.action) {
            html.push(h('div', {class: classes['yxs-view-action']}, ctx.$slots.action?.()));
        }
        if (ctx.$slots.default) {
            html.push(h('div', {class: classes['yxs-view-content']}, ctx.$slots.default?.()));
        }
        return h('div', {class: classes['yxs-view']}, html);
    }
})