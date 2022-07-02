export default [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        ellipsis: true,
        width: 100,
    },
    {
        title: '分组名称',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'name',
            label: '分组名称',
            element: 'a-input',
            placeholder: '输入分组名称',
            rules: [
                {
                    required: true, message: '分组名称为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'order',
            label: '排序',
            element: 'a-input',
            placeholder: '输入排序',
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
