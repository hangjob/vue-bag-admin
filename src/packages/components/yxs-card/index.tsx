import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'yxs-card',
    setup() {

    },
    props: {},
    render(ctx: any) {
        const html = [];
        if (ctx.$slots.title) {
            html.push(h('div', {class: classes['yxs-card-title']}, [ctx.$slots.title?.()]));
        }
        if (ctx.$slots.default) {
            html.push(h('div', {class: classes['yxs-card-content']}, ctx.$slots.default?.()));
        }
        return h('div', {class: classes['yxs-card']}, [html]);
    }
})