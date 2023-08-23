import {DataTableColumns, NButton,NPopconfirm,useMessage} from "naive-ui"
import {h} from "vue"

const createColumns = ({
    handleEdit,
    handleDelete
}): DataTableColumns => {
    return [
        {
            title: "ID",
            key: "id",
            align:"center",
            width:80,
        },
        {
            title: "用户名",
            key: "username",
            align:"center",
            maxWidth:120,
            ellipsis:true,
        },
        {
            title: "年龄",
            key: "age",
            align:"center",
            ellipsis:true,
            maxWidth:120,
        },
        {
            title: "邮箱",
            key: "email",
            align:"center",
            ellipsis:true,
            maxWidth:120,
        },
        {
            title: "描述",
            key: "describe",
            align:"center",
            ellipsis:true
        },
        {
            title: "公司",
            key: "company",
            align:"center",
            ellipsis:true,
            maxWidth:150,
        },
        {
            title: "坐标",
            key: "address",
            align:"center",
            ellipsis:true,
            width:150,
        },
        {
            title: "操作",
            key: "actions",
            align:"center",
            width:130,
            render (row) {
                return h("div",[
                    h( NButton,
                        {
                            type:"success",
                            size: "small",
                            ghost:true,
                            onClick: () => handleEdit(row),
                            style:{marginRight:"5px"}
                        },
                        { default: () => "编辑" }),

                    h(  NPopconfirm,
                        {
                            onPositiveClick: () => {
                                handleDelete(row)
                            },
                            negativeText:"取消",
                            positiveText:"确定"
                        },
                        {
                            trigger: () => {
                                return h(
                                    NButton,
                                    {
                                        type:"error",
                                        strong: true,
                                        size: "small",
                                        ghost:true,
                                    },
                                    { default: () => "删除" }
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

export default createColumns
