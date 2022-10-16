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
                    <a-form-item label="排序" name="order">
                        <a-input v-model:value="formState.order" placeholder="输入排序号"/>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, toRaw, UnwrapRef, watch} from 'vue';
import {ValidateErrorEntity} from 'ant-design-vue/es/form/interface';
import {apiUpdate, apiFind} from '@/packages/service/branch'
import {toTree} from '@/packages/utils/utils'
import {filterData} from "@/packages/utils/lodash";

interface FormState {
    name: String;
    pid?: String | Number,
    id?: String | Number,
    order?: String | Number,
}

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
        const treeData = ref();
        const formState: any = reactive({
            name: '',
            pid: '',
            id: '',
            order: ''
        });
        const rules = {
            name: [
                {required: true, message: '名称为必填项', trigger: 'blur'}
            ]
        };

        watch(() => props.id, (newVal, oldVal) => {
            treeData.value = filterData({key: 'id', value: props.id, node: 'children'}, toTree(props.treeData));
        }, {immediate: true})

        return {
            formState,
            rules,
            formRef,
            treeData
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
