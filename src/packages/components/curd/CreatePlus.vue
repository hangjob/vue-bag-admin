<template>
    <a-modal v-bind="curdTable.$cModalAttrs" @ok="curdTable.$cModalAttrs.ok(formRef)">
        <a-form ref="formRef" :model="curdTable.create.formState" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col v-for="item in curdTable.create.formItem" :key="item._key" v-bind="item.$colAttrs">
                    <a-form-item v-bind="item.$formItemAttrs">
                        <component :is="item.el" v-model:value="curdTable.create.formState[item.$formItemAttrs.name]"
                                   v-bind="compData.filter$elAttrs(item.$elAttrs).$attrs"
                        ></component>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
    props: {
        curdTable: {
            type: Object,
            default: () => {
            },
        },
    },
    setup(props) {
        const formRef = ref(null)
        const compData = reactive({
            filter$elAttrs(attrs) {
                const { value, ...$attrs } = attrs
                return { $attrs }
            },
        })
        console.log(props.curdTable.create)
        return {
            compData,
            formRef
        }
    },
})
</script>
