import {DataTableColumns, NButton} from "naive-ui"
import {h} from "vue"

const createColumns = ({
    play
}: {
    play: (row: any) => void
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
            resizable:true
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
                            onClick: () => play(row),
                            style:{marginRight:"5px"}
                        },
                        { default: () => "编辑" }),
                    h( NButton,
                        {
                            type:"error",
                            ghost:true,
                            size: "small",
                            onClick: () => play(row)
                        },
                        { default: () => "删除" })
                ])
            }
        }
    ]
}

export default createColumns
