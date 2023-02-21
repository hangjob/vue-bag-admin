<template>
<!--    <bag-curd-table :curdTable="curd.curdTable"></bag-curd-table>-->
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import columns from './columns'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'
import {cloneDeep} from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
export default defineComponent({
    setup() {
        const {tableCurd} = curdTableHock()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/branch',
            },
        }))
    
        tableCurd.all.beforeSuccess = (res: any) => {
            console.log(res)
            tableCurd.pagination.total = 100
            form.formItem.forEach((item) => {
                if (item.formData.name === 'pid') {
                    item.formData.options = res
                }
            })
        }
    
        tableCurd.tableChange = (pagination, filters, sorter, { currentDataSource })=>{
            tableCurd.pagination.current = pagination.current
            tableCurd.pagination.pageSize = pagination.pageSize;
            tableCurd.loading = true
            tableCurd.all.handle()
        }
        
        console.log(tableCurd)
     
        const editForm = cloneDeep(form)
        const createForm = cloneDeep(form)
    
        return {
            tableCurd,
            editForm,
            createForm,
        }
    },
})
</script>
