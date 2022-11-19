<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import { toTree } from '@/packages/utils/utils'

export default defineComponent({
    setup() {
        const { tableCurd } = curdTableHock()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/web/channel',
            },
        }))
        tableCurd.all.beforeSuccess = (res: any) => {
            form.formItem.forEach((item) => {
                if (item.formData.name === 'pid') {
                    item.formData.treeData = toTree(res)
                }
            })
            return toTree(res)
        }
        const editForm = computed(() => cloneDeep(form))
        const createForm = computed(() => cloneDeep(form))
        return {
            tableCurd,
            editForm,
            createForm,
        }
    },
})
</script>
