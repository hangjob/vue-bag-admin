const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        ellipsis: true,
        width: 70,
        customRender: ({ index }: { index: number }) => {
            return index + 1
        },
    },
    {
        title: '角色',
        dataIndex: 'roles',
        ellipsis: true,
        align: 'center',
        width: 80,
        visible: false,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '选择角色',
                name: 'roles',
            },
            $elAttrs: { placeholder: '选择角色', value: '', options: [] },
        },
    },
    {
        title: '姓名',
        dataIndex: 'username',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '姓名',
                name: 'username',
            },
            $elAttrs: { placeholder: '输入姓名', value: '' },
        },
    },
    {
        title: '性别',
        dataIndex: 'sex',
        ellipsis: true,
        align: 'center',
        width: 80,
        curd: {
            el: 'a-select',
            $formItemAttrs: {
                autoLink: false,
                label: '性别',
                name: 'sex',
            },
            $elAttrs: {
                placeholder: '选择性别',
                value: '',
                options: [{ value: 1, name: '女' }, { value: 2, name: '男' }, { value: 0, name: '保密' }],
            },
        },
    },
    {
        title: '年龄',
        dataIndex: 'age',
        ellipsis: true,
        align: 'center',
        width: 80,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '年龄',
                name: 'age',
            },
            $elAttrs: { placeholder: '输入年龄', value: '' },
        },
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        ellipsis: true,
        align: 'center',
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '邮箱',
                name: 'email',
            },
            $elAttrs: { placeholder: '输入邮箱', value: '' },
        },
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        ellipsis: true,
        align: 'center',
        width: 120,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '手机号',
                name: 'phone',
            },
            $elAttrs: { placeholder: '输入手机号', value: '' },
        },
    },
    {
        title: '角色',
        dataIndex: 'rolesDetail',
        key: 'rolesDetail',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '职业',
        dataIndex: 'job',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '职业',
                name: 'job',
            },
            $elAttrs: { placeholder: '输入职业', value: '' },
        },
    },
    {
        title: '公司名称',
        dataIndex: 'company',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '公司名称',
                name: 'company',
            },
            $elAttrs: { placeholder: '输入公司名称', value: '' },
        },
    },
    {
        title: '地址',
        dataIndex: 'address',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '地址',
                name: 'address',
            },
            $elAttrs: { placeholder: '输入地址', value: '' },
        },
    },
    {
        title: '编程语言',
        dataIndex: 'software',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-input',
            $formItemAttrs: {
                autoLink: false,
                label: '编程语言',
                name: 'software',
            },
            $elAttrs: { placeholder: '输入擅长编程语言', value: '' },
        },
    },
    {
        title: '生日',
        dataIndex: 'birthday',
        ellipsis: true,
        align: 'center',
        visible: false,
        curd: {
            el: 'a-date-picker',
            $formItemAttrs: {
                autoLink: false,
                label: '生日',
                name: 'birthday',
            },
            $elAttrs: {
                valueFormat: 'YYYY-MM-DD',
                placeholder: '选择时间',
                type: 'date',
                value: '',
            },
        },
    },
    {
        title: '是否禁用',
        dataIndex: 'state',
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
                label: '是否禁用',
                name: 'state',
            },
            $elAttrs: {
                placeholder: '是否禁用',
                checkedText: '是',
                uncheckedText: '否',
                checked: false,
            },
        },
    },
    {
        title: '部门组织',
        dataIndex: 'branch',
        key: 'branch',
        ellipsis: true,
        align: 'center',
        visible: false,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '操作',
        align: 'center',
        dataIndex: 'action',
        width: 220,
        slot: {
            name: 'custorm_action',
        },
    },
]
export default columns
