export default [
    {
        title: '图片名称',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'name',
            label: '图片名称',
            element: 'a-input',
            props: {
                placeholder: '输入图片名称',
            }
        },
    },
    {
        title: '图片描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'describe',
            label: '图片描述',
            element: 'a-textarea',
            props: {
                placeholder: '输入图片描述',
            }
        },
    },
    {
        title: 'banner图',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'image',
            label: '图片地址',
            element: 'bag-upload-image',
            props: {
                placeholder: '上传图片',
                maxlength: 300,
                isFileMore: false, // 是否多传
                autoCropHeight: 500
            },
            rules: [
                {
                    required: true, message: 'banner图为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '链接地址',
        dataIndex: 'url',
        key: 'url',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'url',
            label: '链接地址',
            element: 'a-input',
            props: {
                placeholder: '输入链接地址',
            }
        },
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
            props: {
                placeholder: '是否显示',
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            }
        },
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'type',
            label: '类型',
            element: 'a-select',
            options: [{label: '类型1', value: 1}, {label: '类型2', value: 2}],
            props: {
                mode: null,
                placeholder: '选择类型',
                defaultValue: 1,
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
        _slots: {customRender: 'action'},
    },
]
