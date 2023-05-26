<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <a-form ref="formRef" :model="curdTable.edit.formState" :label-col="{span: 6}" :wrapper-col="{span: 15}">
                <a-row>
                    <a-col v-for="item in curdTable.edit.formItem" :key="item._key" v-bind="item.$colAttrs">
                        <a-form-item v-bind="item.$formItemAttrs">
                            <component v-if="curdTable.utils.compatibleCompValue(item.el) === '1'" :is="item.el"
                                       v-model:value="curdTable.edit.formState[item.$formItemAttrs.name]"
                                       v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                            ></component>
                            <component v-if="curdTable.utils.compatibleCompValue(item.el) === '2'" :is="item.el"
                                       v-model:checked="curdTable.edit.formState[item.$formItemAttrs.name]"
                                       v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                            ></component>
                            <component v-if="curdTable.utils.compatibleCompValue(item.el) === '3'" :is="item.el"
                                       v-model:file-list="curdTable.edit.formState[item.$formItemAttrs.name]"
                                       v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                            ></component>
                            <template v-if="item.el === 'bag-upload-image'">
                                <a-form-item-rest>
                                    <a-input v-model:value="curdTable.edit.formState[item.$formItemAttrs.name]"
                                             v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                    />
                                </a-form-item-rest>
                                <bag-upload-image v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                                  v-model:image="curdTable.edit.formState[item.$formItemAttrs.name]"
                                ></bag-upload-image>
                            </template>
                            <template v-if="item.el === 'md-editor'">
                                <md-editor v-model="curdTable.edit.formState[item.$formItemAttrs.name]"
                                           v-bind="curdTable.utils.filter$elAttrs(item.$elAttrs).$attrs"
                                />
                            </template>
                            <template v-if="item.slot.name">
                                <slot :name="item.slot.name" v-bind="{formState:curdTable.edit.formState,item}"></slot>
                            </template>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </div>
    </div>

</template>
<script type="ts">
import { defineComponent, inject, onBeforeUnmount, onMounted } from 'vue'
import { browser } from 'pm-utils'
import { useRouter, useRoute } from 'vue-router'
import appPinia from '@/packages/pinia/app'

let id = null
export default defineComponent({
    setup() {
        const route = useRoute()
        const appStore = appPinia()
        id = route.query.id
        const { curdTable } = appStore.curdCache[id]
        console.log(appStore.curdCache[id])
        return {
            curdTable,
        }
    },
})
</script>

<style lang="less" scoped>
@import '@/packages/style/curd.less';
</style>
