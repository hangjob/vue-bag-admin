<template>
    <n-el tag="div" class="flex flex-shrink-0 border-solid border-b bag-border-color items-center">
        <n-icon size="20" class="px-2 w-auto flex-shrink-0 cursor-pointer">
            <ChevronBackOutline></ChevronBackOutline>
        </n-icon>
        <n-el v-if="$globalStore.configs.tabStyle === 'button'" tag="div"
              class="box-border py-1 flex-1 px-2 flex-shrink-0 border-l border-r border-solid bag-border-color no-scrollbar overflow-y-hidden overflow-x-scroll flex whitespace-nowrap">
            <n-space :wrap="false">
                <n-button :color="$globalStore.currentRouter.path === item.path ? $globalStore.theme.color : ''"
                          icon-placement="right" class="cursor-pointer" v-for="item in $globalStore.tabs"
                          closable
                          @click="$global.router.push(item)">
                    {{ $global?.helpers?.formatTitle($global, item) }}
                    <template v-if="item.isClose" #icon>
                        <n-icon size="18" @click.stop="$globalHook.useCloseTabBarJump(item)">
                            <CloseOutline/>
                        </n-icon>
                    </template>
                </n-button>
            </n-space>
        </n-el>
        <n-el v-if="$globalStore.configs.tabStyle === 'card'" tag="div"
              class="box-border flex-1 flex-shrink-0 border-l border-r border-solid bag-border-color no-scrollbar overflow-y-hidden overflow-x-scroll flex whitespace-nowrap">
            <n-space :wrap="false">
                <div :class="['flex px-3 py-2 items-center justify-center cursor-pointer']"
                     :style="tabStyle($globalStore,item)"
                     v-for="item in $globalStore.tabs" @click="$global.router.push(item)">
                    <span>{{ $global?.helpers?.formatTitle($global, item) }}</span>
                    <template v-if="item.isClose">
                        <n-icon size="18" @click.stop="$globalHook.useCloseTabBarJump(item)">
                            <CloseOutline/>
                        </n-icon>
                    </template>
                </div>
            </n-space>
        </n-el>
        <n-icon size="20"
                class="px-2 w-auto flex-shrink-0 cursor-pointer content-center h-full border-r border-solid bag-border-color">
            <ChevronForward></ChevronForward>
        </n-icon>
        <n-dropdown key-field="localesKey" :render-label="(item)=>$global?.helpers?.formatTitle($global, item)"
                    :options="popselectOptions"
                    @select="(key)=>handlePopselectOptions($global,$globalHook,$globalStore,key)">
            <n-icon size="20" class="px-2 w-auto flex-shrink-0 cursor-pointer">
                <HappyOutline></HappyOutline>
            </n-icon>
        </n-dropdown>
    </n-el>
</template>
<script setup>
import {ref} from "vue"
import {useWinBox} from 'vue-winbox'
import {useFullscreen} from 'vue-hooks-plus'
import {
    ChevronBackOutline, ChevronForward, HappyOutline, Expand, SyncOutline, PowerOutline, ArrowBackOutline, ArrowForward,
    Resize, LeafOutline, CloseOutline
} from "@vicons/ionicons5"
import {renderIcon} from "@/packages/helpers/index.js";

const createWindow = useWinBox()
const popselectOptions = ref([
    {localesKey: 'contentFullScreen', icon: renderIcon(Expand)},
    {localesKey: 'refreshCurrentTab', icon: renderIcon(SyncOutline)},
    {localesKey: 'closeCurrentTab', icon: renderIcon(PowerOutline)},
    {type: 'divider', localesKey: 'd1'},
    {localesKey: 'closeLeftTab', icon: renderIcon(ArrowBackOutline)},
    {localesKey: 'closeRightTab', icon: renderIcon(ArrowForward)},
    {type: 'divider', localesKey: 'd2'},
    {localesKey: 'modalWindowTab', icon: renderIcon(Resize)},
    {localesKey: 'closeAlltTab', icon: renderIcon(LeafOutline)},
])

const [, {enterFullscreen}] = useFullscreen(() => document.getElementById('layout'))

const tabStyle = ($globalStore, item) => {
    if ($globalStore.currentRouter.path === item.path) {
        return {
            color: 'var(--base-color)',
            backgroundColor: 'var(--primary-color)'
        }
    }
}

const handlePopselectOptions = ($global, $globalHook, $globalStore, key) => {
    if (key === 'contentFullScreen') {
        enterFullscreen()
    }
    if (key === 'refreshCurrentTab') {
        $globalStore.reloadView()
    }
    if (key === 'closeCurrentTab') {
        const data = $globalStore.tabs.find(item => item.id === $globalStore.currentRouter.meta.id)
        data && $globalHook.useCloseTabBarJump(data)
    }
    if (key === 'closeLeftTab') {
        const index = $globalStore.tabs.findIndex(item => item.id === $globalStore.currentRouter.meta.id)
        const sliceData = $globalStore.tabs.slice(0, index);
        sliceData.forEach(item => {
            $globalHook.useCloseTabBarJump(item)
        })
    }
    if (key === 'closeRightTab') {
        const index = $globalStore.tabs.findIndex(item => item.id === $globalStore.currentRouter.meta.id)
        const sliceData = $globalStore.tabs.slice(index + 1);
        sliceData.forEach(item => {
            $globalHook.useCloseTabBarJump(item)
        })
    }
    if (key === 'closeAlltTab') {
        $globalStore.tabs.forEach(item => {
            if (item.id !== $globalStore.currentRouter.meta.id) {
                $globalHook.useCloseTabBarJump(item)
            }
        })
    }
    if (key === 'modalWindowTab') {
        createWindow({
            title: $global.helpers.formatTitle($global, $globalStore.currentRouter.meta),
            background:$globalStore.theme.color,
            x: "center", y: "center", width: "80%", height: "80%", url: window.location.href
        })
    }
}
</script>
