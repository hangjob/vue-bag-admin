export default [
    {
        title: '图片名称',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '图片名称',
                name: 'name',
                rules: [{ required: true, message: '输入图片名称' }],
            },
            $elAttrs: { placeholder: '输入图片名称', value: '' },
        },
        curdSearch: { // 该属性代表的搜索
            el: 'a-input',
            $formItemAttrs: { label: '用户名', name: 'name' },
            $elAttrs: { placeholder: '输入用户名', value: '' },
        },
    },
    {
        title: '图片描述',
        dataIndex: 'describe',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                label: '图片描述',
                name: 'describe',
            },
            $elAttrs: { placeholder: '输入图片描述', value: '' },
        },
    },

    {
        title: '链接地址',
        dataIndex: 'url',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                label: '链接地址',
                name: 'url',
            },
            $elAttrs: { placeholder: '输入链接地址', value: '' },
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                autoLink: false,
                label: '是否显示',
                name: 'shows',
            },
            $elAttrs: {
                checkedText: '是',
                uncheckedText: '否',
                checked: true,
            },
        },
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                label: '类型',
                name: 'type',
            },
            $elAttrs: {
                placeholder: '选择类型',
                value: '',
                options: [{ label: '请选择', value: '' }],
            },
        },
    },
    {
        title: 'banner图',
        dataIndex: 'image',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'bag-upload-image',
            $formItemAttrs: {
                autoLink: false,
                label: '图片地址',
                name: 'image',
                rules: [{ required: true, message: '图片地址必填项', trigger: 'blur' }],
            },
            $elAttrs: {
                placeholder: '输入图片地址',
                value: '',
                maxlength: 300,
                isFileMore: false, // 是否多传
                autoCropHeight: 500,
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
        dataIndex: 'action',
        align: 'center',
        width: 250,
        slot: {
            name: 'action',
        },
    },
]
