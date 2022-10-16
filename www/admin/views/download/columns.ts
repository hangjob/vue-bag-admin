export default [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        ellipsis: true,
        align: 'center',
        width: 80,
    },
    {
        title: '应用标题',
        dataIndex: 'title',
        key: 'title',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'title',
            label: '应用标题',
            element: 'a-input',
            props: {
                placeholder: '输入应用标题',
            },
            rules: [
                {
                    required: true, message: '应用标题为必填项', trigger: 'blur',
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
            options: [],
            props: {
                mode: null,
                placeholder: '选择类型',
                defaultValue: '',
            },
        },
    },
    {
        title: '标题样式',
        dataIndex: 'title_style',
        key: 'title_style',
        ellipsis: true,
        align: 'center',
        visible: false,
        formData: {
            name: 'title_style',
            label: '标题样式',
            element: 'a-textarea',
            props: {
                placeholder: '输入标题样式',
                maxlength: 300,
            },
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
            options: [],
            props: {
                mode: null,
                placeholder: '栏目id',
                defaultValue: '',
            },
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
            props: {
                isFileMore: false,
                placeholder: '上传图片',
                maxlength: 300,
            },
        },
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
            props: {
                placeholder: '输入描述',
                maxlength: 300,
            },
            rules: [
                {
                    required: true, message: '输入描述为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        ellipsis: true,
        align: 'left',
        visible: false,
        layout: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,

        },
        formData: {
            name: 'content',
            label: '内容',
            element: 'md-editor',
            autoLink: false,
            labelCol: {
                span: 2,
                offset: 0,
            },
            wrapperCol: {
                span: 21,
                offset: 0,
            },
            props: {
                placeholder: '输入内容',
            },
        },
    },
    {
        title: '下载地址',
        dataIndex: 'download_site',
        key: 'download_site',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        layout: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
        },
        formData: {
            name: 'download_site',
            label: '下载地址',
            slotName: 'BagDownloadSite',
            element: 'bag-download-site',
            labelCol: {
                span: 2,
                offset: 0,
            },
            wrapperCol: {
                span: 21,
                offset: 0,
            },
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
            options: [{name: '置顶', value: '置顶'}, {name: '最新', value: '最新'}, {
                name: '推荐', value: '推荐',
            }, {name: '热门', value: '热门'}],
            props: {
                mode: null,
                placeholder: '选择热度',
                defaultValue: '推荐',
            },
        },
    },
    {
        title: '选择时间',
        dataIndex: 'createTime',
        key: 'createTime',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'createTime',
            label: '选择时间',
            element: 'a-date-picker',
            props: {
                valueFormat: 'YYYY-MM-DD HH:mm:ss',
                placeholder: '选择时间',
                showTime: true,
                type: 'date',
            },
        },
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
            props: {
                placeholder: '输入浏览次数',
            }
        },
    },
    {
        title: '点赞次数',
        dataIndex: 'likes',
        key: 'likes',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        formData: {
            name: 'likes',
            label: '点赞次数',
            element: 'a-input',
            props: {
                placeholder: '输入点赞次数',
            }
        },
    },
    {
        title: '点踩次数',
        dataIndex: 'dislikes',
        key: 'dislikes',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        formData: {
            name: 'dislikes',
            label: '点踩次数',
            element: 'a-input',
            props: {
                placeholder: '输入点踩次数',
            }
        },
    },
    {
        title: '评论数量',
        dataIndex: 'comments',
        key: 'comments',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        formData: {
            name: 'comments',
            label: '评论数量',
            element: 'a-input',
            props: {
                placeholder: '输入评论数量',
            }
        },
    },
    {
        title: '游客访问',
        dataIndex: 'is_guest',
        key: 'is_guest',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'is_guest',
            label: '是否显示',
            element: 'a-switch',
            props: {
                placeholder: '是否显示',
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            }
        },
    },
    {
        title: '是否评论',
        dataIndex: 'is_comment',
        key: 'is_comment',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
        formData: {
            name: 'is_comment',
            label: '是否显示',
            element: 'a-switch',
            props: {
                placeholder: '是否显示',
                checkedText: '是',
                uncheckedText: '否',
                defaultValue: true,
            }
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
