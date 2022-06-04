const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1
        },
    },
    {
        title: '栏目名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '链接地址',
        dataIndex: 'url',
        key: 'url',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '父级ID',
        dataIndex: 'pid',
        key: 'pid',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '图片',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'image' },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text === true || item.text === 1 ? '是' : '否'
        },
    },
    {
        title: '允许投稿',
        dataIndex: 'is_contribute',
        key: 'is_contribute',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text === true || item.text === 1 ? '是' : '否'
        },
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
        slots: { customRender: 'action' },
    },
]

export default columns;
