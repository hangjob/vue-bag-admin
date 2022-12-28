const columns = [
    {
        title: '角色名称',
        dataIndex: 'name',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                label: '角色名称',
                name: 'name',
            },
            $elAttrs: { placeholder: '输入角色名称', value: '' },
        },
    },
    {
        title: '标识符',
        dataIndex: 'tag',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                label: '标识符',
                name: 'tag',
            },
            $elAttrs: { placeholder: '输入标识符', value: '' },
        },
    },
    {
        title: '描述',
        dataIndex: 'describe',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                label: '描述',
                name: 'describe',
            },
            $elAttrs: { placeholder: '输入描述', value: '' },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        ellipsis: true,
        align: 'center',
        width: 120,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                label: '排序',
                name: 'order',
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
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        align: 'center',
        dataIndex: 'action',
        width: 220,
        slot: {
            name: 'custorm_action',
        },
    },
]

export default columns
