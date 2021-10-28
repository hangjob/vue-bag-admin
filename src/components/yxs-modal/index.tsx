import {defineComponent} from 'vue';
import './index.modal.less'
import props from './props'

export default defineComponent({
    name: 'yxs-modal',
    props: props,
    setup(props, {slots, emit}) {
        const handleVisible = (e: any) => {
            e.stopPropagation();
            emit("update:visible", false);
        }
        const isCustomStyles = props.isCustomStyles ? 'yxs-modal-content' : props.dialogClass; //自定义内置样式
        return () => (
            <div class='yxs-modal'>
                {/* 这里不要写v-model:visible  ， 不然浏览器会发出警告 Set operation on key "visible" failed: target is readonly */}
                <a-modal visible={props.visible} title={props.title} width={props.width}
                         cancelText={props.cancelText} okText={props.okText}
                         cancelButtonProps={props.cancelButtonProps} class={isCustomStyles} onCancel={handleVisible}>
                    {slots.default?.()}
                </a-modal>
            </div>
        )
    }
})