<template>
    <div>
        <a-form ref="formRef" :model="curdTable.create.formState" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col v-for="(item,idx) in curdTable.create.formItem" :key="item._key" v-bind="item.$colAttrs">
                    <a-form-item v-bind="item.$formItemAttrs">
                        <component v-if="curdTable.utils.compatibleCompValue(item.el) === '1'" :is="item.el"
                                   v-model:value="curdTable.create.formState[item.$formItemAttrs.name]"
                                   v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                        ></component>
                        <component v-if="curdTable.utils.compatibleCompValue(item.el) === '2'" :is="item.el"
                                   v-model:checked="curdTable.create.formState[item.$formItemAttrs.name]"
                                   v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                        ></component>
                        <component v-if="curdTable.utils.compatibleCompValue(item.el) === '3'" :is="item.el"
                                   v-model:file-list="curdTable.create.formState[item.$formItemAttrs.name]"
                                   v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                        ></component>
                        <template v-if="item.el === 'bag-upload-image'">
                            <a-form-item-rest>
                                <a-input :class="'bag_img_'+idx"
                                         v-model:value="curdTable.create.formState[item.$formItemAttrs.name]"
                                         v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                />
                            </a-form-item-rest>
                            <bag-upload-image
                                v-bind="{...curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs,className:'bag_img_'+idx}"
                                v-model:image="curdTable.create.formState[item.$formItemAttrs.name]"
                            ></bag-upload-image>
                        </template>
                        <template v-if="item.el === 'md-editor'">
                            <md-editor v-model="curdTable.create.formState[item.$formItemAttrs.name]"
                                       v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                            />
                        </template>
                        <template v-if="item.slot.name">
                            <slot :name="item.slot.name" v-bind="{formState:curdTable.create.formState,item}"></slot>
                        </template>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
    props: {
        config: {
            type: Object,
            default: {
                imgWith: 850,
                imgHeight: 300,
            },
        },
        curdTable: {
            type: Object,
            default: () => {
            },
        },
    },
    setup(props) {
        const formRef = ref(null)
        const compData = reactive({
            config: { ...props.config },
        })
        return {
            formRef,
        }
    },
})
</script>
