const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        align: 'center',
        ellipsis: true,
        width: 80,
    },
    {
        title: '栏目名称',
        dataIndex: 'name',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '栏目名称',
                name: 'name',
                rules: [{ required: true, message: '请输入栏目名称' }],
            },
            $elAttrs: { placeholder: '输入栏目名称', value: '' },
        },
    },
    {
        title: '链接地址',
        dataIndex: 'url',
        key: 'url',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '链接地址',
                name: 'url',
                rules: [{ required: true, message: '请输入栏目名称' }],
            },
            $elAttrs: { placeholder: '输入栏目名称', value: '' },
        },
    },
    {
        title: '父级节点',
        dataIndex: 'pid',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-tree-select',
            $formItemAttrs: {
                autoLink: false,
                label: '栏目名称',
                name: 'pid',
                rules: [{ required: true, message: '请输入栏目名称' }],
            },
            $elAttrs: {
                fieldNames: { children: 'children', key: 'id', value: 'id', label: 'name' },
                placeholder: '选择父级节点，不选择为一级菜单',
                value: 0,
                treeData: [],
            },
        },
    },
    {
        title: '图片',
        dataIndex: 'image',
        ellipsis: true,
        align: 'center',
        slot: {
            name: 'image',
        },
        curd: {
            el: 'bag-upload-image',
            $formItemAttrs: {
                label: '图片',
                name: 'image',
            },
            $elAttrs: {
                placeholder: '上传图片',
                value: '',
                isFileMore: false,
            },
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
                rules: [{ required: true, message: '请输入排序' }],
            },
            $elAttrs: { placeholder: '输入排序', value: '' },
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
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
        title: '允许投稿',
        dataIndex: 'is_contribute',
        ellipsis: true,
        align: 'center',
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                label: '允许投稿',
                name: 'is_contribute',
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
        align: 'center',
        dataIndex: 'action',
        width: 150,
        slot: {
            name: 'action',
        },
    },
]

export default columns
