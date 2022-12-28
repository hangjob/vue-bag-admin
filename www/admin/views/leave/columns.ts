export default [
    {
        title: '用户昵称',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '用户昵称',
                name: 'name',
                rules: [{ required: true, message: '输入用户昵称' }],
            },
            $elAttrs: { placeholder: '输入用户昵称', value: '' },
        },
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '用户邮箱',
                name: 'email',
                rules: [{ required: true, message: '输入用户邮箱' }],
            },
            $elAttrs: { placeholder: '输入用户邮箱', value: '' },
        },
    },
    {
        title: '网站链接',
        dataIndex: 'url',
        align: 'center',
        ellipsis: true,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '网站链接',
                name: 'url',
            },
            $elAttrs: { placeholder: '输入网站链接', value: '' },
        },
    },
    {
        title: '留言记录',
        dataIndex: 'message',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-textarea',
            $formItemAttrs: {
                autoLink: false,
                label: '留言记录',
                name: 'message',
            },
            $elAttrs: { placeholder: '输入留言记录', value: '', maxlength: 300 },
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
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
        slot: { name: 'action' },
    },
]
