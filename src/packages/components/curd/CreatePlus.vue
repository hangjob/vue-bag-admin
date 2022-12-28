<template>
    <a-modal v-bind="curdTable.$cModalAttrs" @ok="curdTable.$cModalAttrs.ok(formRef)"
             @cancel="curdTable.$cModalAttrs.cancel"
    >
        <a-form ref="formRef" :model="curdTable.create.formState" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col v-for="item in curdTable.create.formItem" :key="item._key" v-bind="item.$colAttrs">
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
                                <a-input v-model:value="curdTable.create.formState[item.$formItemAttrs.name]"
                                         v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                />
                            </a-form-item-rest>
                            <bag-upload-image v-bind="item.$slotAttrs"
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
    </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useSlots, useAttrs } from 'vue'

export default defineComponent({
    props: {
        curdTable: {
            type: Object,
            default: () => {
            },
        },
    },
    setup() {
        const formRef = ref(null)
        return {
            formRef,
        }
    },
})
</script>
