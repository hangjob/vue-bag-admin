<template>
    <div class="add">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span:6}" :wrapper-col="{wrapperCol:15}">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="名称" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入菜单名称"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="父级节点" name="pid">
                        <a-tree-select
                            v-model:value="formState.pid"
                            style="width: 100%"
                            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                            :tree-data="treeData"
                            :replace-fields="{children:'children', key:'id', value: 'id', title: 'name'}"
                            placeholder="选择父级节点，不选择为一级菜单"
                            allow-clear
                            tree-default-expand-all
                        >
                            <template #title="{ key, value,title }">
                                <span>{{ title }}</span>
                            </template>
                        </a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择图标" name="icon">
                        <a-input-search
                            v-model:value="formState.icon"
                            placeholder="选择icon图标"
                            enter-button
                            :readonly="true"
                            @search="visibleIcon = true"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="路由地址" name="path">
                        <a-input v-model:value="formState.path" placeholder="输入路由地址"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="组件路径" name="filePath">
                        <a-input v-model:value="formState.filePath" placeholder="输入路由组件路径"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="网络组件" name="httpFilePath">
                        <a-input v-model:value="formState.httpFilePath" placeholder="输入路由组件路径地址，为http网络组件"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="内嵌iframe" name="iframePath">
                        <a-input v-model:value="formState.iframePath" placeholder="输入iframe页面地址"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="外部链接" name="httpViewPath">
                        <a-input v-model:value="formState.httpViewPath" placeholder="输入外部网络链接"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="开启路由缓存" name="keepAlive">
                        <a-switch checked-children="开" un-checked-children="关" v-model:checked="formState.keepAlive"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否隐藏tab切换" name="tabHidden">
                        <a-radio-group v-model:value="formState.tabHidden">
                            <a-radio :value="false">显示</a-radio>
                            <a-radio :value="true">隐藏</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否固定菜单" name="tabFix">
                        <a-radio-group v-model:value="formState.tabFix">
                            <a-radio :value="true">是</a-radio>
                            <a-radio :value="false">否</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示" name="shows">
                        <a-radio-group v-model:value="formState.shows">
                            <a-radio :value="true">显示</a-radio>
                            <a-radio :value="false">隐藏</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
    <a-modal v-model:visible="visibleIcon" width="1000px" title="选择icon" okText="确认" cancelText="关闭">
        <div class="item-icons">
            <a-row>
                <a-col class="item" :xs="12" :sm="8" :md="4" :lg="3" :xl="2" v-for="(item,idx) in icons">
                    <div class="item-icon">
                        <component :is="item" :key="idx" @click="handleSelected(item)"></component>
                    </div>
                </a-col>
            </a-row>
        </div>
    </a-modal>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, toRaw, watch, onMounted} from 'vue';
import {ValidateErrorEntity} from 'ant-design-vue/es/form/interface';
import {apiUpdate, apiFind} from '@/packages/service/menu'
import icons from './icons';
import {validatPath, validatHttpFilePath, filePathRouter} from '@/packages/utils/validator'
import {toTree} from '@/packages/utils/utils'
import {filterData} from "@/packages/utils/lodash";


export default defineComponent({
    props: {
        treeData: {
            type: Array,
        },
        id: {
            required: true,
            type: [Number, String]
        }
    },
    setup(props, {emit}) {
        const formRef = ref();
        const visibleIcon = ref(false);
        const treeData = ref();
        const formState: any = reactive({
            name: '',
            icon: '',
            shows: false,
            router: '',
            pid: '',
            filePath: '',
            httpFilePath: '',
            iframePath: '',
            httpViewPath: '',
            limits: [],
            keepAlive: false,
            tabHidden: false,
            tabFix: false,
            path: '',
            id: ''
        });
        const rules = {
            name: [
                {required: true, message: '名称为必填项', trigger: 'blur'},
                {min: 2, max: 6, message: '长度最小2，最大6', trigger: 'blur'},
            ],
            icon: [
                {required: false, message: 'icon为必填项', trigger: 'blur'},
            ],
            filePath: [
                {validator: filePathRouter, trigger: 'blur'}
            ],
            httpFilePath: [
                {validator: validatHttpFilePath, trigger: 'blur'}
            ],
            iframePath: [
                {validator: validatHttpFilePath, trigger: 'blur'}
            ],
            httpViewPath: [
                {validator: validatHttpFilePath, trigger: 'blur'}
            ]
        };

        watch(() => props.id, (newVal, oldVal) => {
            treeData.value = filterData({key: 'id', value: props.id, node: 'children'}, toTree(props.treeData));
        }, {immediate: true})

        const handleSelected = (item: any) => {
            visibleIcon.value = false;
            formState.icon = item;
        }
        return {
            formState,
            rules,
            formRef,
            icons,
            handleSelected,
            treeData,
            visibleIcon
        };
    },
});
</script>
<style lang="less" scoped>
.item-icons {
    .item {
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            border: 1px solid #ddd;
            width: 45px;
            border-radius: 3px;
        }
    }
}
</style>
