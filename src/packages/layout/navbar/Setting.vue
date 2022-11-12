<template>
    <a-drawer
        title="设置主题"
        :placement="placement"
        :closable="false"
        :width="width"
        :visible="visible"
        @close="onClose"
    >
<!--        <a-form :model="formState" labelAlign="right" :label-col="labelCol" :wrapper-col="wrapperCol">-->
<!--            <a-form-item labelAlign="left" label="是否悬浮左侧菜单">-->
<!--                <a-switch @change="(check)=>{changeStyle(check,'floatingMenu')}"-->
<!--                          v-model:checked="formState.floatingMenu"-->
<!--                />-->
<!--            </a-form-item>-->
<!--            <a-form-item labelAlign="left" label="是否折叠项目菜单">-->
<!--                <a-switch @change="(check)=>{changeStyle(check,'foldPrjMenu')}"-->
<!--                          v-model:checked="formState.foldPrjMenu"-->
<!--                />-->
<!--            </a-form-item>-->
<!--            <a-form-item labelAlign="left" label="页签显示风格">-->
<!--                <a-select @change="(value)=>{changeStyle(value,'tabStyle')}" v-model:value="formState.tabStyle"-->
<!--                          placeholder="选择页签显示风格"-->
<!--                >-->
<!--                    <a-select-option v-for="item in tabStyles" :key="item.value">{{ item.name }}</a-select-option>-->
<!--                </a-select>-->
<!--            </a-form-item>-->
<!--        </a-form>-->
        <div
            :style="{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
          }"
        >
            <a-button style="margin-right: 8px" @click="onClose">关闭</a-button>
            <a-button type="primary" @click="onClose">保存设置</a-button>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, ref} from 'vue';
import {themeList, tabStyles} from '@/packages/theme/utils'
import {find} from "@/packages/utils/lodash";
// @ts-ignore
import darkVars from '@/config/dark.json';

export default defineComponent({
    setup() {
        const placement = ref('right');
        const visible = ref(false);
        const showDrawer = () => {
            visible.value = true;
        };

        const onClose = () => {
            visible.value = false;
        };

        const cacheTheme = {};
        let data = find({key: 'path', value: cacheTheme}, themeList)

        const changeTheme = (path: string) => {
            window['less'].modifyVars({
                '@primary-color': 'blue'
            }).then(console.log);
        }

        const changeStyle = (value: boolean | string | number, key: string) => {
        }

        const width = 400


        return {
            placement,
            visible,
            showDrawer,
            onClose,
            labelCol: {
                span: 10,
            },
            wrapperCol: {
                span: 14,
            },
            themeList,
            tabStyles,
            changeTheme,
            width,
            changeStyle
        };
    },
});
</script>
