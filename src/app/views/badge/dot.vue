<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="点标记" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-switch :rail-style="railStyle" @update:value="handleUpdateValue" :round="false">
                    <template #checked>
                        不显示
                    </template>
                    <template #unchecked>
                        显示
                    </template>
                </n-switch>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import {NBadge} from "naive-ui";

const railStyle = ({focused, checked}) => {
    const style = {};
    if (checked) {
        style.background = "#d03050";
        if (focused) {
            style.boxShadow = "0 0 0 2px #d0305040";
        }
    } else {
        style.background = "#2080f0";
        if (focused) {
            style.boxShadow = "0 0 0 2px #2080f040";
        }
    }
    return style;
}
const handleUpdateValue = (value) => {
    $global.helpers.depthForEach($globalStore.menus, (item) => {
        if (item.id === $globalStore.currentRouter.meta.id) {
            item.extraProps.show = !value
            item.extra = () => h(NBadge, {...item.extraProps})
        }
    })
}
</script>
