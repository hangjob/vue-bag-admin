<template>
    <n-drawer
        v-model:show="showhide"
        :default-width="350"
        placement="right"
        resizable
    >
        <n-drawer-content closable title="设置">
            <n-form
                ref="formRef"
                :model="model"
                label-placement="left"
                label-width="auto"
            >
                <n-divider dashed>
                    颜色主题
                </n-divider>
                <n-form-item label-align="left" label="主题" path="themeColor">
                    <n-select
                        v-model:value="app.userSetting.themeColor"
                        placeholder="选择主题"
                        :options="themeOptions"
                    />
                </n-form-item>
                <n-divider dashed>
                    布局模式
                </n-divider>
                <div class="layout-pattern">
                    <div :class="['pattern-item',item]" @click="handlePattern(item)" v-for="item in layoutOptions"
                         :key="item">
                        <span class="left"></span>
                        <span class="top"></span>
                        <n-icon v-show="item === app.userSetting.layoutName" class="pattern-item-icon" size="18"
                                color="#0e7a0d">
                            <CheckboxOutline/>
                        </n-icon>
                    </div>
                </div>
                <n-divider dashed>
                    界面展示
                </n-divider>
                <n-form-item label-align="left" label="标签风格" path="selectValue">
                    <n-select
                        v-model:value="app.userSetting.tabsStyle"
                        placeholder="选择标签风格"
                        :options="themeTabsStyle"
                    />
                </n-form-item>
                <n-form-item label-align="left" label="隐藏标签" path="hideTag">
                    <n-switch v-model:value="app.userSetting.hideTabs"/>
                </n-form-item>
                <n-form-item label-align="left" label="标签持久化" path="lasting">
                    <n-switch v-model:value="app.userSetting.lasting">
                        <template #checked>
                            请刷新页面生效
                        </template>
                        <template #unchecked>
                            开启标签持久化
                        </template>
                    </n-switch>
                </n-form-item>
                <n-form-item label-align="left" label="灰色模式" path="gray">
                    <n-switch @update:value="handleUpdateGray" v-model:value="app.userSetting.gray"/>
                </n-form-item>
                <n-form-item label-align="left" label="色弱模式" path="weak">
                    <n-switch @update:value="handleUpdateWeak" v-model:value="app.userSetting.weak"/>
                </n-form-item>
                <n-form-item label-align="left" label="页面缓存" path="weak">
                    <n-switch v-model:value="app.userSetting.keepAlive"/>
                </n-form-item>
                <n-divider dashed>
                    页面动画
                </n-divider>
                <n-form-item label-align="left" label="动画方式" path="selectValue">
                    <n-select
                        v-model:value="app.userSetting.animation"
                        placeholder="选择动画方式"
                        :options="animations"
                    />
                </n-form-item>
            </n-form>
            <template #footer>
                <n-button>保存设置</n-button>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>
<script lang="ts">
import {defineComponent, ref, reactive} from "vue"
import appStore from "@/packages/pinia/app.ts"
import {themeOptions, themeTabsStyle, animations} from "@/packages/config/map.ts"
import {updateHtmlGray, updateHtmlWeak} from "@/packages/global"

export default defineComponent({
    setup() {
        const showhide = ref(false)
        const app = appStore()
        const change = (state = true) => {
            showhide.value = state
        }
        const layoutOptions = ["ml", "mt", "tm"]
        const model = reactive({})
        const handleUpdateGray = (value: string) => {
            app.userSetting.gray = value
            updateHtmlGray()
        }
        const handleUpdateWeak = (value: string) => {
            app.userSetting.weak = value
            updateHtmlWeak()
        }
        const handlePattern = (value) => {
            app.userSetting.layoutName = value
        }
        return {
            showhide,
            change,
            model,
            handlePattern,
            themeOptions,
            layoutOptions,
            themeTabsStyle,
            app,
            handleUpdateGray,
            handleUpdateWeak,
            animations,
        }
    }
})
</script>
<style lang="less" scoped>
::v-deep(.n-form-item-blank) {
    justify-content: flex-end;
}

.layout-pattern {
    display: flex;

    .pattern-item {
        background: #f0f2f5;
        border-radius: 4px;
        box-shadow: 0 1px 2.5px #0000002e;
        cursor: pointer;
        height: 50px;
        overflow: hidden;
        position: relative;
        flex: 1;
        margin-right: 20px;

        &:last-of-type {
            margin-right: 0;
        }

        span {
            display: inline-block;
            vertical-align: top;
        }

        .pattern-item-icon {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(20%, -5%);
        }

        &.ml {
            .left {
                height: 100%;
                width: 30%;
                background: var(--n-title-text-color);
            }

            .top {
                height: 30%;
                position: absolute;
                right: 0;
                top: 0;
                width: 70%;
                background: #fff;
                box-shadow: 0 0 1px #f6f6f6;
            }
        }

        &.mt {
            .left {
                background: var(--n-title-text-color);
                box-shadow: 0 0 1px #f6f6f6;
                width: 100%;
            }

            .top {
                height: 30%;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
                background: var(--n-color);
                box-shadow: 0 0 1px #f6f6f6;
            }
        }

        &.tm {
            .left {
                background: var(--n-title-text-color);
                height: 30%;
                width: 100%;
            }

            .top {
                position: absolute;
                background: var(--n-color);
                width: 30%;
                height: 70%;
                bottom: 0;
                z-index: 999;
                left: 0;
            }
        }
    }
}
</style>
