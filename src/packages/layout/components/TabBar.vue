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
                    {{ $global?.helpers?.formatTitle($global, item) }}
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
        <n-dropdown key-field="localesKey" :render-label="(item)=>$global?.helpers?.formatTitle($global, item)"
                    :options="popselectOptions" @select="(key)=>handlePopselectOptions($global,$globalStore,key)">
            <n-icon size="22" class="px-2 w-auto flex-shrink-0 cursor-pointer">
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
import {isFunction} from "radash"

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

const handlePopselectOptions = ($global, $globalStore, key) => {
    if (key === 'contentFullScreen') {
        enterFullscreen()
    }
    if (key === 'refreshCurrentTab') {
        $globalStore.reloadView()
    }
    if (key === 'modalWindowTab') {
        createWindow({
            title: $global.helpers.formatTitle($global, $globalStore.currentRouter.meta),
            x: "center", y: "center", width: "80%", height: "80%", url: window.location.href
        })
    }
}
</script>
