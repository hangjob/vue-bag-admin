export default [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        visible: false,
        disabled: true,
        customRender: ({ index }: { index: number }) => {
            return index + 1
        },
    },
    {
        title: '网站名称',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '网站名称',
                name: 'name',
                rules: [{ required: true, message: '请输入网站名称' }],
            },
            $elAttrs: { placeholder: '输入网站名称', value: '' },
        },
    },
    {
        title: '网站链接',
        dataIndex: 'url',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '网站链接',
                name: 'url',
                rules: [{ required: true, message: '请输入网站链接' }],
            },
            $elAttrs: { placeholder: '输入网站链接', value: '' },
        },
    },
    {
        title: '二维码地址',
        dataIndex: 'qrcode',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '二维码地址',
                name: 'qrcode',
            },
            $elAttrs: { placeholder: '输入二维码地址', value: '' },
        },
    },
    {
        title: '网站描述',
        dataIndex: 'slogan',
        ellipsis: true,
        align: 'center',
        width: 100,
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '二维码地址',
                name: 'slogan',
                rules: [{ required: true, message: '输入描述为必填项', trigger: 'blur' }],
            },
            $elAttrs: { placeholder: '输入描述为必填项', value: '' },
        },
    },
    {
        title: '关键词',
        dataIndex: 'keywords',
        align: 'center',
        ellipsis: true,
        width: 200,
        customRender: ({ text, index }: { text: any, index: number }) => {
            if (text) {
                return text.join(',')
            } else {
                return text
            }
        },
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '关键词',
                name: 'keywords',
            },
            $elAttrs: {
                placeholder: '输入关键词',
                defaultValue: Array(),
                value: [],
                mode: 'tags',
            },
        },
    },
    {
        title: '备案号',
        dataIndex: 'record',
        align: 'center',
        ellipsis: true,
        visible: false,
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '备案号',
                name: 'record',
                rules: [{ required: true, message: '输入备案号必填项', trigger: 'blur' }],
            },
            $elAttrs: {
                placeholder: '输入备案号',
                value: '',
                maxlength: 300,
            },
        },
    },
    {
        title: '网站logo',
        dataIndex: 'logo',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'bag-upload-image',
            $formItemAttrs: {
                autoLink: false,
                label: '网站logo',
                name: 'logo',
                rules: [{ required: true, message: '图片为必填项', trigger: 'blur' }],
            },
            $elAttrs: {
                placeholder: '上传图片',
                maxlength: 300,
                value: '',
            },
        },
    },
    {
        title: '登录页面背景图',
        dataIndex: 'loginbg',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'bag-upload-image',
            $formItemAttrs: {
                autoLink: false,
                label: '背景图',
                name: 'lologinbggo',
                rules: [{ required: true, message: '背景图为必填项', trigger: 'blur' }],
            },
            $elAttrs: {
                placeholder: '上传背景图',
                maxlength: 300,
                value: '',
            },
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        disabled: true,
        width: 200,
        slot: { name: 'action' },
    },
]
