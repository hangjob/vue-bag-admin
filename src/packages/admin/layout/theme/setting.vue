<template>
    <a-drawer
            title="设置主题"
            :placement="placement"
            :closable="false"
            :width="400"
            :visible="visible"
            @close="onClose"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <div
                :style="{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
          }"
        >
            <a-button style="margin-right: 8px" @click="onClose">关闭</a-button>
            <a-button type="primary" @click="onClose">保存设置</a-button>
        </div>
    </a-drawer>
</template>
<script>
    import {defineComponent, ref} from 'vue';

    export default defineComponent({
        setup() {
            const placement = ref('right');
            const visible = ref(false);

            const showDrawer = () => {
                visible.value = true;
            };

            const onClose = () => {
                visible.value = false;
            };

            return {
                placement,
                visible,
                showDrawer,
                onClose,
            };
        },
    });
</script>