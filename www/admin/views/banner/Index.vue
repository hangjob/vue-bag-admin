<template>
    <bag-curd-plus :curdTable="curd.curdTable"></bag-curd-plus>
</template>
<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, onMounted, watchEffect } from 'vue'
import columns from './columns'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/web/banner'
        defaultCurdTable.create.route = {
            path: '/curd/create',
        }
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        return {
            curd,
        }
    },
})
</script>
