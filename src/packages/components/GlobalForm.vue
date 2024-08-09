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
                    <FooterComponent></FooterComponent>
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
                    <FooterComponent></FooterComponent>
                </slot>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>
<script setup>
import {NSpace, NButton} from "naive-ui"

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false
    }
})


const emit = defineEmits(['update:showModal', 'handleSubmit'])
const showModalComputed = computed({
    get() {
        return props.showModal;
    },
    set(val) {
        emit('update:showModal', val);
    },
});
const handleClick = (val) => {
    emit('update:showModal', val);
}

const FooterComponent = (props, context) => {
    return h(NSpace, {
        justify: 'end'
    }, {
        default: () => [
            h(NButton, {
                type: 'primary',
                onClick: () => handleClick(false)
            }, {default: () => '提交数据'}),
            h(NButton, {}, {default: () => '关闭'})
        ]
    })
}
</script>
