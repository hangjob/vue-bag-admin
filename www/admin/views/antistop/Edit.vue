<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col v-for="item in formItem" :key="item.name" :xs="item.xs" :sm="item.sm" :md="item.md" :lg="item.lg"
                       :xl="item.xl"
                >
                    <a-form-item :label="item.formData.label" :name="item.formData.name">
                        <component v-if="item.formData.element === 'a-input'" :is="item.formData.element" v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-switch'" :is="item.formData.element" v-model:checked="formState[item.formData.name]"
                                   :placeholder="item.formData.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-textarea'" showCount :maxlength="item.formData.maxlength" :is="item.formData.element" v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.placeholder"
                        ></component>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import hook from './hook'

export default defineComponent({
    props: {
        id: {
            required: true,
            type: [Number, String],
        },
    },
    setup() {
        const {formState, formItem, rules, baseResources, formRef} = hook()
        return {
            formState,
            rules,
            baseResources,
            formRef,
            formItem
        }
    },
})
</script>
