<template>
    <div>
        <a-form ref="aFormRefApi" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col :autoLink="item.formData.autoLink" v-for="item in formItem" :key="item.name" :xs="item.xs"
                       :sm="item.sm"
                       :md="item.md"
                       :lg="item.lg"
                       :xl="item.xl"
                >
                    <a-form-item :label="item.formData.label" :name="item.formData.name"
                                 :labelCol="item.formData.labelCol"
                                 :wrapperCol="item.formData.wrapperCol"
                    >
                        <component v-if="item.formData.element === 'a-input'" :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :placeholder="item.formData.props.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-switch'" :is="item.formData.element"
                                   v-model:checked="formState[item.formData.name]"
                                   :placeholder="item.formData.props.placeholder"
                                   :checked-children="item.formData.props.checkedText"
                                   :un-checked-children="item.formData.props.uncheckedText"
                        ></component>
                        <component v-if="item.formData.element === 'a-textarea'" showCount
                                   :maxlength="item.formData.props.maxlength" :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :rows="item.formData.props.rows"
                                   :placeholder="item.formData.props.placeholder"
                        ></component>
                        <component v-if="item.formData.element === 'a-date-picker'" :is="item.formData.element"
                                   v-model:value="formState[item.formData.name]"
                                   :show-time="item.formData.props.showTime"
                                   :valueFormat="item.formData.props.valueFormat"
                                   :type="item.formData.props.type"
                                   :placeholder="item.formData.props.placeholder"
                                   style="width: 100%"
                        >
                        </component>
                        <template v-if="item.formData.element === 'a-select'">
                            <a-select
                                v-model:value="formState[item.formData.name]"
                                :mode="item.formData.props.mode"
                                style="width: 100%"
                                :placeholder="item.formData.props.placeholder"
                                @change="item.formData.change"
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
                            <a-form-item-rest>
                                <a-input v-model:value="formState[item.formData.name]"
                                         :placeholder="item.formData.props.placeholder"
                                />
                            </a-form-item-rest>
                            <bag-upload-image :fixedBox="item.formData.props.fixedBox"
                                              :autoCropWidth="item.formData.props.autoCropWidth"
                                              :autoCropHeight="item.formData.props.autoCropHeight"
                                              :isFileMore="item.formData.props.isFileMore"
                                              v-model:image="formState[item.formData.name]"
                            ></bag-upload-image>
                        </template>
                        <template v-if="item.formData.element === 'md-editor'">
                            <md-editor :previewTheme="item.formData.props.previewTheme"
                                       :codeTheme="item.formData.props.codeTheme"
                                       @onUploadImg="(files,callback)=>onUploadImg(files,callback,{
                                           fileSize:item.formData.props.fileSize
                                       })"
                                       v-model="formState[item.formData.name]"
                            />
                        </template>
                        <template v-if="item.formData.element === 'a-tree-select'">
                            <a-tree-select
                                v-model:value="formState[item.formData.name]"
                                style="width: 100%"
                                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                                :tree-data="item.formData.treeData"
                                :field-names="item.formData.replaceFields"
                                :placeholder="item.formData.props.placeholder"
                                allow-clear
                                tree-default-expand-all
                            >
                            </a-tree-select>
                        </template>
                        <template v-if="item.formData.slotName">
                            <slot :name="item.formData.slotName" v-bind="{formState,item}"></slot>
                        </template>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject, reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { apiUploadImage } from '@/packages/service/upload'

export default defineComponent({
    props: {
        form: {
            type: Object,
            default: () => {
                return { rules: {}, formItem: {}, formState: [] }
            },
        },
    },
    setup(props) {
        const aFormRefApi = ref()
        const { formState, rules, formItem } = reactive(props.form)
        const { getImageFullPath } = inject<any>('bagGlobal')
        
        const onUploadImg = async (files: any, callback: Function, { fileSize }) => {
            const res = await Promise.all(
                Array.from(files).map((file: any) => {
                    return new Promise((rev, rej) => {
                        if ((file.size / 1024) < fileSize) {
                            message.error(`图片小于${fileSize}KB`)
                        } else {
                            apiUploadImage(file).then((data: any) => {
                                rev(getImageFullPath(data))
                            }).catch((err: any) => {
                                rej(err)
                            })
                        }
                    })
                }),
            )
            callback(res.map((item: any) => item))
        }
        const resetFields = () => {
            aFormRefApi.value.resetFields()
        }
        return {
            formState,
            rules,
            aFormRefApi,
            formItem,
            onUploadImg,
            resetFields,
        }
    },
})
</script>
