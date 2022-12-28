<template>
    <bag-curd-plus :curdTable="curd.curdTable"></bag-curd-plus>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import columns from './columns'
import { toTree } from '@/packages/utils/utils'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'
import { cloneDeep } from 'lodash'

export default defineComponent({
    setup() {
        
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/web/channel'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        
        defaultCurdTable.all.afterRequest = (res: any) => {
            const dataSource = toTree(res)
            columns.forEach((item: any) => {
                if (item.dataIndex === 'pid') {
                    const treeData = cloneDeep(dataSource)
                    item.curd.$elAttrs.treeData = treeData
                    treeData.unshift({ name: '请选择', id: 0 })
                }
            })
            return {
                dataSource,
                total: dataSource.length,
            }
        }
        return {
            curd,
        }
    },
})
</script>
