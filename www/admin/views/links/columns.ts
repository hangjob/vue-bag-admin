export default [
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
        key: 'url',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '网站链接',
                name: 'url',
            },
            $elAttrs: { placeholder: '输入网站链接', value: '' },
        },
    },
    {
        title: '网站描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        align: 'center',
        width: 100,
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '描述',
                name: 'describe',
            },
            $elAttrs: { placeholder: '输入描述', value: '', maxlength: 300 },
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
                label: '网站logo',
                name: 'logo',
                rules: [{ required: true, message: '网站logo为必填项', trigger: 'blur' }],
            },
            $elAttrs: {
                fixedBox: false,
                autoCropWidth: 100,
                autoCropHeight: 100,
                placeholder: '上传网站logo',
                maxlength: 300,
            },
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
        slot: {
            name: 'action',
        },
    },
]
