<template>
    <n-drawer :width="410" placement="right" v-bind="$attrs" :mask-closable="false">
        <n-drawer-content :closable="true" title="主题设置">
            <n-form ref="formRef" :model="form">
                <n-space vertical>
                    <n-form-item label="布局" path="user.name">
                        <div class="composition flex w-full justify-around">
                            <div
                                class="classical shadow-blue-400 bg-[#ebeef1] h-[45px] flex-1 relative rounded-sm overflow-hidden cursor-pointer"
                                @click="$globalStore.configs.layoutMode = 1">
                                <div class="absolute top-0 left-0 block bg-white w-[25%] h-full"></div>
                                <n-icon v-if="$globalStore.configs.layoutMode === 1"
                                        class="icon absolute right-[25%] bottom-[5px]" :component="CheckboxOutline"
                                        size="20" :depth="1"/>
                            </div>
                            <div
                                class="classical shadow-sm bg-[#ebeef1] flex-1 h-[45px] mx-[15%] relative rounded-sm overflow-hidden cursor-pointer"
                                @click="$globalStore.configs.layoutMode = 2">
                                <div class="absolute top-0 left-0 block bg-white w-[25%] h-full"></div>
                                <n-icon v-if="$globalStore.configs.layoutMode === 2"
                                        class="icon absolute right-[25%] bottom-[5px]" :component="CheckboxOutline"
                                        size="20" :depth="1"/>
                            </div>
                            <div
                                class="classical shadow-sm bg-[#ebeef1] flex-1 h-[45px] relative rounded-sm overflow-hidden cursor-pointer"
                                @click="$globalStore.configs.layoutMode = 3">
                                <div class="absolute top-0 left-0 block bg-white w-[25%] h-full"></div>
                                <n-icon v-if="$globalStore.configs.layoutMode === 3"
                                        class="icon absolute right-[40%] bottom-[5px]" :component="CheckboxOutline"
                                        size="20" :depth="1"/>
                            </div>
                        </div>
                    </n-form-item>
                    <n-form-item label-placement="left" label="主题颜色" path="user.age">
                        <n-space :size="[10,0]" align="center">
                            <n-avatar @click="$globalHook.useCutColorTheme(item.color)" class="cursor-pointer"
                                      v-for="item in $globalStore.theme.colors" size="small"
                                      :style="{ backgroundColor: item.color}">
                                {{ $globalStore.theme.color === item.color ? item.name : '' }}
                            </n-avatar>
                        </n-space>
                    </n-form-item>
                    <n-form-item label-placement="left" label="菜单宽度">
                        <n-slider :marks="marks" v-model:value="form.setp" :step="50"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="顶部导航栏色">
                        <n-switch v-model:value="$globalStore.configs.isTopColor">
                            <template #checked-icon>
                                <n-icon :component="ColorPaletteOutline"/>
                            </template>
                            <template #unchecked-icon>
                                <n-icon :component="ColorPaletteOutline"/>
                            </template>
                        </n-switch>
                    </n-form-item>
                    <n-form-item label-placement="left" label="暗黑模式" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isDarkMode">
                            <template #checked-icon>
                                <n-icon :component="Moon"/>
                            </template>
                            <template #unchecked-icon>
                                <n-icon :component="Sunny"/>
                            </template>
                        </n-switch>
                    </n-form-item>
                    <n-form-item label-placement="left" label="标签显示" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isTabar"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="标签持久化" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isDataPersistence"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="分类子菜单" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isSubmenu"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="模块坞" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isDocking"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="底部显示" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isFooter"/>
                    </n-form-item>
                    <n-form-item v-if="$globalStore.configs.isWatermark" label="水印文案" path="user.name">
                        <n-input v-model:value="$globalStore.configs.watermark" placeholder="输入水印文案" />
                    </n-form-item>
                    <n-form-item label-placement="left" label="水印显示" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isWatermark"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="标签风格" path="user.phone">
                        <n-select v-model:value="form.value" :options="options" placeholder="选择标签风格"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="语言切换" path="user.phone">
                        <n-select v-model:value="$globalStore.configs.language" :options="languageOptions"
                                  placeholder="选择语言"/>
                    </n-form-item>
                </n-space>
            </n-form>
        </n-drawer-content>
    </n-drawer>
</template>
<script setup>
import {
    PlanetOutline,
    PlanetSharp,
    ColorPaletteOutline,
    Moon,
    Sunny,
    CheckboxOutline
} from "@vicons/ionicons5"

const marks = {
    0: '150px',
    25: '200px',
    50: '最佳',
    100: '300px'
}
const {appContext: {config: {globalProperties}}} = getCurrentInstance();
const form = reactive({
    color: '#18A058',
    setp: 50,
    indeterminate: false,
    value: ref(null),
    language: ref(null)
})

const languageOptions = reactive([
    {
        label: "中文",
        value: 'zh',
    },
    {
        label: "英文",
        value: 'en',
    }
])

watch(form, () => {
    const arrs = [{setp: 0, width: 150}, {setp: 25, width: 200}, {setp: 50, width: 240}, {setp: 100, width: 300}];
    globalProperties.$globalStore.configs.layoutSiderWidth = (arrs.find(item => item.setp === form.setp))['width']
})

const options = []
</script>
<style lang="less" scoped>
.composition {
    .classical {
        &:before {
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 25%;
            height: 100%;
            content: "";
            background-color: #001529;
        }

        &:after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 25%;
            background-color: #fff;
            content: "";
        }

        &:nth-of-type(2) {
            &:before {
                width: 16%;
            }
        }

        &:nth-of-type(3) {
            &:before {
                background-color: #ebeef1;
            }

            &:after {
                z-index: 2;
                background-color: #001529;
            }
        }
    }
}
</style>
