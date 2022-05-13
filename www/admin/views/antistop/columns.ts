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
        title: '用户ID',
        dataIndex: 'user_id',
        key: 'user_id',
        ellipsis: true,
        align: 'center',
        width: 150,
        formData: {
            name: 'user_id',
            label: '用户ID',
            element: 'a-input',
            placeholder: '输入用户ID',
            rules: [
                {
                    required: true, message: '用户ID为必填项', trigger: 'blur',type: 'number',
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
            placeholder: '输入描述',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '用户ID为必填项', trigger: 'blur',type: 'number',
                }
            ]
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
            placeholder: '输入排序号',
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
            defaultValue: true
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
