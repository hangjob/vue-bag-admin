export default [
    {
        title: '网站名称',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'name',
            label: '网站名称',
            element: 'a-input',
            placeholder: '输入网站名称',
            rules: [
                {
                    required: true, message: '网站名称为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '网站链接',
        dataIndex: 'url',
        key: 'url',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'url',
            label: '网站链接',
            element: 'a-input',
            placeholder: '输入网站链接',
            rules: [
                {
                    required: true, message: '网站链接为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '网站logo',
        dataIndex: 'logo',
        key: 'logo',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'image' },
        formData: {
            name: 'logo',
            label: '网站logo',
            element: 'bag-upload-image',
            placeholder: '上传图片',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '图片为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '网站描述',
        dataIndex: 'slogan',
        key: 'slogan',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'slogan',
            label: '描述',
            element: 'a-textarea',
            placeholder: '输入描述',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '输入描述为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '关键词',
        dataIndex: 'keywords',
        key: 'keywords',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'keywords',
            label: '关键词',
            element: 'a-select',
            placeholder: '输入关键词',
        },
    },
    {
        title: '备案号',
        dataIndex: 'record',
        key: 'record',
        align: 'center',
        ellipsis: true,
        visible:false,
        formData: {
            name: 'record',
            label: '备案号',
            element: 'a-textarea',
            placeholder: '输入备案号',
            maxlength: 300,
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
        slots: { customRender: 'action' },
    },
]
