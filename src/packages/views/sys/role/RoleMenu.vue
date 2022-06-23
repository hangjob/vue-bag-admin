<template>
    <a-tree
        checkable
        :tree-data="treeData"
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
    setup(){
        const expandedKeys = ref<string[]>([]);
        const selectedKeys = ref<string[]>([]);
        const checkedKeys = ref<string[]>([]);
        watch(expandedKeys, () => {
            console.log('expandedKeys', expandedKeys);
        });
        watch(selectedKeys, () => {
            console.log('selectedKeys', selectedKeys);
        });
        watch(checkedKeys, () => {
            console.log('checkedKeys', checkedKeys);
        });

        const store = useStore()
        const treeData = computed(()=>store.state.app.menuList);
        const replaceFields = {
            children: 'children',
            title: 'name',
            key:'id'
        };

        function onCheck(checkedKeys,info) {
            let allCheckedKeys = checkedKeys.concat(info.halfCheckedKeys);//将父节点拼接到子节点
            console.log(allCheckedKeys)
        }

        return {
            expandedKeys,
            selectedKeys,
            checkedKeys,
            replaceFields,
            treeData,
            onCheck
        }
    }
})
</script>
