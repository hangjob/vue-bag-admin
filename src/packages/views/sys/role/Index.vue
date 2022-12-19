<template>
    <bag-curd-plus :curdTable="curd.curdTable">
        <template #custorm_action="{curdTable,record}">
            <a-space>
                <a-button size="small" @click="compData.handleAuthOpen(record)">设置权限</a-button>
                <a-button type="primary" size="small" @click="curdTable.edit.change({record})">编辑</a-button>
                <a-popconfirm
                    :title="`你确定删除嘛？`"
                    ok-text="确认"
                    cancel-text="关闭"
                    placement="topRight"
                    @confirm="curdTable.delete.submit({record})"
                >
                    <a-button type="primary" danger size="small">删除</a-button>
                </a-popconfirm>
            </a-space>
        </template>
    </bag-curd-plus>
    <Auth ref="auth" @submit="compData.handleAuthSubmit" />
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import Auth from './Auth.vue'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {
        Auth,
    },
    setup() {
    
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/role'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        
        
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

        const editForm = computed(() => cloneDeep(form))
        const createForm = computed(() => cloneDeep(form))
        return {
            tableCurd,
            editForm,
            createForm,
            auth,
            compData,
            curd
        }
    },
})
</script>
