<template>
    <n-card id="global_search_card" content-style="padding:24px 10px 0px 10px">
        <slot :cols="cols" name="search"></slot>
    </n-card>
    <n-card content-style="padding:10px" header-style="padding:10px" style="margin-top: 10px">
        <template #header>
            <slot name="header"></slot>
        </template>
        <slot :height="height" name="table"></slot>
    </n-card>
</template>
<script setup>
import $ from "jquery"
import {getCurrentInstance} from "vue";
import {debounce} from "radash"
import currentDevice from "current-device"

const {appContext: {config: {globalProperties}}} = getCurrentInstance();
const {isDesktop, isMobile, isTablet} = globalProperties.$globalStore.deviceInfo;
const height = ref(400)
const cols = ref(4);

if (isDesktop) {
    cols.value = 4;
}
if (isTablet) {
    cols.value = 2
}
if (isMobile) {
    cols.value = 1
}
nextTick(() => {
    let dom = $('#global_search_card')
    height.value = dom.parent().height() - dom.height() - 90;
})
</script>
