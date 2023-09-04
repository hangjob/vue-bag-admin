<template>
    <n-space vertical>
        <n-card  :segmented="{content: true,footer:true}" header-style="padding:10px" footer-style="padding:10px"
                 content-style="padding:10px;">
            <template #header>
                <n-button>添加测试</n-button>
            </template>
            <n-form label-placement="left" :label-width="100" ref="formRef" :model="compData.form">
                <n-form-item label="测试1-key" path="name">
                    <n-input v-model:value="compData.form.name" clearable />
                </n-form-item>
                <n-form-item label="测试1-value">
                    <n-space>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-input-group>
                            <n-input v-model:value="compData.form.name" clearable />
                            <n-button type="primary" ghost>添加</n-button>
                        </n-input-group>
                    </n-space>
                </n-form-item>
                <n-form-item label="测试1-key" path="name">
                    <n-input v-model:value="compData.form.name" clearable />
                </n-form-item>
                <n-form-item label="测试1-value">
                    <n-space>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-tag type="info" closable size="large">测试1-1</n-tag>
                        <n-input-group>
                            <n-input v-model:value="compData.form.name" clearable />
                            <n-button type="primary" ghost>添加</n-button>
                        </n-input-group>
                    </n-space>
                </n-form-item>
            </n-form>
        </n-card>
    </n-space>
</template>

<script lang="ts">
import { FormInst } from "naive-ui"
import { defineComponent, reactive, ref } from "vue"

export default defineComponent({
    setup () {
        const formRef = ref<FormInst | null>(null)
        const compData = reactive({
            form:{name:""}
        })

        return {
            formRef,
            compData
        }
    }
})
</script>
