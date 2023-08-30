<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer: 'soft'}" header-style="font-size:14px;" title="添加用户">
                    <template #header-extra>
                        古人学问无遗力，少壮工夫老始成
                    </template>
                    <n-form
                        ref="formRef"
                        :model="compData.from"
                        :rules="compData.rules"
                        label-placement="left"
                        label-width="auto"
                        require-mark-placement="right-hanging"
                    >
                        <n-form-item label="角色名称" path="name">
                            <n-input v-model:value="compData.from.name" placeholder="请输入角色名称"/>
                        </n-form-item>
                        <n-form-item label="标识符" path="tag">
                            <n-select
                                v-model:value="compData.from.tag"
                                placeholder="选择标识符"
                                :options="compData.tagOptions"
                            />
                        </n-form-item>
                        <n-form-item label="描述" path="describe">
                            <n-input
                                v-model:value="compData.from.describe"
                                placeholder="请输入描述"
                                type="textarea"
                                :autosize="{minRows: 3,maxRows: 5}"
                            />
                        </n-form-item>
                        <n-form-item label="菜单">
                            <n-tree
                                block-line
                                cascade
                                key-field="id"
                                label-field="title"
                                checkable
                                :data="compData.treeData"
                                :default-expanded-keys="compData.defaultExpandedKeys"
                                :checked-keys="compData.checkedKeys"
                                @update:checked-keys="compHandle.updateCheckedKeys"
                            />
                        </n-form-item>
                    </n-form>
                    <template #action>
                        <n-space justify="end">
                            <n-button attr-type="button">返回列表</n-button>
                            <n-button attr-type="button" type="success" @click="compHandle.validate">提交数据</n-button>
                        </n-space>
                    </template>
                </n-card>
            </n-space>
        </n-grid-item>
    </n-grid>
</template>
<script lang="ts">
import {defineComponent, reactive, computed, ref} from "vue"
import {tagOptions} from "./data.ts"
import {FormInst, useMessage} from "naive-ui"
import {menus, role} from "@/app/admin/api/app.ts"
import {useRoute} from "vue-router"
import {toTree} from "@/packages/utils/utils.ts"

export default defineComponent({
    setup() {
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                name: null,
                tag: null,
                describe: null,
            },
            rules: {
                name: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入角色名称"
                },
                tag: {
                    required: true,
                    trigger: ["blur"],
                    message: "请选择标识符"
                },
                describe: {
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入描述"
                },
            },
            tagOptions,
            treeData:[],
            defaultExpandedKeys:[],
            defaultCheckedKeys:[],
            checkedKeys:[]
        })
        const compHandle = reactive({
            validate(e: MouseEvent) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        message.success("数据校验通过")
                    }
                })
            },
            updateCheckedKeys( keys: Array<any>, options: Array<any>, meta: {node: any, action: "check" | "uncheck"}){
                compData.checkedKeys = keys
            }
        })
        role().then((res) => {
            const [data] = res.data.filter((item) => String(item.id) === route.params.id)
            Object.keys(compData.from).forEach((key) => {
                compData.from[key] = data[key]
            })
        })
        menus().then((res) => {
            const checkedKeys = []
            compData.treeData = toTree({
                arr: res.data, callback: (item) => {
                    checkedKeys.push(item.id)
                }
            })
            compData.checkedKeys = checkedKeys
        })
        return {
            compData,
            compHandle,
            formRef
        }
    }
})
</script>
