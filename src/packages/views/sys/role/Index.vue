<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #table-action="{record}">
            <a-button size="small" @click="handleOpenAuth(record)">设置权限</a-button>
        </template>
    </bag-curd-table>
    <Auth ref="formAuth" @submit="authSubmit" />
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
        const formAuth = ref()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/role',
            },
        }))
        const handleOpenAuth = (record) => {
            tableCurd.edit.id = record.id
            formAuth.value.handleOpen(true, record)
        }
        // 权限提交
        const authSubmit = (menus) => {
            tableCurd.edit.directSubmit({ data: { menus } }).then(() => {
                formAuth.value.handleOpen(false)
            })
        }
        return {
            tableCurd,
            editForm: { ...form },
            createForm: { ...cloneDeep(form) },
            handleOpenAuth,
            authSubmit,
            formAuth,
        }
    },
})
</script>
