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
            <a-form-item labelAlign="left" label="移动屏悬浮左侧菜单">
                <a-switch _key="floatingMenu" @change="changeSwitch" v-model:checked="formState.floatingMenu"/>
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
import {find} from "@/packages/utils/lodash";
// @ts-ignore
import darkVars from '@/config/dark.json';
import {useStore} from "vuex";

export default defineComponent({
    setup() {
        const placement = ref('right');
        const visible = ref(false);
        const store = useStore();
        const showDrawer = () => {
            visible.value = true;
        };

        const onClose = () => {
            visible.value = false;
        };

        const themeConfig = store.getters['app/getThemeConfig']
        const cacheTheme = {...themeConfig};
        let data = find({key: 'path', value: cacheTheme}, themeList)
        const formState = reactive({
            theme: data ? data.path : themeList[0].path,
            floatingMenu: themeConfig.floatingMenu
        });


        const changeTheme = (path: string) => {
            window['less'].modifyVars({
                '@primary-color': 'blue'
            }).then(console.log);
        }

        const changeSwitch = (checked: boolean | string | number, event: any) => {
            store.commit('app/updateThemeConfig', {key: event.target.getAttribute('_key'), value: checked})
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
            changeTheme,
            changeSwitch
        };
    },
});
</script>
