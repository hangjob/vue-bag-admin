<template>
    <bag-curd-plus :curdTable="curd.curdTable">
    </bag-curd-plus>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import columns from './columns'
import { findChildrenDepth } from '@/packages/utils/lodash'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/branch'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        const compData = reactive({})
        defaultCurdTable.all.afterRequest = function(res) {
            columns.forEach((item: any) => {
                if (item.dataIndex === 'pid') {
                    const options = res.map((todo) => {
                        return { label: todo.name, value: todo.id }
                    })
                    options.unshift({ label: '请选择', value: '' })
                    item.curd.$elAttrs.options = options
                }
            })
            return { dataSource: res, total: res.length }
        }
        return {
            compData,
            curd,
        }
    },
})
</script>
