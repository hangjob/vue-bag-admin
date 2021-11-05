<template>
    <div class="add">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="名称" name="name" >
                        <a-input v-model:value="formState.name" placeholder="输入菜单名称"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择图标" name="icon">
                        <a-input-search
                            v-model:value="formState.icon"
                            placeholder="选择icon图标"
                            enter-button
                            @search="onSearch"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择类型" name="pid">
                        <a-select v-model:value="formState.pid" placeholder="选择父级节点，不选择为一级菜单">

                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="路由地址" name="router">
                        <a-input v-model:value="formState.router" placeholder="输入路由地址"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="组件路径" name="filePath">
                        <a-input v-model:value="formState.filePath" placeholder="输入路由组件路径"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="组件路径" name="filePath">
                        <a-input v-model:value="formState.httpFilePath" placeholder="输入路由组件路径，为http网络组件"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="内嵌iframe" name="iframePath">
                        <a-input v-model:value="formState.iframePath" placeholder="输入iframe页面地址"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="外部链接" name="viewPath">
                        <a-input v-model:value="formState.viewPath" placeholder="输入外部网络链接"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="权限" name="limits">
                        <a-select
                            v-model:value="formState.limits"
                            mode="multiple"
                            style="width: 100%"
                            placeholder="选择用户权限"
                            :options="[{value:'admin',disabled:false},{value:'edit',disabled:false}]"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="开启路由缓存" name="keepAlive">
                        <a-switch checked-children="开" un-checked-children="关" v-model:checked="formState.keepAlive"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否添加tab切换" name="tabHidden">
                        <a-radio-group v-model:value="formState.tabHidden" button-style="solid">
                            <a-radio-button :value="1">开启</a-radio-button>
                            <a-radio-button :value="0">关闭</a-radio-button>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否固定菜单" name="tabFix">
                        <a-radio-group v-model:value="formState.tabFix">
                            <a-radio :value="1">是</a-radio>
                            <a-radio :value="0">否</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示" name="shows">
                        <a-radio-group v-model:value="formState.shows">
                            <a-radio :value="1">显示</a-radio>
                            <a-radio :value="0">隐藏</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, toRaw, UnwrapRef} from 'vue';
import {ValidateErrorEntity} from 'ant-design-vue/es/form/interface';

interface FormState {
    name: string;
    icon: string,
    router?: string,
    filePath?: string,
    httpFilePath?:string,
    iframePath?: string,
    viewPath?: string,
    limits?: Array<any>,
    keepAlive?: number | string,
    tabHidden?: number | string,
    tabFix?: number | string,
    shows?: number | string
}

export default defineComponent({
    setup() {
        const formRef = ref();

        const formState: UnwrapRef<FormState> = reactive({
            name: '',
            icon: '',
            router: '',
            filePath: '',
            httpFilePath:'',
            iframePath: '',
            viewPath: '',
            limits: [],
            keepAlive: 0,
            tabHidden: 0,
            tabFix: 0,
            shows: 1
        });

        const rules = {
            name: [
                {required: true, message: '名称为必填项', trigger: 'blur'},
                {min: 2, max: 6, message: '长度最小2，最大6', trigger: 'blur'},
            ],
            icon: [
                {required: true, message: 'icon为必填项', trigger: 'blur'},
            ]
        };

        const onSubmit = () => {
            formRef.value.validate()
                .then(() => {
                    console.log('values', formState, toRaw(formState));
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    console.log('error', error);
                });
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
            rules,
            formRef,
            onSubmit,
            onSearch
        };
    },
});
</script>
