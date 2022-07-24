const columns = [
    {
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
        width: 150,
        formData: {
            name: 'name',
            label: '角色名称',
            element: 'a-input',
            props: {
                placeholder: '输入内容',
            },
        },
    },
    {
        title: '标识符',
        dataIndex: 'tag',
        key: 'tag',
        ellipsis: true,
        align: 'center',
        width: 150,
        formData: {
            name: 'tag',
            label: '标识符',
            element: 'a-input',
            props: {
                placeholder: '输入标识符',
            },
        },
    },
    {
        title: '描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'describe',
            label: '描述',
            element: 'a-textarea',
            props: {
                placeholder: '输入描述',
            },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        ellipsis: true,
        align: 'center',
        width: 120,
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
        width: 200,
        slots: {customRender: 'action'},
    }
];

export default columns;
