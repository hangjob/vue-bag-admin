<template>
    <bag-curd-plus :curdTable="curd.curdTable">
        <template #custorm_action="{curdTable,record}">
            <a-space>
                <a-button size="small" @click="compData.handlePasOpen({record})">设置密码</a-button>
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
    <Pas ref="pasRef" />
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import Pas from './Pas.vue'
import { toTree } from '@/packages/utils/utils'
import { apiAll } from '@/packages/service/role'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {
        Pas,
    },
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.apiPrefix = '/member'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        const pasRef = ref()
        
        columns.forEach((item: any) => {
            if (item.dataIndex === 'roles') {
                apiAll().then((res: any) => {
                    const options = res.map((todo) => {
                        return { label: todo.name, value: todo.id }
                    })
                    options.unshift({ label: '请选择', value: '' })
                    item.curd.$elAttrs.options = options
                })
            }
        })
        
        const compData = reactive({
            handlePasOpen: ({ record }) => {
                pasRef.value.compData.handleOpen({ record })
            },
        })
        
        return {
            pasRef,
            compData,
            curd,
        }
    },
})
</script>
