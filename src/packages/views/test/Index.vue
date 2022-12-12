<template>
    <!-- 继承所有a-table的属性和事件-->
    <BagCurdTablePlus :curdTable="curd.curdTable"
    ></BagCurdTablePlus>
</template>
<script lang="ts">
import BagCurdTablePlus from './CurdPlus.vue'
import { defineComponent } from 'vue'
import columns from './columns'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {
        BagCurdTablePlus,
    },
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/web/banner'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        console.log(curd)
        return {
            bordered: true,
            columns,
            curd,
        }
    },
})
</script>
