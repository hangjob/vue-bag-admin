<template>
    <div class="add">
        <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="名称">
                        <a-input v-model:value="formState.name"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择图标">
                        <a-input-search
                            v-model:value="formState.name"
                            placeholder="选择icon图标"
                            enter-button
                            @search="onSearch"
                        />
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="节点路由名称">
                        <a-input v-model:value="formState.name"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="文件路径">
                        <a-input v-model:value="formState.name"/>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="iframe">
                        <a-input v-model:value="formState.name"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="外部链接">
                        <a-input v-model:value="formState.name"/>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="权限">
                        <a-select
                            v-model:value="formState.name"
                            mode="multiple"
                            style="width: 100%"
                            placeholder="选择用户权限"
                            :options="[{value:'admin',disabled:false},{value:'edit',disabled:false}]"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="开启路由缓存">
                        <a-switch checked-children="开" un-checked-children="关" v-model:checked="formState.name"/>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否Tab切换">
                        <a-radio-group v-model:value="formState.resource" button-style="solid">
                            <a-radio-button value="a">开启</a-radio-button>
                            <a-radio-button value="b">关闭</a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否固定菜单">
                        <a-radio-group v-model:value="formState.resource">
                            <a-radio value="1">是</a-radio>
                            <a-radio value="2">否</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示">
                        <a-radio-group v-model:value="formState.resource">
                            <a-radio value="1">显示</a-radio>
                            <a-radio value="2">隐藏</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRaw} from 'vue';

export default defineComponent({
    setup() {
        const formState = reactive({
            name: '',
            region: undefined,
            date1: undefined,
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        });

        const onSubmit = () => {
            console.log('submit!', toRaw(formState));
        };

        const onSearch = () => {

        }

        return {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 15,
            },
            formState,
            onSubmit,
            onSearch
        };
    },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
<style>

</style>