<template>
    <bag-curd-plus :curdTable="curd.curdTable"></bag-curd-plus>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import columns from './columns'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {},
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/web/banner'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        return {
            curd,
        }
    },
})
</script>
