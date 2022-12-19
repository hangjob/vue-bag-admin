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
            $elAttrs: { placeholder: '输入用户名', value: '' },
        },
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
            $elAttrs: {
                placeholder: '请选择',
                value: '',
                options: [{ value: '', label: '请选择' }, { value: '1', label: '苹果' }, { value: '2', label: '桔子' }],
            },
        },
        curdEdit: {},
        curdCreate: {},
        curdSearch: {
            el: 'a-input',
            $formItemAttrs: { label: '用户名2', name: 'image' },
            $elAttrs: { placeholder: '输入用户名2', value: '' },
        },
    },
    {
        title: '测试2',
        dataIndex: 'roles3',
        ellipsis: true,
        align: 'center',
        visible: true,
        curd: {
            el: 'a-switch',
            $formItemAttrs: {
                autoLink: false,
                label: '角色',
                name: 'image2',
            },
            $colAttrs: {},
            $elAttrs: {
                placeholder: '请选择',
                checked: true,
                options: [{ value: 1, label: '苹果' }, { value: 2, label: '桔子' }],
            },
        },
        curdEdit: {},
        curdCreate: {},
    },
    {
        title: '测试2',
        dataIndex: 'roles4',
        ellipsis: true,
        align: 'center',
        visible: true,
        curd: {
            $formItemAttrs: {
                autoLink: false,
                label: '角色',
                name: 'image4',
                rules: [{ required: true, message: 'Please input name' }],
            },
            slot: {
                name: 'curdPname',
            },
            $colAttrs: {},
        },
        curdEdit: {},
        curdCreate: {},
    },
    {
        title: '测试2',
        dataIndex: 'roles5',
        ellipsis: true,
        align: 'center',
        width: 150,
        visible: true,
        slot: {
            name: 'action',
        },
    },
]
export default columns
