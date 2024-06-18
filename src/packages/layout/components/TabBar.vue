<template>
    <n-el tag="div" class="flex flex-shrink-0 border-solid border-b bag-border-color items-center">
        <n-icon size="22" class="px-2 w-auto flex-shrink-0 cursor-pointer">
            <ChevronBackOutline></ChevronBackOutline>
        </n-icon>
        <n-el tag="div"
              class="box-border py-2 flex-1 px-2 flex-shrink-0 border-l border-r border-solid bag-border-color no-scrollbar overflow-y-hidden overflow-x-scroll flex whitespace-nowrap">
            <n-space :wrap="false">
                <n-button icon-placement="right" class="cursor-pointer" v-for="item in $globalStore.tabs"
                          :type="$globalStore.currentRouter.path === item.path ? 'success' : ''" closable
                          @click="$global.router.push(item)">
                    {{ item.title }}
                    <template #icon>
                        <n-icon @click.stop="$globalHook.useCloseTabBarJump(item)">
                            <CloseOutline/>
                        </n-icon>
                    </template>
                </n-button>
            </n-space>
        </n-el>
        <n-icon size="22"
                class="px-2 w-auto flex-shrink-0 cursor-pointer content-center h-full border-r border-solid bag-border-color">
            <ChevronForward></ChevronForward>
        </n-icon>
        <n-dropdown :options="popselectOptions">
            <n-icon size="22" class="px-2 w-auto flex-shrink-0 cursor-pointer">
                <HappyOutline></HappyOutline>
            </n-icon>
        </n-dropdown>
    </n-el>
</template>
<script setup>
import {ref} from "vue"
import {
    ChevronBackOutline,
    ChevronForward,
    LogInOutline,
    HappyOutline,
    Expand,
    SyncOutline,
    PowerOutline,
    SwapHorizontalOutline,
    ArrowBackOutline,
    ArrowForward,
    Resize,
    LeafOutline,
    CloseOutline
} from "@vicons/ionicons5"
import {renderIcon} from "@/packages/helpers/index.js";

const popselectOptions = ref([
    {
        label: '内容区域全屏',
        value: 'Drive My Car',
        icon: renderIcon(Expand)
    },
    {
        label: '刷新当前标签',
        value: 'Drive My Car',
        icon: renderIcon(SyncOutline)
    },
    {
        label: '关闭当前标签',
        value: 'Drive My Car',
        icon: renderIcon(PowerOutline)
    },
    {
        type: 'divider',
        key: 'd1'
    },
    {
        label: '关闭左侧标签',
        value: 'Drive My Car',
        icon: renderIcon(ArrowBackOutline)
    },
    {
        label: '关闭右侧标签',
        value: 'Drive My Car',
        icon: renderIcon(ArrowForward)
    },
    {
        type: 'divider',
        key: 'd1'
    },
    {
        label: '模态窗口标签',
        value: 'Drive My Car',
        icon: renderIcon(Resize)
    },
    {
        label: '关闭全部标签',
        value: 'Drive My Car',
        icon: renderIcon(LeafOutline)
    },
])
</script>
