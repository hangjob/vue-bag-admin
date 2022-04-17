const columns = [
    {
        title: '组织名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true
    },
    {
        title: '上级名称',
        dataIndex: 'pname',
        key: 'pname',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'pname'}
    },
    {
        title: '上级ID',
        dataIndex: 'pid',
        key: 'pid',
        ellipsis: true,
        align: 'center',
        width: 180,
        slots: {customRender: 'pid'}
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: {customRender: 'order'}
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
        width: 200,
        slots: {customRender: 'action'},
    }
];

export default columns;
