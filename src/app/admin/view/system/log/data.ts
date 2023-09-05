import {DataTableColumns, NButton, NPopconfirm, NSwitch} from "naive-ui"
import {h} from "vue"

const createColumns = ({compHandle}): DataTableColumns => {
    return [
        {
            title: "ID",
            key: "key",
            align: "center",
            ellipsis: true,
            width: 120,
        },
        {
            type: "expand",
            expandable: (rowData) => true,
            renderExpand: (rowData) => {
                return `${rowData.des}`
            }
        },
        {
            title: "ip地址",
            key: "ip",
            align: "center",
            ellipsis: true,
        },
        {
            title: "时间",
            key: "time",
            align: "center",
            ellipsis: true,
        },
        {
            title: "是否禁用",
            key: "disabled",
            align: "center",
            ellipsis: true,
            render(row: any) {
                return h(NSwitch, {
                    defaultValue: row.disabled
                })
            }
        },
        {
            title: "操作",
            key: "actions",
            align: "center",
            width: 130,
            render(row) {
                return h("div", [
                    h(NPopconfirm,
                        {
                            onPositiveClick: () => {
                                compHandle.del(row)
                            },
                            negativeText: "取消",
                            positiveText: "确定"
                        },
                        {
                            trigger: () => {
                                return h(
                                    NButton,
                                    {
                                        type: "error",
                                        strong: true,
                                        size: "small",
                                        ghost: true,
                                    },
                                    {default: () => "删除"}
                                )
                            },
                            default: () => {
                                return "确认删除该条数据嘛？"
                            }
                        }
                    ),
                ])
            }
        }
    ]
}


const treeData = [
    {
        key: 1,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    },
    {
        key: 2,
        ip: "172.16.14.191",
        time: "2007-06-30 00:41:00",
        des: "数据库日志,update方法写入异常",
    },
    {
        key: 3,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    },
    {
        key: 4,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    },
    {
        key: 5,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    },
    {
        key: 6,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    },
    {
        key: 7,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    },
    {
        key: 8,
        ip: "172.16.14.191",
        des: "数据库日志,update方法写入异常",
        time: "2007-06-30 00:41:00",
    }
]


export {
    createColumns,
    treeData,
}
