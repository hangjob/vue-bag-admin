<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #icon="{ record }">
            <component :is="record.icon"></component>
        </template>
        <template #type="{ record }">
            <a-tag color="#2db7f5" v-if="record.children">目录</a-tag>
            <a-tag color="#87d068" v-else>菜单</a-tag>
        </template>
        <template #form-icon="{item}">
            <a-input-search
                v-model:value="editForm.formState[item.formData.name]"
                placeholder="选择icon图标"
                enter-button
                :readonly="true"
                @search="visibleIcon = true"
            />
            <a-modal v-model:visible="visibleIcon" width="85%" title="选择icon" okText="确认" cancelText="关闭">
                <Icons v-model:icon="editForm.formState[item.formData.name]" @affirm="visibleIcon = false" />
            </a-modal>
        </template>
        <template #table-action="{record}">
<!--            <a-button size="small" @click="handleSetBtn({record})">设置按钮-->
<!--            </a-button>-->
        </template>
    </bag-curd-table>
    <Btns ref="btns" @submit="authSubmit" />
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import { toTree } from '@/packages/utils/utils'
import Icons from '@/packages/views/sys/menu/Icons.vue'
import Btns from './Btns.vue'

export default defineComponent({
    components: {
        Icons,
        Btns,
    },
    setup() {
        const visibleIcon = ref(false)
        const btns: any = ref(false)
        const { tableCurd } = curdTableHock()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/menu'
            },
        }))
        tableCurd.all.beforeSuccess = (res: any) => {
            tableCurd.tableData = toTree(res)
            form.formItem.forEach((item) => {
                if (item.formData.name === 'pid') {
                    item.formData.treeData = toTree(res)
                }
            })
        }
        tableCurd.create.beforeSubmit = (data)=>{

        }
        const handleSetBtn = ({ record }) => {
            btns.value.handleOpen(true, record)
        }
        const authSubmit = () => {

        }
        return {
            tableCurd,
            editForm: { ...form },
            createForm: { ...cloneDeep(form) },
            visibleIcon,
            handleSetBtn,
            btns,
            authSubmit,
        }
    },
})
</script>
