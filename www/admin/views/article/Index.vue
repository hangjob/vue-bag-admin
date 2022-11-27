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
        tableCurd.all.api = '/web/article/page'

        tableCurd.all.search.beforeEach = (formState, pagination) => {
            return { currentPage: pagination.current, pageSize: pagination.pageSize }
        }

        tableCurd.all.beforeSuccess = (res) => {
            tableCurd.pagination.total = res.count
            return res.rows
        }

        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/web/article',
                send: true,
            },
        }))

        return {
            tableCurd,
            editForm: form,
            createForm: { ...cloneDeep(form) },
        }
    },
})
</script>
