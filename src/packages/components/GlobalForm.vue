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
            @close="handleClick(false)"
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
import {NSpace, NButton, NCard} from "naive-ui"
import {getCurrentInstance} from "vue";
import {md5} from 'js-md5';

const {appContext: {config: {globalProperties}}} = getCurrentInstance();

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false
    },
})

const slots = useSlots()
const attrs = useAttrs()
watch(props, () => {
    if (props.showModal && globalProperties.$globalStore.configs.formStyle === 'tab') {
        const title = globalProperties.$global?.helpers?.formatTitle(globalProperties.$global, globalProperties.$route.meta) + '-' + attrs?.modal?.title;
        const id = 'form_' + (attrs?.modal?.id || md5(title))
        const component = h(NCard, {}, {
            default: () => slots.default?.(),
            footer: () => slots?.footer?.() || FooterComponent()
        })
        const options = {name: id, path: id, meta: {title, id}}
        globalProperties.$router.addRoute(globalProperties.$route.meta.root ? globalProperties.$route.meta.root : 'layout', {
            component,
            ...options
        })
        globalProperties.$router.push(options.path)
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

const FooterComponent = () => {
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
