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
                    <a-select-option v-for="item in themeList" :key="item.color">{{item.name}}</a-select-option>
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
<script>
    import {defineComponent, ref, reactive} from 'vue';

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

            const themeList = [
                {
                    name: '默认',
                    color: '#992777'
                },
                {
                    name: '薄暮',
                    color: '#F5222D'
                },
                {
                    name: '火山',
                    color: '#FA541C'
                },
                {
                    name: '日暮',
                    color: '#FAAD14'
                },
                {
                    name: '明清',
                    color: '#13C2C2'
                }
            ]

            const formState = reactive({
                theme: themeList[0].color,
            });

            const changeTheme = (value) => {
                window.less.modifyVars({'@primary-color': value});
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