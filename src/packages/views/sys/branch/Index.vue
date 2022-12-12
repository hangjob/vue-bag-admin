<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #pname="{record}">
            <a-tag class="bag-button-color-green">{{ compData.getName({ record }) }}</a-tag>
        </template>
    </bag-curd-table>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import { findChildrenDepth } from '@/packages/utils/lodash'

export default defineComponent({
    setup() {
        const { tableCurd } = curdTableHock()
        // 删除 第 0个 数组
        // tableCurd.btns.splice(0,1)

        // 添加
        tableCurd.btns.push({
            name: '测试', // 名称
            func: () => alert('测试'), // 事件
            type: 'primary', // 按钮type 跟ant-design-vue button组件保持一致
        })
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/web/branch',
            },
        }))
        tableCurd.all.beforeSuccess = (res: any) => {
            form.formItem.forEach((item) => {
                if (item.formData.name === 'pid') {
                    item.formData.options = res
                }
            })
        }
        const compData = reactive({
            getName: ({ record }: { record: any }) => {
                const res: any = findChildrenDepth({
                    key: 'id',
                    value: record.pid,
                    node: 'children',
                }, tableCurd.tableData)
                return (res && res.name) || ''
            },
        })

        const editForm = cloneDeep(form)
        const createForm = cloneDeep(form)

        return {
            tableCurd,
            editForm,
            createForm,
            compData,
        }
    },
})
</script>
