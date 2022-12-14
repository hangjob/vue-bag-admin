const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1
        },
    },
    {
        title: '测试1',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        width: 80,
        slot: {
            name: 'pname',
        },
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '角色',
                name: 'pname',
                rules: [{ required: true, message: 'Please input name' }],
            },
            $colAttrs: { flex: 1 },
            $elAttrs: { placeholder: '输入用户名', value: '444' },
        },
        curdCreate: {},
        curdEdit: {},
        curdSearch: {
            el: 'a-input',
            $formItemAttrs: { label: '用户名', name: 'name' },
            $elAttrs: { placeholder: '输入用户名', value: '' },
        },
    },
    {
        title: '测试2',
        dataIndex: 'roles2',
        ellipsis: true,
        align: 'center',
        width: 80,
        visible: true,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '角色',
                name: 'image',
                rules: [{ required: true, message: 'Please input name' }],
            },
            $colAttrs: {},
            $elAttrs: { placeholder: '输入用户名', value: '22', options: [{ value: 1, label: '11' }] },
        },
        curdEdit: {},
        curdCreate: {},
        curdSearch: {
            el: 'a-input',
            $formItemAttrs: { label: '用户名2', name: 'image' },
            $elAttrs: { placeholder: '输入用户名2', value: '' },
        },
    },
]
export default columns
