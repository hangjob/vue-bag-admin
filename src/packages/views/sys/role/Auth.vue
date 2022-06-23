<template>
    <a-drawer
        title="设置权限"
        placement="right"
        v-model:visible="visible"
        width="40%"
        wrapClassName="auth"
    >
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="角色菜单">
                <div class="auth-body">
                    <a-tree
                        checkable
                        :tree-data="treeData"
                        v-model:expandedKeys="expandedKeys"
                        v-model:selectedKeys="selectedKeys"
                        v-model:checkedKeys="checkedKeys"
                        :replace-fields="replaceFields"
                    >
                    </a-tree>
                </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="数据权限">Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="按钮权限">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="4" tab="资源权限">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
        <div class="auth-action">
            <a-button type="primary">提交</a-button>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue';
import {TreeDataItem} from 'ant-design-vue/es/tree/Tree';
import {useStore} from "vuex";

export default defineComponent({
    setup() {
        const visible = ref<boolean>(false);
        const showDrawer = (record) => {
            console.log(record)
            visible.value = true;
        };
        const store = useStore()
        const treeData = computed(()=>store.state.app.menuList);
        const replaceFields = {
            children: 'children',
            title: 'name',
            key:'id'
        };
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
        return {
            treeData,
            expandedKeys,
            selectedKeys,
            checkedKeys,
            visible,
            showDrawer,
            activeKey: ref('1'),
            replaceFields
        };
    },
});
</script>
<style lang="less">
.auth {
    .ant-drawer-body {
        padding: 0 0 20px 0;
    }

    &-body {
        padding: 0 10px;
    }

    &-action {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        left: 0;
        background-color: #fff;
        border-radius: 0 0 4px 4px;
    }
}
</style>
