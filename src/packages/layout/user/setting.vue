<template>
    <a-drawer
        title="设置主题"
        :placement="placement"
        :closable="false"
        :width="400"
        :visible="visible"
        @close="onClose"
    >
        <a-form :model="formState" labelAlign="right" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item labelAlign="left" label="主题设置">
                <a-select @change="changeTheme" v-model:value="formState.theme" placeholder="请选择主题">
                    <a-select-option v-for="item in themeList" :key="item.path">{{ item.name }}</a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
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
import {defineComponent, reactive, ref} from 'vue';
import {themeList} from '@/packages/theme/utils'
import {theme} from "@/packages/config";
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


        const cacheTheme = localStorage.getItem(theme.catchKey);
        let data = find({key: 'path', value: cacheTheme}, themeList)
        const formState = reactive({
            theme: data ? data.path : themeList[0].path,
        });

        const changeTheme = (path: string) => {
            // @ts-ignore
            window['less'].modifyVars({
                '@primary-color':'blue'
            }).then(console.log);
        }

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
            formState,
            themeList,
            changeTheme
        };
    },
});
</script>