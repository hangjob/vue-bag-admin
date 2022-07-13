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
                                   :placeholder="item.formData.props.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-switch'" :is="item.formData.element"
                                   v-model:checked="formState[item.formData.name]"
                                   :placeholder="item.formData.props.placeholder"
                                   :checked-children="item.formData.props.checkedText"
                                   :un-checked-children="item.formData.props.unchecke"
                        ></component>
                        <component v-if="item.formData.element === 'a-textarea'" showCount
                                   :maxlength="item.formData.props.maxlength" :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.props.placeholder"
                        ></component>
                        <template v-if="item.formData.element === 'a-select'">
                            <a-select
                                v-model:value="formState[item.formData.name]"
                                :mode="item.formData.props.mode"
                                style="width: 100%"
                                :placeholder="item.formData.props.placeholder"
                            >
                                <a-select-option value="">请选择</a-select-option>
                                <a-select-option v-for="(opt,idx) in item.formData.options" :key="idx"
                                                 :value="opt.value"
                                >
                                    {{ opt.name }}
                                </a-select-option>
                            </a-select>
                        </template>
                        <template v-if="item.formData.element === 'bag-upload-image'">
                            <a-input v-model:value="formState[item.formData.name]"
                                     :placeholder="item.formData.props.placeholder"
                            />
                            <bag-upload-image :fixedBox="item.formData.props.fixedBox"
                                              :autoCropWidth="item.formData.props.autoCropWidth"
                                              :autoCropHeight="item.formData.props.autoCropHeight"
                                              :isFileMore="item.formData.props.isFileMore"
                                              v-model:image="formState[item.formData.name]"
                            ></bag-upload-image>
                        </template>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'

export default defineComponent({
    props: {
        form: {
            type: Object,
            default: () => {
                return {rules: {}, formItem: {}, formState: []}
            },
        },
    },
    setup(props) {
        const formRef = ref()
        const {formState, rules, formItem} = reactive(props.form)
        return {
            formState,
            rules,
            formRef,
            formItem,
        }
    },
})
</script>
