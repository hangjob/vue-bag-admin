<template>
    <n-drawer
        v-model:show="active"
        :default-width="350"
        placement="right"
        resizable
        :mask-closable="false"
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
                        v-model:value="themeColor"
                        placeholder="Select"
                        :options="themeOptions"
                        @update:value="updateThemeColor"
                    />
                </n-form-item>
                <n-divider dashed>
                    布局模式
                </n-divider>
                <div class="layout-pattern">
                    <div class="pattern-item" @click="handlePattern(item)" v-for="item in layoutOptions" :key="item">
                        <span class="left"></span>
                        <span class="top"></span>
                        <n-icon v-show="item === model.layoutName" class="pattern-item-icon" size="18" color="#0e7a0d">
                            <CheckboxOutline/>
                        </n-icon>
                    </div>
                </div>
                <n-divider dashed>
                    界面展示
                </n-divider>
                <n-form-item label-align="left" label="标签风格" path="selectValue">
                    <n-select
                        v-model:value="model.themeValue"
                        placeholder="Select"
                        :options="model.themeOptions"
                    />
                </n-form-item>
                <n-form-item label-align="left" label="隐藏标签" path="hideTag">
                    <n-switch v-model:value="model.hideTag" />
                </n-form-item>
                <n-form-item label-align="left" label="标签持久化" path="persistence">
                    <n-switch v-model:value="model.persistence" />
                </n-form-item>
                <n-form-item label-align="left" label="灰色模式" path="gray">
                    <n-switch v-model:value="model.gray" />
                </n-form-item>
                <n-divider dashed>
                    页面动画
                </n-divider>
                <n-form-item label-align="left" label="禁用动画" path="hideTag">
                    <n-switch v-model:value="model.hideTag" />
                </n-form-item>
                <n-form-item label-align="left" label="动画方式" path="selectValue">
                    <n-select
                        v-model:value="model.themeValue"
                        placeholder="Select"
                        :options="model.themeOptions"
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
import {computed, defineComponent, ref,reactive} from "vue"
import {CheckboxOutline} from "@vicons/ionicons5"
import appStore from "@/packages/pinia/app.ts"
import {SelectOption} from "naive-ui"
import {themeOptions} from "@/packages/config/map.ts"
export default defineComponent({
    components:{
        CheckboxOutline
    },
    setup () {
        const active = ref(false)
        const app = appStore()
        const change = (state=true)=>{
            active.value = state
        }
        const {themeColor,layoutName} = app.userSetting
        const layoutOptions = ["ml","mt","tm"]
        const model = reactive({
            hideTag:false,
            persistence:false,
            gray:false,
            layoutName
        })
        const updateThemeColor = (value: string, option: SelectOption) => {
            app.userSetting.themeColor = value
        }
        const handlePattern = (value)=>{
            model.layoutName = value
            app.userSetting.layoutName = value
        }
        return {
            active,
            change,
            model,
            updateThemeColor,
            handlePattern,
            themeOptions,
            themeColor,
            layoutOptions
        }
    }
})
</script>
<style lang="less" scoped>
::v-deep(.n-form-item-blank) {
    justify-content: flex-end;
}
.layout-pattern{
    display: flex;
    .pattern-item{
        background: #f0f2f5;
        border-radius: 4px;
        box-shadow: 0 1px 2.5px #0000002e;
        cursor: pointer;
        height: 50px;
        overflow: hidden;
        position: relative;
        flex: 1;
        margin-right: 20px;
        &:last-of-type{
            margin-right: 0;
        }
        span{
            display: inline-block;
            vertical-align: top;
        }

        &:nth-of-type(1){
            .left{
                height: 100%;
                width: 30%;
                background-color: #333333;
            }
            .top{
                height: 30%;
                position: absolute;
                right: 0;
                top: 0;
                width: 70%;
                background: #fff;
                box-shadow: 0 0 1px #f6f6f6;
            }
            .pattern-item-icon{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(20%,-5%);
            }
        }
        &:nth-of-type(2){
            .left{
                background: #333333;
                box-shadow: 0 0 1px #f6f6f6;
                width: 100%;
            }
            .top{
                height: 30%;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
                background: #fff;
                box-shadow: 0 0 1px #f6f6f6;
            }
            .pattern-item-icon{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-5%);
            }
        }
        &:nth-of-type(3){
            .left{
                background: #333333;
                height: 30%;
                width: 100%;
            }
            .top{
                position: absolute;
                background: #ffffff;
                width: 30%;
                height: 70%;
                bottom: 0;
                z-index: 999;
                left: 0;
            }
            .pattern-item-icon{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(20%,-5%);
            }
        }
    }
}
</style>
