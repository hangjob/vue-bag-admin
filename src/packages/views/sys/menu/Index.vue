<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #icon="{ record }">
            <template v-if="record.icon">
                <component :is="record.icon"></component>
            </template>
        </template>
        <template #type="{ record }">
            <a-tag color="#2db7f5" v-if="record.children">目录</a-tag>
            <a-tag color="#87d068" v-else>菜单</a-tag>
        </template>
        <template #form-icon="{item,formState}">
            <a-input-search
                v-model:value="formState[item.formData.name]"
                placeholder="选择icon图标"
                enter-button
                :readonly="true"
                @search="compData.visibleIcon = true"
            />
            <a-modal v-model:visible="compData.visibleIcon" width="85%" title="选择icon" okText="确认" cancelText="关闭">
                <Icons v-model:icon="formState[item.formData.name]" @affirm="compData.visibleIcon = false" />
            </a-modal>
        </template>
    </bag-curd-table>
    <Btns ref="btns" />
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import { toTree } from '@/packages/utils/utils'
import Icons from '@/packages/views/sys/menu/Icons.vue'
import Btns from './Btns.vue'
import { cloneDeep } from 'lodash'

export default defineComponent({
    components: {
        Icons,
        Btns,
    },
    setup() {
        const btns: any = ref(false)
        const { tableCurd } = curdTableHock()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/menu',
            },
        }))
        tableCurd.all.beforeSuccess = (res: any) => {
            form.formItem.forEach((item) => {
                if (item.formData.name === 'pid') {
                    item.formData.treeData = toTree(res)
                }
            })
            return toTree(res)
        }
        const compData = reactive({
            visibleIcon: false,
            handleSetBtn: ({ record }) => {
                btns.value.handleOpen(true, record)
            },
        })
        const editForm = computed(() => cloneDeep(form))
        const createForm = computed(() => cloneDeep(form))
        return {
            tableCurd,
            editForm,
            createForm,
            compData,
            btns,
        }
    },
})
</script>
