<template>
    <div id="search_wrap">
        <n-card class="search_card" content-style="padding:24px 10px 0px 10px">
            <slot :tableCompData="compData" name="search"></slot>
        </n-card>
        <n-card content-style="padding:10px" header-style="padding:10px" style="margin-top: 10px">
            <template #header>
                <slot :tableCompData="compData" name="header"></slot>
            </template>
            <slot :tableCompData="compData" name="table"></slot>
        </n-card>
        <n-modal v-if="$globalStore.configs.formStyle === 'dialogue'"
                 :mask-closable="false"
                 v-model:show="compData.showModal" transform-origin="center">
            <n-card closable @close="compData.showModal = false" style="width: 80%" size="medium" v-bind="$attrs.modal">
                <slot :tableCompData="compData" name="form"></slot>
                <template #footer>
                    <slot :tableCompData="compData" name="form-footer"></slot>
                </template>
            </n-card>
        </n-modal>
        <n-drawer
            v-else
            v-model:show="compData.showModal"
            default-width="600px"
            placement="right"
            resizable
        >
            <n-drawer-content closable v-bind="$attrs.modal">
                <slot :tableCompData="compData" name="form"></slot>
                <template #footer>
                    <slot :tableCompData="compData" name="form-footer"></slot>
                </template>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>
<script setup>
import $ from "jquery"

const compData = reactive({
    height: 400,
    showModal: false,
})
nextTick(() => {
    let dom = $('#search_wrap')
    compData.height = dom.parent().height() - dom.find('.search_card').height() - 90;
})
</script>
