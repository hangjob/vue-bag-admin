<template>
    <bag-curd-table :form="form" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import tableHock, { formHock } from '@/packages/hook/table'
import columns from './columns'

export default defineComponent({
    setup() {

        const curdCreate = ref()
        const formEdit = ref()
        const { tableCurd } = tableHock()
        tableCurd.apiPrefix = '/web/website'
        tableCurd.create.refForm = curdCreate // 添加组件
        tableCurd.edit.refForm = formEdit // 编辑组件
        tableCurd.all.handle() // 执行数据请求
        tableCurd.columns = columns.filter((item) => item.visible !== false) // 过滤表格不需要展示的列
        columns.filter(item => item.formSearch).map((item: any) => {
            // 设置需要表单的搜索的字段
            tableCurd.all.search.formState[item.formSearch.name] = item.formSearch.props?.defaultValue || ''
            tableCurd.all.search.formItem.push(item.formSearch)
        })
        tableCurd.all.search.formItem.forEach((item) => {
            if (item.name === 'url') {
                setTimeout(() => {
                    item.options = [{ name: '测试', value: 1111 }] // 异步修改数据也更新的
                }, 3000)
            }
        })
        const form = reactive(formHock({ columns }))
        console.log(form)
        return {
            tableCurd,
            curdCreate,
            formEdit,
            columns: columns.filter((item) => item.visible !== false),
            form,
        }
    },
})
</script>
