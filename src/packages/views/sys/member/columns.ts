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
        title: '姓名',
        dataIndex: 'username',
        key: 'username',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'username' },
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: { customRender: 'sex' },
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: { customRender: 'age' },
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'email' },
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
        ellipsis: true,
        align: 'center',
        width: 120,
        slots: { customRender: 'phone' },
    },
    {
        title: '角色',
        dataIndex: 'roles',
        key: 'roles',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'roles' },
    },
    {
        title: '部门组织',
        dataIndex: 'branch',
        key: 'branch',
        ellipsis: true,
        align: 'center',
        width: 180,
        slots: { customRender: 'branch' },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 180,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 180,
        slots: { customRender: 'action' },
    },
]

const rolesColumns = [
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
        title: '角色',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'name' },
    },
    {
        title: '标识',
        dataIndex: 'tag',
        key: 'tag',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'tag' },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        ellipsis: true,
        align: 'center',
        slots: { customRender: 'createTime' },
    },
]

export default columns
export {
    rolesColumns,
}
