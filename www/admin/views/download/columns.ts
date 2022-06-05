export default [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        ellipsis: true,
        align: 'center',
        width: 80
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'title',
            label: '网站名称',
            element: 'a-input',
            placeholder: '输入网站名称',
            rules: [
                {
                    required: true, message: '网站名称为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '用户ID',
        dataIndex: 'user_id',
        key: 'user_id',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'user_id',
            label: '用户ID',
            element: 'a-select',
            props: {
                mode: null,
                options: [],
                placeholder: '选择类型',
            },
            defaultValue: '',
        },
    },
    {
        title: '栏目id',
        dataIndex: 'channel_id',
        key: 'channel_id',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'channel_id',
            label: '栏目id',
            element: 'a-select',
            props: {
                mode: null,
                options: [],
                placeholder: '栏目id',
            },
            defaultValue: '',
        },
    },
    {
        title: '图片',
        dataIndex: 'image',
        key: 'image',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'image'},
        formData: {
            name: 'image',
            label: '图片',
            element: 'bag-upload-image',
            placeholder: '上传图片',
            maxlength: 300,
            props: {
                onUpdateName: 'updateLogo'
            }
        }
    },
    {
        title: '描述',
        dataIndex: 'describe',
        key: 'describe',
        ellipsis: true,
        align: 'center',
        slots: {customRender: 'describe'},
        formData: {
            name: 'describe',
            label: '描述',
            element: 'a-textarea',
            placeholder: '输入描述',
            maxlength: 300,
            rules: [
                {
                    required: true, message: '输入描述为必填项', trigger: 'blur'
                }
            ]
        }
    },
    {
        title: '浏览次数',
        dataIndex: 'views',
        key: 'views',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'views',
            label: '浏览次数',
            element: 'a-input',
            placeholder: '输入浏览次数',
        },
    },
    {
        title: '点赞次数',
        dataIndex: 'likes',
        key: 'likes',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'likes',
            label: '点赞次数',
            element: 'a-input',
            placeholder: '输入点赞次数',
        },
    },
    {
        title: '游客访问',
        dataIndex: 'is_guest',
        key: 'is_guest',
        ellipsis: true,
        align: 'center',
        width: 100,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
    },
    {
        title: '是否评论',
        dataIndex: 'is_comment',
        key: 'is_comment',
        ellipsis: true,
        align: 'center',
        width: 100,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'is_comment',
            label: '是否显示',
            element: 'a-switch',
            placeholder: '是否显示',
            checkedText: '是',
            uncheckedText: '否',
            defaultValue: true,
        },
    },
    {
        title: '热度',
        dataIndex: 'flag',
        key: 'flag',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'flag',
            label: '热度',
            element: 'a-select',
            props: {
                mode: null,
                options: [],
                placeholder: '选择热度',
            },
            defaultValue: '',
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
        slots: {customRender: 'action'},
    },
]
