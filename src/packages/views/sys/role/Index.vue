<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #table-action="{record}">
            <a-button size="small" @click="compData.handleAuthOpen(record)">设置权限</a-button>
        </template>
    </bag-curd-table>
    <Auth ref="auth" @submit="compData.handleAuthSubmit" />
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import Auth from './Auth.vue'

export default defineComponent({
    components: {
        Auth,
    },
    setup() {
        const { tableCurd } = curdTableHock()
        const auth = ref()

        const compData = reactive({
            handleAuthOpen: (record) => {
                tableCurd.edit.id = record.id
                auth.value.compData.handleOpen(true, record)
            },
            handleAuthSubmit: (menus) => {
                tableCurd.edit.directSubmit({ data: { menus } }).then(() => {
                    auth.value.compData.handleOpen(false)
                })
            },
        })
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/role',
            },
        }))

        return {
            tableCurd,
            editForm: { ...form },
            createForm: { ...cloneDeep(form) },
            auth,
            compData,
        }
    },
})
</script>
