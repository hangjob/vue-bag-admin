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
        title: '图片',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'image'},
        formData: {
            name: 'image',
            label: 'banner图',
            element: 'bag-upload-image',
            placeholder: '上传图片',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '图片为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '分组id',
        dataIndex: 'groupimg_id',
        key: 'groupimg_id',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'groupimg_id',
            label: '分组id',
            element: 'a-select',
            props: {
                mode: null,
                options: [],
                placeholder: '分组id',
                optsKey: 'groupimg',
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
