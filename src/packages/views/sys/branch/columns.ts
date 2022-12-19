const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        ellipsis: true,
        align: 'center',
        width: 80,
    },
    {
        title: '组织名称',
        dataIndex: 'name',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '组织名称',
                name: 'name',
                rules: [{ required: true, message: '请输入输入组织名称' }],
            },
            $elAttrs: { placeholder: '输入组织名称', value: '' },
        },
        curdSearch: {
            el: 'a-input',
            $formItemAttrs: { label: '组织名称', name: 'name' },
            $elAttrs: { placeholder: '输入组织名称', value: '' },
        },
    },
    {
        title: '上级ID',
        dataIndex: 'pid',
        ellipsis: true,
        align: 'center',
        width: 180,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '上级ID',
                name: 'pid',
            },
            $elAttrs: { placeholder: '选择上级ID', value: '', options: [] },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        ellipsis: true,
        align: 'center',
        width: 80,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '排序',
                name: 'order',
            },
            $elAttrs: { placeholder: '输入排序', value: '' },
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        align: 'center',
        dataIndex: 'action',
        width: 200,
        slot: {
            name: 'action',
        },
    },
]

export default columns
