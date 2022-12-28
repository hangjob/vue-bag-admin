<template>
    <bag-curd-plus :curdTable="curd.curdTable">
        <template #BagDownloadSite="{formState,item}">
            <BagDownloadSite ref="bdsRef" :formState="formState" :formItem="item" />
        </template>
    </bag-curd-plus>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import columns from './columns'
import BagDownloadSite from './components/BagDownloadSite.vue'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {
        BagDownloadSite,
    },
    setup() {
        const bdsRef = ref()
        
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/web/download'
        
        defaultCurdTable.detail.afterRequest = function(res) {
            bdsRef.value.compData.dataSource = res.download_site ? JSON.parse(res.download_site) : []
            return { formState: res }
        }
        
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        
        return {
            curd,
            bdsRef,
        }
    },
})
</script>
