<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col v-for="item in formItem" :key="item.name" :xs="item.xs" :sm="item.sm" :md="item.md" :lg="item.lg"
                       :xl="item.xl"
                >
                    <a-form-item :label="item.formData.label" :name="item.formData.name">
                        <component v-if="item.formData.element === 'a-input'" :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-switch'" :is="item.formData.element"
                                   v-model:checked="formState[item.formData.name]"
                                   :placeholder="item.formData.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-textarea'" showCount
                                   :maxlength="item.formData.maxlength" :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.placeholder"
                        ></component>
                        <template v-if="item.formData.element === 'bag-upload-image'">
                            <a-input v-model:value="formState[item.formData.name]"
                                     :placeholder="item.formData.placeholder"
                            />
                            <bag-upload-image @update:image="baseResources[item.formData.props.onUpdateName]"
                                              :image="formState[item.formData.name]"
                                              :fixedBox="item.formData.props.fixedBox"
                                              :autoCropWidth="item.formData.props.autoCropWidth"
                                              :autoCropHeight="item.formData.props.autoCropHeight"
                            ></bag-upload-image>
                        </template>
                        <template v-if="item.formData.element === 'a-select'">
                            <a-select
                                v-model:value="formState[item.formData.name]"
                                mode="tags"
                                style="width: 100%"
                                placeholder="选择关键词"
                                option-label-prop="label"
                                :options="baseResources.keywords"
                            >
                                <template #option="{ value: val, label, icon }">
                                    <span role="img" :aria-label="val">{{ icon }}</span>
                                    &nbsp;&nbsp;{{ val }}
                                </template>
                            </a-select>
                        </template>
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
    setup() {
        const {formState, formItem, rules, baseResources, formRef} = hook()
        return {
            formState,
            rules,
            baseResources,
            formRef,
            formItem,
        }
    },
})
</script>
