const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        align: 'center',
        ellipsis: true,
        width: 150,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '菜单名称',
                name: 'name',
                rules: [{ required: true, message: '请输入菜单名称' }],
            },
            $elAttrs: { placeholder: '输入菜单名称', value: '' },
        },
        curdSearch: {
            el: 'a-input',
            $formItemAttrs: { label: '菜单名称', name: 'name' },
            $elAttrs: { placeholder: '输入菜单名称', value: '' },
        },
    },
    {
        title: '父级节点',
        dataIndex: 'pid',
        align: 'center',
        ellipsis: true,
        width: 150,
        visible: false,
        curd: {
            el: 'a-tree-select',
            $formItemAttrs: {
                autoLink: false,
                label: '上级ID',
                name: 'pid',
            },
            $elAttrs: {
                placeholder: '选择父级节点，不选择为一级菜单',
                value: 0,
                treeData: [],
                fieldNames: { children: 'children', key: 'id', value: 'id', label: 'name' },
            },
        },
    },
    {
        title: '图标',
        dataIndex: 'icon',
        width: 80,
        align: 'center',
        ellipsis: true,
        slot: {
            name: 'icon',
        },
        curd: {
            el: '',
            $formItemAttrs: {
                label: '图标',
                name: 'icon',
            },
            slot: {
                name: 'form-icon',
            },
        },
    },
    {
        title: '节点类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
        align: 'center',
        width: 120,
        slot: {
            name: 'type',
        },
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '节点类型',
                name: 'type',
            },
            $elAttrs: {
                placeholder: '选择节点类型',
                value: '',
                options: [],
            },
        },
    },
    {
        title: '路由地址',
        dataIndex: 'path',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '路由地址',
                name: 'path',
            },
            $elAttrs: { placeholder: '输入路由地址', value: '' },
        },
    },
    {
        title: '组件路径',
        dataIndex: 'filePath',
        key: 'filePath',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '组件路径',
                name: 'filePath',
            },
            $elAttrs: { placeholder: '输入组件路径', value: '' },
        },
    },
    {
        title: '网络组件',
        dataIndex: 'httpFilePath',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '网络组件',
                name: 'httpFilePath',
            },
            $elAttrs: { placeholder: '输入网络组件', value: '' },
        },
    },
    {
        title: 'iframe',
        dataIndex: 'iframePath',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: 'iframe',
                name: 'iframe',
            },
            $elAttrs: { placeholder: '输入iframe地址', value: '' },
        },
    },
    {
        title: '外链',
        dataIndex: 'httpViewPath',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '外链',
                name: 'httpViewPath',
            },
            $elAttrs: { placeholder: '输入外链', value: '' },
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        align: 'center',
        width: 90,
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
        title: '路由缓存',
        dataIndex: 'keepAlive',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                autoLink: false,
                label: '路由缓存',
                name: 'keepAlive',
            },
            $elAttrs: {
                checkedText: '是',
                uncheckedText: '否',
                checked: false,
            },
        },
    },
    {
        title: 'Tab切换',
        dataIndex: 'tabHidden',
        align: 'center',
        ellipsis: true,
        width: 200,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                label: 'Tab切换',
                name: 'tabHidden',
            },
            $elAttrs: {
                checkedText: '是',
                uncheckedText: '否',
                checked: true,
            },
        },
    },
    {
        title: '固定菜单',
        dataIndex: 'tabFix',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                label: '固定菜单',
                name: 'tabFix',
            },
            $elAttrs: {
                checkedText: '是',
                uncheckedText: '否',
                checked: false,
            },
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        align: 'center',
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
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
            name: 'custom_action',
        },
    },
]

export default columns
