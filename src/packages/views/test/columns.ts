const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        ellipsis: true,
        align: 'center',
        width: 80,
    },
    {
        title: '组织名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'name',
            label: '组织名称',
            element: 'a-input',
            props: {
                placeholder: '输入组织名称',
            },
        },
    },
    {
        title: '上级名称',
        dataIndex: 'pname',
        key: 'pname',
        ellipsis: true,
        align: 'center',
        _slots: { customRender: 'pname' },
    },
    {
        title: '上级ID',
        dataIndex: 'pid',
        key: 'pid',
        ellipsis: true,
        align: 'center',
        width: 180,
        _slots: { customRender: 'pid' },
        formData: {
            name: 'pid',
            label: '上级ID',
            element: 'a-select',
            options: [],
            props: {
                placeholder: '选择上级ID',
            },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        width: 80,
        _slots: { customRender: 'order' },
        formData: {
            name: 'order',
            label: '排序',
            element: 'a-input',
            props: {
                placeholder: '输入排序',
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
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        dataIndex: 'action',
        width: 200,
        _slots: { customRender: 'action' },
    },
]

export default columns
