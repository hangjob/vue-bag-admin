<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #table-action="{record}">
            <a-button size="small" @click="compData.handlePasOpen(record)">设置密码</a-button>
        </template>
    </bag-curd-table>
    <Pas ref="pas" @submit="compData.handlePasSubmit" />
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import Pas from './Pas.vue'
import { toTree } from '@/packages/utils/utils'
import { apiAll } from '@/packages/service/role'

export default defineComponent({
    components: {
        Pas,
    },
    setup() {
        const { tableCurd } = curdTableHock()
        const pas = ref()

        const compData = reactive({
            handlePasOpen: (record) => {
                tableCurd.edit.id = record.id
                pas.value.compData.handleOpen(record)
            },
        })

        tableCurd.all.beforeSuccess = (res: any) => {
            form.formItem.forEach((item) => {
                if (item.formData.name === 'roles') {
                    apiAll().then((res) => {
                        item.formData.options = res
                    })
                }
            })
            return toTree(res)
        }

        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/member',
            },
        }))

        const editForm = computed(() => cloneDeep(form))
        const createForm = computed(() => cloneDeep(form))

        return {
            tableCurd,
            editForm,
            createForm,
            pas,
            compData,
        }
    },
})
</script>
