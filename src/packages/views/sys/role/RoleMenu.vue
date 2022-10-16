<template>
    <a-tree
        checkable
        :tree-data="treeData"
        :checkStrictly="true"
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:checkedKeys="checkedKeys"
        :replace-fields="replaceFields"
        @check="onCheck"
    >
    </a-tree>
</template>
<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue'
import {useStore} from "vuex";

export default defineComponent({
    setup() {
        const expandedKeys = ref<any[]>([]);
        const selectedKeys = ref<any[]>([]);
        const checkedKeys = ref<any[]>([]);
        const allCheckedKeys = ref<any[]>([]);

        const store = useStore()
        const treeData = computed(() => store.state.app.menuList);
        const replaceFields = {
            children: 'children',
            title: 'name',
            key: 'id'
        };

        function onCheck(checkedKeys, info) {
            // allCheckedKeys.value = checkedKeys.concat(info.halfCheckedKeys);//将父节点拼接到子节点
        }

        // 初始化默认选中
        const initCheck = (record) => {
            checkedKeys.value = record.menus.map(Number)
        }

        return {
            expandedKeys,
            selectedKeys,
            checkedKeys,
            replaceFields,
            treeData,
            onCheck,
            allCheckedKeys,
            initCheck
        }
    }
})
</script>
