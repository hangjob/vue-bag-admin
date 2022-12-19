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
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '分组名称',
                name: 'name',
                rules: [{ required: true, message: '输入分组名称', trigger: 'blur' }],
            },
            $elAttrs: { placeholder: '输入分组名称', value: '' },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                label: '排序',
                name: 'order',
                rules: [{ required: true, message: '输入排序', trigger: 'blur' }],
            },
            $elAttrs: { placeholder: '输入排序', value: '' },
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
        slot: { name: 'action' },
    },
]
