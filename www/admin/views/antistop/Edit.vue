<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="关键词" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入关键词"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="简述" name="describe">
                        <a-textarea v-model:value="formState.describe" placeholder="输入简述" showCount
                                    :maxlength="300"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="用户ID" name="user_id">
                        <a-input v-model:value="formState.user_id" placeholder="输入用户ID"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示" name="shows">
                        <a-switch v-model:checked="formState.shows" />
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
import {defineComponent} from 'vue'
import hook from '@www/admin/views/channel/hook'

export default defineComponent({
    props: {
        id: {
            required: true,
            type: [Number, String],
        },
    },
    setup() {
        const {formState, rules, baseResources, formRef} = hook()

        return {
            formState,
            rules,
            baseResources,
            formRef,
        }
    },
})
</script>
