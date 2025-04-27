<template>
    <n-drawer v-if="isDrawerMode" v-model:show="$globalStore.formCreateShow" width="700px">
        <n-drawer-content closable header-style="padding:10px;"
                          footer-style="padding:10px"
                          :title="$globalStore.formCreate.title">
            <form-create :rule="$globalStore.formCreate.rule"
                         v-model:api="$globalStore.formCreate.fApi"
                         :option="$globalStore.formCreate.options"/>
            <template #footer>
                <component is="FormCreateFooterButtons">
                    <CommonFooter></CommonFooter>
                </component>
            </template>
        </n-drawer-content>
    </n-drawer>
    <n-modal :mask-closable="false" v-else-if="isModalMode" :block-scroll="false"
             v-model:show="$globalStore.formCreateShow">
        <n-card closable @close="onClose" :segmented="{content: true,footer:true}"
                header-style="padding:10px;"
                footer-style="padding:10px" style="height: 80vh;width: 80%; overflow-y: scroll"
                :title="$globalStore.formCreate.title" :bordered="false">
            <form-create :rule="$globalStore.formCreate.rule"
                         v-model:api="$globalStore.formCreate.fApi"
                         :option="$globalStore.formCreate.options"/>
            <template #footer>
                <component is="FormCreateFooterButtons">
                    <CommonFooter></CommonFooter>
                </component>
            </template>
        </n-card>
    </n-modal>
    <template v-else>
        <n-card :bordered="false">
            <form-create :rule="$globalStore.formCreate.rule" v-model:api="$globalStore.formCreate.fApi"
                         :option="$globalStore.formCreate.options"/>
            <template #footer>
                <component is="FormCreateFooterButtons">
                    <CommonFooter></CommonFooter>
                </component>
            </template>
        </n-card>
    </template>
</template>
<!--CommonFooter 可以使用组件替换 -->
<script setup>
import {NButton, NSpace} from "naive-ui"
import {isFunction} from "radash"

const isDrawerMode = computed(() => $globalStore.configs.formMode === 'drawer')
const isModalMode = computed(() => $globalStore.configs.formMode === 'modal')

const footerJustify = computed(() =>
    isDrawerMode.value ? 'start' : 'end'
)

const fApi = ref(null)

const footerButtons = computed(() => {
    return [
        {
            text: "重置",
            type: 'default',
            action: () => {
                $globalStore.formCreate.fApi.resetFields()
            }
        },
        {
            text: '提交',
            type: 'success',
            action: handleSubmit
        }
    ]
})

// 正确的函数式插槽定义
const CommonFooter = () => {
    return h(NSpace, {justify: footerJustify.value},
        {
            default: () => footerButtons.value.map(btn =>
                h(NButton, {
                    type: btn.type,
                    onClick: btn.action,
                }, () => btn.text)
            )
        }
    )
}


const onClose = () => {
    $globalStore.formCreateShow = false;
}

const handleSubmit = () => {
    if (isFunction($globalStore.formCreate.event.submit)) {
        $globalStore.formCreate.event.submit()
    }
};
</script>
