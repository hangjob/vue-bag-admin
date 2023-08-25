import {DataTableColumns, NButton, NPopconfirm, useMessage} from "naive-ui"
import {h} from "vue"

const createColumns = ({compHandle}): DataTableColumns => {
    return [
        {
            title: "ID",
            key: "id",
            align: "center",
            width: 80,
        },
        {
            title: "用户名",
            key: "username",
            align: "center",
            maxWidth: 120,
            ellipsis: true,
        },
        {
            title: "年龄",
            key: "age",
            align: "center",
            ellipsis: true,
            maxWidth: 120,
        },
        {
            title: "邮箱",
            key: "email",
            align: "center",
            ellipsis: true,
            maxWidth: 120,
        },
        {
            title: "描述",
            key: "describe",
            align: "center",
            ellipsis: true
        },
        {
            title: "公司",
            key: "company",
            align: "center",
            ellipsis: true,
            maxWidth: 150,
        },
        {
            title: "坐标",
            key: "address",
            align: "center",
            ellipsis: true,
            width: 150,
        },
        {
            title: "操作",
            key: "actions",
            align: "center",
            width: 130,
            render(row) {
                return h("div", [
                    h(NButton,
                        {
                            type: "success",
                            size: "small",
                            ghost: true,
                            onClick: () => compHandle.edit(row),
                            style: {marginRight: "5px"}
                        },
                        {default: () => "编辑"}),

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
        label: "品茗科技",
        key: "1",
        children: [{label: "数字政务", key: "10"}, {label: "Ai事业部", key: "11"}, {
            label: "住建事业部",
            key: "12"
        }, {label: "胜算事业部", key: "13"}]
    },
    {
        label: "丰树科技",
        key: "2",
        children: [{label: "塔吊事业部", key: "21"}, {label: "人工智能", key: "22"}, {label: "大数据研发", key: "23"}]
    },
    {
        label: "合作伙伴",
        key: "3",
        children: [{label: "阿里巴巴", key: "31"}, {label: "新浪科技", key: "32"}, {label: "网易云", key: "33"}]
    }
]


const tableSize = [
    {
        label: "较小",
        value: "small",
    },
    {
        label: "适中",
        value: "medium",
    },
    {
        label: "较大",
        value: "large",
    }
]

export {
    createColumns,
    treeData,
    tableSize
}
