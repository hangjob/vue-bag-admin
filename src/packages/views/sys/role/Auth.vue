<template>
    <a-drawer
        title="设置权限"
        placement="right"
        v-model:visible="compData.visible"
        width="40%"
        class="auth"
    >
        <a-tabs class="auth-tabs" v-model:activeKey="compData.activeKey">
            <a-tab-pane key="1" tab="菜单权限">
                <div class="auth-body">
                    <RoleMenu ref="roleMenu" />
                </div>
            </a-tab-pane>
        </a-tabs>
        <div class="auth-action">
            <a-button type="primary" @click="compData.handleSubmit">提交</a-button>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, reactive, ref, watch } from 'vue'
import RoleMenu from './RoleMenu.vue'

export default defineComponent({
    components: { RoleMenu },
    setup(props, context) {
        const roleMenu = ref()

        const compData = reactive({
            visible: false,
            activeKey: '1',
            handleOpen: (show, record) => {
                compData.visible = show
                if (record) {
                    nextTick(() => {
                        roleMenu.value.compData.handleInitCheck(record)
                    })
                }
            },
            handleSubmit: () => {
                context.emit('submit', roleMenu.value.compData.checkedKeys.checked)
            },
        })
        return {
            compData,
            roleMenu,
        }
    },
})
</script>
<style lang="less">
.auth {
    .ant-drawer-body {
        padding: 0 0 20px 0;
    }

    &-tabs{
        .ant-tabs-nav{
            padding: 0 10px;
        }
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
