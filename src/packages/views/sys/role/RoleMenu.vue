<template>
    <a-tree
        checkable
        :tree-data="treeData"
        :checkStrictly="true"
        v-model:expandedKeys="compData.expandedKeys"
        v-model:selectedKeys="compData.selectedKeys"
        v-model:checkedKeys="compData.checkedKeys"
        :field-names="compData.replaceFields"
        @check="compData.handleOnCheck"
    >
    </a-tree>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import appPinia from '@/packages/pinia/app'

export default defineComponent({
    setup() {
        const appStore = appPinia()
        const compData = reactive({
            expandedKeys: [],
            selectedKeys: [],
            checkedKeys: [],
            allCheckedKeys: [],
            replaceFields: {
                children: 'children',
                title: 'name',
                key: 'id',
            },
            handleInitCheck: (record) => {
                compData.checkedKeys = record.menus.map(Number)
            },
            handleOnCheck: (checkedKeys, info) => {
                // allCheckedKeys.value = checkedKeys.concat(info.halfCheckedKeys);//将父节点拼接到子节点
            },
        })

        const treeData = computed(() => appStore.menus)

        return {
            treeData,
            compData,
        }
    },
})
</script>
