<template>
    <a-drawer
        title="设置菜单页按钮"
        placement="right"
        v-model:visible="visible"
        width="40%"
        wrapClassName="auth"
    >

        <div>
            11
        </div>
        <div class="auth-action">
            <a-button type="primary" @click="handleSubmit">提交</a-button>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from 'vue'

export default defineComponent({
    setup(props, context) {

        const handleSubmit = () => {

        }
        const visible = ref(false)
        const handleOpen = (show, record) => {
            visible.value = true
        }
        return {
            handleSubmit,
            visible,
            handleOpen,
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
