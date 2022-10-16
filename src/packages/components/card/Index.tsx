import {defineComponent, h} from 'vue'
import classes from './Index.module.less'

export default defineComponent({
    name: 'bag-card',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        class: {
            type: String || null,
            default: null
        }
    },
    setup(props, {slots}) {
        const title = slots.title ? <div class={classes['bag-card-title']}>{slots.title?.()}</div> : null;
        const className = classes['bag-card'] + ' ' + props.class;
        return () => (
            <a-skeleton loading={props.loading}>
                <div class={className}>
                    {title}
                    <div class={classes['bag-card-content']}>{slots.default?.()}</div>
                </div>
            </a-skeleton>
        )
    },
    // 两种写法
    // render(ctx: any) {
    //     const html = [];
    //     if (ctx.$slots.title) {
    //         html.push(h('div', {class: classes['bag-card-title']}, [ctx.$slots.title?.()]));
    //     }
    //     if (ctx.$slots.default) {
    //         html.push(h('div', {class: classes['bag-card-content']}, ctx.$slots.default?.()));
    //     }
    //     return h('div', {class: classes['bag-card'], loading: true}, [html]);
    // }
})
