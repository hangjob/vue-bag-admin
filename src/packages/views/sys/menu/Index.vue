<template>
    <bag-curd-plus :curdTable="curd.curdTable">
        <template #icon="{ record }">
            <template v-if="record.icon">
                <component :is="record.icon"></component>
            </template>
        </template>
        <template #type="{ record }">
            <a-tag color="#2db7f5" v-if="record.children">目录</a-tag>
            <a-tag color="#87d068" v-else>菜单</a-tag>
        </template>
        <template #custom_action="{record}">
            <a-space v-if="!record.children">
                <a-button class="bag-button-color-green" size="small" @click="compData.handleSetBtn({record})">设置按钮</a-button>
                <a-button type="primary" size="small" @click="curd.curdTable.edit.change({record})">编辑</a-button>
                <a-popconfirm
                    :title="`你确定删除嘛？`"
                    ok-text="确认"
                    cancel-text="关闭"
                    placement="topRight"
                    @confirm="curd.curdTable.delete.submit({record})"
                >
                    <a-button type="primary" danger size="small">删除</a-button>
                </a-popconfirm>
            </a-space>
        </template>
        <template #form-icon="{item,formState}">
            <a-input-search
                v-model:value="formState[item.$formItemAttrs.name]"
                placeholder="选择icon图标"
                enter-button
                :readonly="true"
                @search="compData.visibleIcon = true"
            />
            <a-modal v-model:visible="compData.visibleIcon" width="85%" title="选择icon" okText="确认" cancelText="关闭">
                <Icons v-model:icon="formState[item.$formItemAttrs.name]" @affirm="compData.visibleIcon = false" />
            </a-modal>
        </template>
    </bag-curd-plus>
    <Btns ref="btns" />
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import columns from './columns'
import { toTree } from '@/packages/utils/utils'
import Icons from '@/packages/views/sys/menu/Icons.vue'
import Btns from './Btns.vue'
import initCurd, { createTableHock } from '@/packages/hook/tablePlus'

export default defineComponent({
    components: {
        Icons,
        Btns,
    },
    setup() {
        const defaultCurdTable = initCurd()
        defaultCurdTable.$pageAttrs.defaultPageSize = 50;
        defaultCurdTable.all.isPage = true
        defaultCurdTable.all.api = '/menu/page'
        defaultCurdTable.apiPrefix = '/menu'
        const curd = createTableHock({ columns, curdTable: defaultCurdTable })
        
        const btns: any = ref(false)
        
        defaultCurdTable.all.afterRequest = function(res) {
            columns.forEach((item: any) => {
                if (item.dataIndex === 'pid') {
                    const treeData = toTree(res.rows)
                    treeData.unshift({ name: '请选择', id: 0 })
                    item.curd.$elAttrs.treeData = treeData
                }
            })
            const dataSource = toTree(res.rows)
            return {
                dataSource,
                total: dataSource.length,
            }
        }
        
        const compData = reactive({
            visibleIcon: false,
            handleSetBtn: ({ record }) => {
                btns.value.compData.handleOpen({record})
            },
        })
        
        return {
            compData,
            btns,
            curd,
        }
    },
})
</script>
