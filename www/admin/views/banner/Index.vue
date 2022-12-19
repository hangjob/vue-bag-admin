<template>
    <bag-curd-plus :curdTable="curd.curdTable"></bag-curd-plus>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import columns from './columns'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.btns.push(
            {
                name: '测试',
                type: 'primary',
                effect: 1,
                tag: 'create',
                role: true,
            },
        )
        defaultCurdTable.apiPrefix = '/web/banner'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        return {
            curd,
        }
    },
})
</script>
