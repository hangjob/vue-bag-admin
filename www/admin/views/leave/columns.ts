export default [
    {
        title: '用户昵称',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'name',
            label: '用户昵称',
            element: 'a-input',
            placeholder: '输入用户昵称',
            rules: [
                {
                    required: true, message: '用户昵称为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'email',
            label: '邮箱',
            element: 'a-input',
            placeholder: '输入邮箱',
            rules: [
                {
                    required: true, message: '邮箱为必填项', trigger: 'blur',
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
            placeholder: '网站链接',
        },
    },
    {
        title: '留言记录',
        dataIndex: 'message',
        key: 'message',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'message',
            label: '留言记录',
            element: 'a-textarea',
            placeholder: '输入留言记录',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '留言记录为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        width: 100,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'shows',
            label: '是否显示',
            element: 'a-switch',
            placeholder: '是否显示',
            checkedText: '是',
            uncheckedText: '否'
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
