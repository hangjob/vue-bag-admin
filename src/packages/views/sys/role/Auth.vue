<template>
    <a-drawer
        title="设置权限"
        placement="right"
        v-model:visible="visible"
        width="40%"
        wrapClassName="auth"
    >
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="菜单权限">
                <div class="auth-body">
                    <RoleMenu ref="roleMenu" />
                </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="数据权限">Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="按钮权限">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="4" tab="资源权限">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
        <div class="auth-action">
            <a-button type="primary" @click="handleSubmit">提交</a-button>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import RoleMenu from './RoleMenu.vue'

export default defineComponent({
    components: { RoleMenu },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        const roleMenu = ref()
        const handleSubmit = () => {
            context.emit('submit', roleMenu.value.allCheckedKeys)
        }
        return {
            activeKey: ref('1'),
            roleMenu,
            handleSubmit,
        }
    },
})
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
