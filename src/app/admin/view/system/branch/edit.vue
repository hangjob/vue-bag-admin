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
                        <n-form-item label="组织名称" path="name">
                            <n-input v-model:value="compData.from.name" placeholder="请输入组织名称"/>
                        </n-form-item>
                        <n-form-item label="上级组织" path="pid">
                            <n-select
                                v-model:value="compData.from.pid"
                                placeholder="选择上级组织"
                                :options="compData.pidOptions"
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
import {branch} from "@/app/admin/api/app.ts"
import {toTree} from "@/packages/utils/utils.ts"
import {useRoute} from "vue-router"

export default defineComponent({
    setup() {
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                name: null,
                pid: null,
            },
            rules: {
                name: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入组织名称"
                },
                pid: {
                    required: true,
                    trigger: ["blur"],
                    message: "选择上级组织"
                }
            },
            pidOptions: []
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
        branch().then((res) => {
            compData.pidOptions = res.data.map((item) => {
                return {
                    label: item.name,
                    value: item.id,
                    disabled: item.id === route.params.id
                }
            })
        }).finally(() => {
            compData.loading = false
        })
        branch().then(res => {
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
