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
        title: '关键词',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        width: 200,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '关键词',
                name: 'name',
                rules: [{ required: true, message: '输入关键词' }],
            },
            $elAttrs: { placeholder: '输入关键词', value: '' },
        },
    },
    {
        title: '描述',
        dataIndex: 'describe',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '描述',
                name: 'describe',
                rules: [{ required: true, message: '输入描述' }],
            },
            $elAttrs: { placeholder: '输入描述', value: '' },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
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
        title: '是否显示',
        dataIndex: 'shows',
        ellipsis: true,
        align: 'center',
        width: 80,
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                autoLink: false,
                label: '是否显示',
                name: 'shows',
            },
            $elAttrs: {
                checkedText: '是',
                uncheckedText: '否',
                checked: true,
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
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slot: {
            name: 'action',
        },
    },
]

export default columns
