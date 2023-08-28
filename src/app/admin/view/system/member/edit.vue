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
                        <n-form-item label="用户名" path="username">
                            <n-input v-model:value="compData.from.username" placeholder="请输入用户名"/>
                        </n-form-item>
                        <n-form-item label="年龄" path="age">
                            <n-input-number style="width: 100%" v-model:value="compData.from.age"
                                            placeholder="请输入年龄"/>
                        </n-form-item>
                        <n-form-item label="邮箱" path="email">
                            <n-auto-complete
                                v-model:value="compData.from.email"
                                :input-props="{autocomplete: 'disabled'}"
                                :options="compData.emailOptions"
                                placeholder="请输入邮箱"
                            />
                        </n-form-item>
                        <n-form-item label="描述" path="describe">
                            <n-input
                                v-model:value="compData.from.describe"
                                placeholder="请输入描述"
                                type="textarea"
                                maxlength="100"
                                :autosize="{minRows: 3,maxRows: 5}"
                            />
                        </n-form-item>
                        <n-form-item label="职业" path="job">
                            <n-select
                                v-model:value="compData.from.job"
                                placeholder="选择你的职业"
                                :options="compData.jobOptions"
                                multiple
                            />
                        </n-form-item>
                        <n-form-item label="生日" path="birthday">
                            <n-date-picker clearable value-format="yyyy-MM-dd HH:mm:ss"
                                           v-model:formatted-value="compData.from.birthday" type="datetime"/>
                        </n-form-item>
                        <n-form-item label="性别" path="sex">
                            <n-radio-group v-model:value="compData.from.sex">
                                <n-radio-button :value="1">男</n-radio-button>
                                <n-radio-button :value="2">女</n-radio-button>
                            </n-radio-group>
                        </n-form-item>
                        <n-form-item label="是否禁用" path="disabled">
                            <n-switch :round="false" v-model:value="compData.from.disabled">
                                <template #checked>是</template>
                                <template #unchecked>否</template>
                            </n-switch>
                        </n-form-item>
                        <n-form-item label="公司" path="company">
                            <n-input v-model:value="compData.from.company" placeholder="请输入公司"/>
                        </n-form-item>
                        <n-form-item label="工作城市" path="address">
                            <n-input v-model:value="compData.from.address" placeholder="请输入工作城市"/>
                        </n-form-item>
                        <n-form-item label="身份认证" path="uploadValue">
                            <n-upload>
                                <n-button>上传二代居民身份证</n-button>
                            </n-upload>
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
import {emailOptions, jobOptions} from "@/app/admin/view/system/member/data.ts"
import {FormInst, FormItemRule, useMessage} from "naive-ui"
import {member} from "@/app/admin/api/app.ts"
import {useRouter, useRoute} from "vue-router"
export default defineComponent({
    setup() {
        const formRef = ref<FormInst | null>(null)
        const message = useMessage()
        const route = useRoute()
        const compData = reactive({
            from: {
                username: null,
                age: null,
                email: "470193837@qq.com",
                describe: null,
                birthday: null,
                company: null,
                address: null,
                disabled: false,
                sex: 1,
                job: []
            },
            rules: {
                username: {
                    required: true,
                    trigger: ["blur", "input"],
                    message: "请输入用户名"
                },
                age: {
                    type: "number",
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请输入年龄"
                },
                email: {
                    required: true,
                    trigger: ["blur"],
                    message: "请输入邮箱"
                },
                birthday: {
                    required: true,
                    trigger: ["blur", "change"],
                    message: "请选择时间"
                },
                job: {
                    type: "array",
                    required: true,
                    trigger: "change",
                    message: "请选择职业"
                }
            },
            emailOptions: computed(() => {
                return emailOptions.map((suffix) => {
                    const prefix = compData.from.email.split("@")[0]
                    return {
                        label: prefix + suffix,
                        value: prefix + suffix
                    }
                })
            }),
            jobOptions
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
        member().then(res => {
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
