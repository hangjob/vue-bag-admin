<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'

export default defineComponent({
    setup() {
        const { tableCurd } = curdTableHock()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/web/website',
            },
        }))
        tableCurd.all.search.formItem.forEach((item) => {
            if (item.name === 'url') {
                setTimeout(() => {
                    item.options = [{ name: '测试', value: 1111 }] // 异步修改数据也更新的
                }, 3000)
            }
        })
        return {
            tableCurd,
            editForm: { ...form },
            createForm: { ...cloneDeep(form) },
        }
    },
})
</script>
