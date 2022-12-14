<template>
    <!-- 继承所有a-table的属性和事件-->
    <bag-curd-plus :curdTable="curd.curdTable">
        <template #pname="{record}">
            <span>{{ compData.formatCell({ record }) }}</span>
        </template>
    </bag-curd-plus>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import columns from './columns'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {},
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.all.api = '/web/banner/page'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        const compData = reactive({
            formatCell({ record }) {
                return record.name
            },
        })
        console.log(curd)
        return {
            bordered: true,
            columns,
            curd,
            compData,
        }
    },
})
</script>
