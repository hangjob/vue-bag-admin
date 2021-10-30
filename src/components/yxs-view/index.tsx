import {defineComponent, h} from 'vue'
import classes from './index.module.less'

export default defineComponent({
    name: 'yxs-card',
    setup() {

    },
    props: {},
    render(ctx: any) {
        return h('div', {class: classes['yxs-view']},  ctx.$slots.default?.());
    }
})