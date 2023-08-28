<template>
    <n-grid cols="24" x-gap="10" item-responsive responsive="screen">
        <n-grid-item span="24 m:24 l:24">
            <n-space :wrap-item="false">
                <n-card :segmented="{content: true,footer: 'soft'}" header-style="font-size:14px;" title="添加菜单">
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
                        <n-form-item label="字典分类" path="pid">
                            <n-select
                                v-model:value="compData.from.pid"
                                placeholder="选择字典分类"
                                :options="compData.tabsOptions"
                            >
                            </n-select>
                        </n-form-item>
                        <n-form-item label="字典名称" path="name">
                            <n-input v-model:value="compData.from.name" placeholder="请输入字典名称"/>
                        </n-form-item>
                        <n-form-item label="字典值" path="key">
                            <n-input v-model:value="compData.from.key" placeholder="请输入字典值"/>
                        </n-form-item>
                        <n-form-item label="是否禁用" path="disabled">
                            <n-switch :round="false" v-model:value="compData.from.disabled">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                        <n-form-item label="是否显示" path="shows">
                            <n-switch :round="false" v-model:value="compData.from.shows">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
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
import {tabsOptions} from "./data.ts"
import {FormInst, useMessage} from "naive-ui"
import {useRoute} from "vue-router"
import {dictionary} from "@/app/admin/api/app.ts"

export default defineComponent({
    setup() {
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                name: null,
                key: null,
                disabled: null,
                shows: true,
                pid: null,
            },
            rules: {
                name: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入字典名称"
                },
                key: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入字典值"
                },
                pid: {
                    required: true,
                    trigger: ["change"],
                    message: "请选择字典分类"
                }
            },
            tabsOptions
        })
        const compHandle = reactive({
            validate(e: MouseEvent) {
                e.preventDefault()
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        message.success("数据校验通过")
                    }
                })
            }
        })

        dictionary().then(res => {
            const [data] = res.data.filter((item) => String(item.id) === route.params.id)
            Object.keys(compData.from).forEach((key) => {
                compData.from[key] = data[key]
            })
        })
        return {
            compData,
            compHandle,
            formRef
        }
    }
})
</script>
