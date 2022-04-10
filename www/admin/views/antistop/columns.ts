const columns = [
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
        title: '用户ID',
        dataIndex: 'user_id',
        key: 'user_id',
        ellipsis: true,
        align: 'center',
        width: 150,
    },
    {
        title: '关键词',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        width: 80,
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

export default columns;
