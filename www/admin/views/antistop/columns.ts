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
        title: '关键词',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        width: 200,
        formData: {
            name: 'name',
            label: '关键词',
            element: 'a-input',
            props: {
                placeholder: '输入关键词',
            },
            rules: [
                {
                    required: true, message: '关键词为必填项', trigger: 'blur',
                }
            ]
        }
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
            }
        }
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
                placeholder: '输入排序号',
            }
        }
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        ellipsis: true,
        align: 'center',
        width: 80,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'shows',
            label: '是否显示',
            element: 'a-switch',
            props: {
                defaultValue: true
            }
        }
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
