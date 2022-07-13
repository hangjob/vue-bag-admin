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
            props: {
                placeholder: '输入网站名称',
            },
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
            props: {
                placeholder: '输入网站链接',
            },
            rules: [
                {
                    required: true, message: '网站链接为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '网站描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'describe',
            label: '描述',
            element: 'a-textarea',
            props: {
                placeholder: '输入描述',
                maxlength: 300,
            },
            rules: [
                {
                    required: true, message: '输入描述为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '网站logo',
        dataIndex: 'logo',
        key: 'logo',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'logo',
            label: '网站logo',
            element: 'bag-upload-image',
            props: {
                fixedBox: false,
                autoCropWidth: 100,
                autoCropHeight: 100,
                placeholder: '上传图片',
                maxlength: 300,
            },
            rules: [
                {
                    required: true, message: '图片为必填项', trigger: 'blur'
                }
            ]
        }
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
        slots: {customRender: 'action'},
    },
]
