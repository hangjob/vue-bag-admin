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
        title: '测试1',
        dataIndex: 'roles1',
        ellipsis: true,
        align: 'center',
        width: 80,
        visible: false,
        curd: {
            name: 'roles',
            label: '角色',
            element: 'a-select',
            props: {
                placeholder: '选择角色',
                options: [],
            },
        },
        curdEdit: {},
        curdCreate: {},
        curdSearch: {},
    },
    {
        title: '测试2',
        dataIndex: 'roles2',
        ellipsis: true,
        align: 'center',
        width: 80,
        visible: true,
        curd: {
            name: 'roles',
            label: '角色',
            element: 'a-select',
            props: {
                placeholder: '选择角色',
                options: [],
            },
        },
        curdEdit: {},
        curdCreate: {},
        curdSearch: {},
    },
]
export default columns
