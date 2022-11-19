const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
        width: 150,
        formData: {
            name: 'name',
            label: '名称',
            element: 'a-input',
            props: {
                placeholder: '名称',
            },
        },
        formSearch: {
            name: 'name',
            label: '名称',
            element: 'a-input',
            props: {
                placeholder: '输入名称搜索',
                value: '',
            },
        },
    },
    {
        title: '父级节点',
        dataIndex: 'pid',
        key: 'pid',
        align: 'center',
        ellipsis: true,
        width: 150,
        visible: false,
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
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
        width: 80,
        align: 'center',
        ellipsis: true,
        _slots: { customRender: 'icon' },
        formData: {
            name: 'icon',
            label: '图标',
            slotName: 'form-icon', // 插槽
        },
    },
    {
        title: '节点类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
        align: 'center',
        width: 80,
        _slots: { customRender: 'type' },
        formData: {
            name: 'type',
            label: '节点类型',
            element: 'a-select',
            options: [],
            props: {
                placeholder: '选择节点类型',
            },
        },
    },
    {
        title: '路由地址',
        dataIndex: 'path',
        key: 'path',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'path',
            label: '路由地址',
            element: 'a-input',
            props: {
                placeholder: '路由地址',
            },
        },
        formSearch: {
            name: 'path',
            label: '路由地址',
            element: 'a-input',
            props: {
                placeholder: '输入路由地址搜索',
                value: '',
            },
        },
    },
    {
        title: '组件路径',
        dataIndex: 'filePath',
        key: 'filePath',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'filePath',
            label: '文件路径',
            element: 'a-input',
            props: {
                placeholder: '文件路径',
            },
        },
        formSearch: {
            name: 'filePath',
            label: '文件路径',
            element: 'a-input',
            props: {
                placeholder: '输入文件路径搜索',
                value: '',
            },
        },
    },
    {
        title: '网络组件',
        dataIndex: 'httpFilePath',
        key: 'httpFilePath',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'httpFilePath',
            label: '网络组件',
            element: 'a-input',
            props: {
                placeholder: '网络组件',
            },
        },
    },
    {
        title: 'iframe',
        dataIndex: 'iframePath',
        key: 'iframePath',
        ellipsis: true,
        align: 'center',
        visible: false,
        formData: {
            name: 'iframePath',
            label: 'iframe',
            element: 'a-input',
            props: {
                placeholder: 'iframe',
            },
        },
    },
    {
        title: '外链',
        dataIndex: 'httpViewPath',
        key: 'httpViewPath',
        ellipsis: true,
        align: 'center',
        visible: false,
        formData: {
            name: 'httpViewPath',
            label: '外链',
            element: 'a-input',
            props: {
                placeholder: '外链',
            },
        },
    },
    {
        title: '路由缓存',
        dataIndex: 'keepAlive',
        key: 'keepAlive',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'keepAlive',
            label: '路由缓存',
            element: 'a-switch',
            props: {
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            },
        }
    },
    {
        title: '是否隐藏Tab切换',
        dataIndex: 'tabHidden',
        key: 'tabHidden',
        align: 'center',
        ellipsis: true,
        width: 200,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'tabHidden',
            label: '是否隐藏Tab切换',
            element: 'a-switch',
            props: {
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            },
        },
    },
    {
        title: '固定菜单',
        dataIndex: 'tabFix',
        key: 'tabFix',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'tabFix',
            label: '固定菜单',
            element: 'a-switch',
            props: {
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            },
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        align: 'center',
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
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
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        align: 'center',
        width: 90,
        formData: {
            name: 'order',
            label: '排序',
            element: 'a-input',
            props: {
                placeholder: '排序',
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
        formData: {
            name: 'updateTime',
            label: '更新时间',
            element: 'a-input',
            props: {
                placeholder: '更新时间',
            },
        },
    },
    {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        align: 'center',
        width: 200,
        _slots: { customRender: 'action' },
    },
]

export default columns
