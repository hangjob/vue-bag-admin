<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #BagDownloadSite="{item}">
            <BagDownloadSite ref="bagDownloadSite" :formState="editForm.formState" :formItem="item" />
        </template>
    </bag-curd-table>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import BagDownloadSite from './components/BagDownloadSite.vue'

export default defineComponent({
    components: {
        BagDownloadSite,
    },
    setup() {
        const { tableCurd } = curdTableHock()
        const bagDownloadSite = ref()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/web/download',
            },
        }))
        tableCurd.detail.afterEach = ({ res }) => {
            bagDownloadSite.value.dataSource = JSON.parse(res.download_site)
        }
        return {
            tableCurd,
            editForm: { ...form },
            createForm: { ...cloneDeep(form) },
            bagDownloadSite,
        }
    },
})
</script>
