<template>
    <n-drawer :width="410" placement="right" v-bind="$attrs" :mask-closable="false">
        <n-drawer-content :closable="true" title="主题设置">
            <n-form ref="formRef" :model="form">
                <n-space vertical>
                    <n-form-item label="布局" path="user.name">
                        <div class="composition  flex w-full justify-around">
                            <div
                                class="classical shadow-blue-400 bg-[#ebeef1] h-[45px] flex-1 relative rounded-sm overflow-hidden cursor-pointer"
                                @click="handleCutLoayout($globalStore,'default')">
                                <div class="absolute top-0 left-0 block bg-white w-[25%] h-full"></div>
                                <n-icon v-if="$globalStore.configs.layoutName === 'default'"
                                        class="icon absolute right-[25%] bottom-[5px]" :component="CheckboxOutline"
                                        size="20" :depth="1"/>
                            </div>
                            <div
                                class="classical shadow-sm bg-[#ebeef1] flex-1 h-[45px] mx-[15%] relative rounded-sm overflow-hidden cursor-pointer"
                                @click="handleCutLoayout($globalStore,'lessen')">
                                <div class="absolute top-0 left-0 block bg-white w-[25%] h-full"></div>
                                <n-icon v-if="$globalStore.configs.layoutName === 'lessen'"
                                        class="icon absolute right-[25%] bottom-[5px]" :component="CheckboxOutline"
                                        size="20" :depth="1"/>
                            </div>
                            <div
                                class="classical shadow-sm bg-[#ebeef1] flex-1 h-[45px] relative rounded-sm overflow-hidden cursor-pointer"
                                @click="handleCutLoayout($globalStore,'spillover')">
                                <div class="absolute top-0 left-0 block bg-white w-[25%] h-full"></div>
                                <n-icon v-if="$globalStore.configs.layoutName === 'spillover'"
                                        class="icon absolute right-[40%] bottom-[5px]" :component="CheckboxOutline"
                                        size="20" :depth="1"/>
                            </div>
                        </div>
                    </n-form-item>
                    <n-form-item label-placement="left" label="主题颜色" path="user.age">
                        <n-space :size="[10,0]" align="center">
                            <n-avatar @click="$global?.helpers?.cutColorTheme($global,item.color)"
                                      class="cursor-pointer"
                                      v-for="item in $globalStore.theme.colors" size="small"
                                      :style="{ backgroundColor: item.color}">
                                {{ $globalStore.theme.color === item.color ? item.name : '' }}
                            </n-avatar>
                        </n-space>
                    </n-form-item>
                    <n-form-item label-placement="left" label="菜单宽度">
                        <n-slider :tooltip="false" :marks="form.marks" v-model:value="form.setp" step="mark"/>
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
                    <n-form-item label-placement="left" label="面包屑显示" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isBreadcrumb"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="标签持久化" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isDataPersistence"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="应用分类子菜单" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isSubmenu"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="模块坞" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isDocking"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="底部显示" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isFooter"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="覆盖式标签" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isTabCover"/>
                    </n-form-item>
                    <n-form-item v-if="$globalStore.configs.isWatermark" label="水印文案" path="user.name">
                        <n-input v-model:value="$globalStore.configs.watermark" placeholder="输入水印文案"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="水印显示" path="user.phone">
                        <n-switch v-model:value="$globalStore.configs.isWatermark"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="标签风格" path="user.phone">
                        <n-select v-model:value="$globalStore.configs.tabStyle" :options="form.tabStyle"
                                  placeholder="选择标签风格"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="表单风格" path="user.phone">
                        <n-select v-model:value="$globalStore.configs.formMode" :options="form.formMode"
                                  placeholder="选择表单风格"/>
                    </n-form-item>
                    <n-form-item label-placement="left" label="语言切换" path="user.phone">
                        <n-select v-model:value="$globalStore.configs.language" :options="form.languageOptions"
                                  placeholder="选择语言"/>
                    </n-form-item>
                </n-space>
            </n-form>
        </n-drawer-content>
    </n-drawer>
</template>
<script setup>
import {
    Moon,
    Sunny,
    CheckboxOutline
} from "@/packages/helpers/Icon.js"

const arrs = [{setp: 0, width: 170}, {setp: 33, width: 200}, {setp: 66, width: 240}, {setp: 100, width: 300}];
const {appContext: {config: {globalProperties}}} = getCurrentInstance();
const form = reactive({
    setp: 75,
    marks: [],
    languageOptions: [
        {label: "中文", value: 'zh',},
        {label: "英文", value: 'en',}
    ],
    tabStyle: [
        {label: "按钮风格", value: 'button',},
        {label: "卡片风格", value: 'card',},
    ],
    formMode: [
        {label: "抽屉风格", value: 'drawer',},
        {label: "模态窗口", value: 'modal',},
        {label: "标签风格", value: 'page',},
    ]
})

const handleCutLoayout = ($globalStore, name) => {
    if (name === 'default') {
        $globalStore.configs.layoutSiderWidth = arrs[2].width
    }
    if (name === 'lessen') {
        $globalStore.configs.layoutSiderWidth = arrs[0].width
    }
    $globalStore.configs.layoutName = name
}

form.marks = arrs.reduce((accumulator, current) => {
    accumulator[current.setp] = current.width + 'px';
    return accumulator;
}, {});

watch(globalProperties?.$globalStore?.configs, (newValue) => {
    const data = arrs.find(item => item.width === newValue.layoutSiderWidth)
    form.setp = data.setp
}, {
    deep: true,
    immediate: true
})

watch(form, () => {
    globalProperties.$globalStore.configs.layoutSiderWidth = (arrs.find(item => item.setp === form.setp))['width']
})
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
