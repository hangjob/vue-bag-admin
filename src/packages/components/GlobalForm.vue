<template>
    <n-modal v-if="$globalStore.configs.formStyle === 'dialogue'"
             :mask-closable="false"
             v-model:show="showModalComputed"
             transform-origin="center"
             :closeOnEsc="false"
             :maskClosable="false"
             v-bind="$attrs.modal"
    >
        <n-card
            closable
            style="width: 80%"
            size="medium"
            v-bind="$attrs.modal"
            @click="handleClick(false)"
        >
            <slot></slot>
            <template #footer>
                <slot name="footer">
                    <n-space justify="end">
                        <n-button @click="emit('handleSubmit')" type="primary">提交数据</n-button>
                        <n-button @click="handleClick(false)">关闭</n-button>
                    </n-space>
                </slot>
            </template>
        </n-card>
    </n-modal>
    <n-drawer
        v-else
        v-model:show="showModalComputed"
        default-width="600px"
        placement="right"
        resizable
        :closeOnEsc="false"
        :maskClosable="false"
        v-bind="$attrs.modal"
    >
        <n-drawer-content closable v-bind="$attrs.modal">
            <slot></slot>
            <template #footer>
                <slot name="footer">
                    <n-space justify="end">
                        <n-button @click="emit('handleSubmit')" type="primary">提交数据</n-button>
                        <n-button @click="handleClick(false)">关闭</n-button>
                    </n-space>
                </slot>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>
<script setup>
const props  = defineProps({
    showModal: {
        type: Boolean,
        default: false
    }
})
const attrs = useAttrs()
console.log(attrs)
const emit = defineEmits(['update:showModal','handleSubmit'])
const showModalComputed = computed({
    get() {
        return props.showModal;
    },
    set(val) {
        emit('update:showModal', val);
    },
});
const handleClick = (val)=>{
    emit('update:showModal', val);
}
</script>
