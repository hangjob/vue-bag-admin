<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col v-for="item in formItem" :key="item.name" :xs="item.xs" :sm="item.sm" :md="item.md" :lg="item.lg"
                       :xl="item.xl"
                >
                    <a-form-item :label="item.formData.label" :name="item.formData.name"
                                 :labelCol="item.formData.labelCol" :wrapperCol="item.formData.wrapperCol">
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
                        <component v-if="item.formData.element === 'a-date-picker'"
                                   :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.props.placeholder"
                                   style="width: 100%"
                                   :type="item.formData.props.type"
                                   :show-time="item.formData.props.showTime"
                                   :valueFormat="item.formData.props.valueFormat"
                        ></component>
                        <template v-if="item.formData.element === 'md-editor'">
                            <md-editor
                                previewTheme="mk-cute"
                                codeTheme="paraiso"
                                @onUploadImg="onUploadImg"
                                v-model="formState[item.formData.name]"
                            />
                        </template>
                        <template v-if="item.formData.element === 'bag-upload-image'">
                            <a-input v-model:value="formState[item.formData.name]"
                                     :placeholder="item.formData.placeholder"
                            />
                            <bag-upload-image @update:image="baseResources[item.formData.props.onUpdateName]"
                                              :image="formState[item.formData.name]"
                            ></bag-upload-image>
                        </template>
                        <template v-if="item.formData.element === 'a-select'">
                            <a-select
                                v-model:value="formState[item.formData.name]"
                                :mode="item.formData.props.mode"
                                style="width: 100%"
                                :placeholder="item.formData.props.placeholder"
                            >
                                <a-select-option value="">请选择</a-select-option>
                                <a-select-option v-for="opt in baseResources.opts[item.formData.props.optsKey]" :key="opt.id"
                                                 :value="opt.id"
                                >
                                    {{ opt[item.formData.props.optNmae] }}
                                </a-select-option>
                            </a-select>
                        </template>
                        <template v-if="item.formData.element === 'bag-download-site'">
                            
                        </template>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import hook from './hook'
import BagDownloadSite from './components/BagDownloadSite.vue'
export default defineComponent({
    components:{
        BagDownloadSite
    },
    setup() {
        const { formState, formItem, rules, baseResources, formRef,onUploadImg } = hook()
        return {
            formState,
            rules,
            baseResources,
            formRef,
            formItem,
            onUploadImg
        }
    },
})
</script>
