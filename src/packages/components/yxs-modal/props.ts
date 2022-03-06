// 具体请看 官方API https://2x.antdv.com/components/modal-cn#API
export default {
    visible: {
        type: Boolean,
        default: false,
        required: true,
    },
    title: {
        type: String || Number,
        default: '',
    },
    width: {
        type: String || Number,
        default: 520,
    },
    okText: {
        type: String || Number,
        default: '确认',
    },
    cancelText: {
        type: String || Number,
        default: '关闭',
    },
    cancelButtonProps: {
        type: Object,
        default: () => {
            return {
                danger: true,
                type: 'primary',
            }
        },
    },
    okType: {
        type: String,
        default: 'primary',
    },
    keyboard: {
        type: Boolean,
        default: true,
    },
    destroyOnClose: {
        type: Boolean,
        default: true,
    },
    forceRender: {
        type: Boolean,
        default: true,
    },
    afterClose: {
        type: Function,
        default: () => {
        },
    },
    confirmLoading: {
        type: Boolean,
        default: false,
    },
    dialogClass: {
        type: String,
        default: '',
    },
    isCustomStyles: {
        type: Boolean,
        default: false,
    },
    maskClosable: {
        type: Boolean,
        default: false,
    },
}
