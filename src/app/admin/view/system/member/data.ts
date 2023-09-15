import {DataTableColumns, NButton, NPopconfirm, useMessage} from "naive-ui"
import {h} from "vue"

const createColumns = ({compHandle}): DataTableColumns => {
    return [
        {
            type: "selection",
        },
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
            maxWidth: 100,
            ellipsis: true,
        },
        {
            title: "年龄",
            key: "age",
            align: "center",
            ellipsis: true,
        },
        {
            title: "邮箱",
            key: "email",
            align: "center",
            ellipsis: true,
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
        },
        {
            title: "坐标",
            key: "address",
            align: "center",
            ellipsis: true,
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
        label: "阿里巴巴",
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


const emailOptions = ["@gmail.com", "@163.com", "@qq.com"]

const jobOptions = [
    {label: "前端开发", value: "前端开发"},
    {label: "前端架构师", value: "前端架构师"},
    {label: "UI设计师", value: "UI设计师"},
    {label: "产品经理", value: "产品经理"},
    {label: "后端开发", value: "后端开发"},
    {label: "测试工程师", value: "测试工程师"},
    {label: "运维工程师", value: "运维工程师"},
    {label: "3D模型开发", value: "3D模型开发"},
    {label: "全栈开发", value: "全栈开发"},
    {label: "场景设计师", value: "场景设计师"},
    {label: "IOS开发", value: "IOS开发"},
    {label: "Android开发", value: "Android开发"},
    {label: "前端菜鸟-羊先生", value: "前端菜鸟-羊先生"}
]

export {
    createColumns,
    treeData,
    tableSize,
    emailOptions,
    jobOptions
}
