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
        title: '标题',
        dataIndex: 'title',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '标题',
                name: 'title',
            },
            $elAttrs: { placeholder: '输入标题', value: '' },
        },
    },
    {
        title: '用户ID',
        dataIndex: 'user_id',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '用户ID',
                name: 'user_id',
            },
            $elAttrs: { placeholder: '输入用户ID', value: '' },
        },
    },
    {
        title: '标题样式',
        dataIndex: 'title_style',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '标题样式',
                name: 'title_style',
            },
            $elAttrs: { placeholder: '输入标题样式', value: '', maxlength: 300 },
        },
    },
    {
        title: '栏目ID',
        dataIndex: 'channel_id',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '栏目ID',
                name: 'channel_id',
            },
            $elAttrs: { placeholder: '输入栏目ID', value: '' },
        },
    },
    {
        title: '热度',
        dataIndex: 'flag',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '热度',
                name: 'flag',
            },
            $elAttrs: {
                placeholder: '选择热度',
                value: '推荐',
                options: [
                    { label: '置顶', value: '置顶' }, { label: '最新', value: '最新' },
                    { label: '推荐', value: '推荐' }, { label: '热门', value: '热门' },
                ],
            },
        },
    },
    {
        title: '关键词',
        dataIndex: 'keywords',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '关键词',
                name: 'keywords',
            },
            $elAttrs: {
                placeholder: '输入关键词',
                defaultValue: Array(),
                value: [],
                mode: 'tags',
            },
        },
    },
    {
        title: '封面图',
        dataIndex: 'image',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'bag-upload-image',
            $formItemAttrs: {
                autoLink: false,
                label: '封面图',
                name: 'image',
                rules: [{ required: true, message: '封面图', trigger: 'blur' }],
            },
            $elAttrs: {
                placeholder: '输入封面图',
                value: '',
                isFileMore: false,
            },
        },
    },
    {
        title: '组图',
        dataIndex: 'images',
        key: 'images',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'bag-upload-image',
            $formItemAttrs: {
                label: '组图',
                name: 'images',
            },
            $elAttrs: {
                placeholder: '输入组图',
                value: '',
            },
        },
    },
    {
        title: '内容简述',
        dataIndex: 'describe',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '内容简述',
                name: 'describe',
            },
            $elAttrs: { placeholder: '输入内容简述', maxlength: 300, value: '' },
        },
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'md-editor',
            $formItemAttrs: {
                autoLink: false,
                label: '内容',
                name: 'content',
                labelCol: { span: 1, offset: 0 },
                wrapperCol: { span: 22, offset: 0 },
            },
            slot: {
                name: 'curdPname',
            },
            $elAttrs: { placeholder: '输入内容', value: '' },
            $colAttrs: {
                xs: 24,
                sm: 24,
                md: 24,
                lg: 24,
                xl: 24,
            },
        },
    },
    {
        title: '浏览次数',
        dataIndex: 'views',
        ellipsis: true,
        align: 'center',
        width: 100,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '浏览次数',
                name: 'views',
            },
            $elAttrs: { placeholder: '输入浏览次数', value: '' },
        },
    },
    {
        title: '点赞次数',
        dataIndex: 'likes',
        ellipsis: true,
        align: 'center',
        width: 100,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '点赞次数',
                name: 'likes',
            },
            $elAttrs: { placeholder: '输入点赞次数', value: '' },
        },
    },
    {
        title: '评论数量',
        dataIndex: 'comments',
        ellipsis: true,
        align: 'center',
        width: 100,
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '评论数量',
                name: 'comments',
            },
            $elAttrs: { placeholder: '输入评论数量', value: '' },
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
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                autoLink: false,
                label: '游客访问',
                name: 'is_guest',
            },
            $elAttrs: {
                checkedText: '是',
                uncheckedText: '否',
                checked: true,
            },
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
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                autoLink: false,
                label: '是否评论',
                name: 'is_comment',
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
        ellipsis: true,
        align: 'center',
        width: 100,
        curd: {
            el: 'a-date-picker',
            $formItemAttrs: {
                autoLink: false,
                label: '发布时间',
                name: 'createTime',
            },
            $elAttrs: {
                valueFormat: 'YYYY-MM-DD HH:mm:ss',
                placeholder: '选择发布时间',
                showTime: true,
                type: 'date',
                value: '',
            },
        },
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slot: { name: 'action' },
    },
]
