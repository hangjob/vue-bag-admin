import {defineComponent} from 'vue';
import './index.modal.less'
import props from './props'

export default defineComponent({
    name: 'yxs-modal',
    props: props,
    setup(props, {slots}) {
        const isCustomStyles = props.isCustomStyles ? 'yxs-modal-content' : props.dialogClass; //自定义内置样式
        return () => (
            <div class='yxs-modal'>
                <a-modal v-model:visible={props.visible} title={props.title} width={props.width}
                         cancelText={props.cancelText} okText={props.okText}
                         cancelButtonProps={props.cancelButtonProps} dialogClass={isCustomStyles}>
                    {slots.default?.()}
                </a-modal>
            </div>
        )
    }
})