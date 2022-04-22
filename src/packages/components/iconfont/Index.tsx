import {defineComponent, h} from 'vue'

// const modules = import.meta.glob('../../assets/icon/iconfont/*-icons.ts')

export default defineComponent({
    name: 'bag-iconfont',
    setup() {

    },
    props: {
        class: {
            type: String,
            default: ''
        }
    },
    render(props: any) {
        return h('div', {class: props.class}, <i></i>);
    }
})
