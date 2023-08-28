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
                        <n-form-item label="菜单名称" path="title">
                            <n-input v-model:value="compData.from.title" placeholder="请输入菜单名称"/>
                        </n-form-item>
                        <n-form-item label="父级菜单" path="pid">
                            <n-select
                                v-model:value="compData.from.pid"
                                placeholder="选择父级菜单"
                                :options="compData.pidOptions"
                            >
                                <template #action>
                                    选择父级菜单，可以采用树渲染哦，也阔以渲染图标哦
                                </template>
                            </n-select>
                        </n-form-item>
                        <n-form-item label="菜单路由" path="path">
                            <n-input v-model:value="compData.from.path" placeholder="请输入菜单路由"/>
                        </n-form-item>
                        <n-form-item label="文件路径" path="file">
                            <n-input v-model:value="compData.from.file" placeholder="请输入文件路径"/>
                        </n-form-item>
                        <n-form-item label="图标" path="icon">
                            <n-input-group>
                                <n-input readonly v-model:value="compData.from.icon" placeholder="请选择图标"/>
                                <n-button type="primary" ghost>选择图标</n-button>
                            </n-input-group>
                        </n-form-item>
                        <n-form-item label="是否显示" path="shows">
                            <n-switch :round="false" v-model:value="compData.from.shows">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                        <n-form-item label="是否缓存" path="keepAlive">
                            <n-switch :round="false" v-model:value="compData.from.keepAlive">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                        <n-form-item label="是否固定" path="tabFix">
                            <n-switch :round="false" v-model:value="compData.from.tabFix">
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
import {tagOptions} from "./data.ts"
import {FormInst, useMessage} from "naive-ui"
import {menus} from "@/app/admin/api/app.ts"
import {toTree} from "@/packages/utils/utils.ts"
import {useRoute} from "vue-router"

export default defineComponent({
    setup() {
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                title: null,
                path: null,
                file: null,
                icon: null,
                shows: true,
                pid: null,
                keepAlive: false,
                tabFix: false,
            },
            rules: {
                title: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入菜单名称"
                },
                path: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入菜单路由"
                },
                file: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入文件路径"
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
        menus().then((res) => {
            compData.pidOptions = res.data.map((item) => {
                return {
                    label: item.title,
                    value: item.id
                }
            })
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
