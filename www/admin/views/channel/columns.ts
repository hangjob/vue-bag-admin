const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        ellipsis: true,
        width: 80,
    },
    {
        title: '栏目名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'name',
            label: '栏目名称',
            element: 'a-input',
            props: {
                placeholder: '输入栏目名称',
            },
        },
    },
    {
        title: '链接地址',
        dataIndex: 'url',
        key: 'url',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'url',
            label: '链接地址',
            element: 'a-input',
            props: {
                placeholder: '输入链接地址',
            },
        },
    },
    {
        title: '父级节点',
        dataIndex: 'pid',
        key: 'pid',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'pid',
            label: '父级节点',
            element: 'a-tree-select',
            treeData: [],
            replaceFields: { children: 'children', key: 'id', value: 'id', label: 'name' },
            props: {
                placeholder: '选择父级节点，不选择为一级菜单',
            },
        },
    },
    {
        title: '图片',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        _slots: { customRender: 'image' },
        formData: {
            name: 'image',
            label: '图片',
            element: 'bag-upload-image',
            props: {
                placeholder: '上传图片',
                isFileMore: false,
            },
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text  ? '是' : '否'
        },
        formData: {
            name: 'shows',
            label: '是否显示',
            element: 'a-switch',
            props: {
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            },
        },
    },
    {
        title: '允许投稿',
        dataIndex: 'is_contribute',
        key: 'is_contribute',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'is_contribute',
            label: '允许投稿',
            element: 'a-switch',
            props: {
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
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
        title: '操作',
        key: 'action',
        align: 'center',
        dataIndex: 'action',
        width: 200,
        _slots: { customRender: 'action' },
    },
]

export default columns
