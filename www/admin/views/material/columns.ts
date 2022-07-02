export default [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({index}: { index: number }) => {
            return index + 1
        },
    },
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
            placeholder: '输入图片名称',
        },
    },
    {
        title: '选择分组',
        dataIndex: 'groupimg_id',
        key: 'groupimg_id',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'groupimg_id',
            label: '选择分组',
            element: 'a-select',
            props: {
                mode: null,
                options: [],
                placeholder: '选择分组',
                optsKey: 'groupimg',
                optNmae: 'name',
            },
            defaultValue: '',
        },
    },
    {
        title: '图片地址',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'image',
            label: '图片地址',
            element: 'bag-upload-image',
            placeholder: '上传图片',
            maxlength: 300,
            props: {
                onUpdateName: 'updateImage',
                isFileMore: false, // 是否多传
                autoCropHeight: 500
            },
            rules: [
                {
                    required: true, message: '图片地址为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '关键词',
        dataIndex: 'keywords',
        key: 'keywords',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'keywords',
            label: '关键词',
            element: 'a-select',
            props: {
                mode: null,
                options: [],
                placeholder: '选择关键词',
                optsKey: 'keywords',
                optNmae: 'name',
            },
            defaultValue: '',
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
        slots: {customRender: 'action'},
    },
]
