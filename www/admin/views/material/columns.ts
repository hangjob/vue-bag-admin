export default [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1
        },
    },
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
                rules: [{ required: true, message: '输入图片名称', trigger: 'blur' }],
            },
            $elAttrs: { placeholder: '输入图片名称', value: '' },
        },
    },
    {
        title: '选择分组',
        dataIndex: 'groupimg_id',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '选择分组',
                name: 'groupimg_id',
            },
            $elAttrs: { placeholder: '输入图片名称', value: '', options: [] },
        },
    },
    {
        title: '图片地址',
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
                placeholder: '图片地址',
                maxlength: 300,
                isFileMore: false, // 是否多传
                autoCropHeight: 500,
            },
        },
    },
    {
        title: '关键词',
        dataIndex: 'keywords',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '关键词',
                name: 'keywords',
            },
            $elAttrs: { placeholder: '选择关键词', value: '' },
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: { name: 'action' },
    },
]
