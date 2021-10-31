<template>
    <yxs-view>
        <a-space :size="10">
            <vxe-button status="warning" content="设置第三、四行选中" @click="toggleCheckboxRow"></vxe-button>
            <vxe-button status="danger" content="获取高亮行" @click="getCurrentEvent"></vxe-button>
            <vxe-button content="清除所有行选中" @click="$refs.xTable.clearCheckboxRow()"></vxe-button>
        </a-space>
        <br />
        <br />
        <vxe-table
            round
            border
            ref="xTable"
            :cell-style="cellStyle"
            highlight-hover-row
            highlight-current-row
            :tooltip-config="demo1.tableTooltipConfig"
            :data="demo1.tableData"
        >
            <vxe-column type="checkbox" width="60"></vxe-column>
            <vxe-column type="seq" width="60"></vxe-column>
            <vxe-column field="name" title="名称" :title-help="{message: '自定义帮助提示信息'}"></vxe-column>
            <vxe-column
                field="role"
                title="角色"
                :title-help="{message: '自定义图标', icon: 'fa fa-bell'}"
            ></vxe-column>
            <vxe-column field="date" title="Date"></vxe-column>
            <vxe-column field="rate" title="Rate">
                <template #header>
                    <span>自定义标题</span>
                </template>
            </vxe-column>
            <vxe-column field="address" title="Address" width="160"></vxe-column>
            <vxe-column type="html" field="content" title="Content" width="200"></vxe-column>
        </vxe-table>
    </yxs-view>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import {
    VxeColumnPropTypes,
    VxeTablePropTypes,
    VxeTableInstance,
    VXETable,
} from 'vxe-table'
import tableData from './data'
export default defineComponent({
    setup() {
        const demo1 = reactive({
            loading: false,
            sexList: [
                {
                    label: '女',
                    value: '0',
                },
                {
                    label: '男',
                    value: '1',
                },
            ],
            tableTooltipConfig: {
                showAll: true,
                enterable: true,
                contentMethod: ({ type, column, row, items, _columnIndex }) => {
                    const { property } = column
                    return null // 返回默认值
                },
            } as VxeTablePropTypes.TooltipConfig,
            tableData: tableData,
            tableCheckboxConfig: {
                labelField: 'name',
                checkMethod: ({ row }: any) => {
                    return row.role !== 'Designer'
                },
            } as VxeTablePropTypes.CheckboxConfig,
        })

        const xTable = ref({} as VxeTableInstance)

        const formatterSex: VxeColumnPropTypes.Formatter = ({ cellValue }) => {
            const item = demo1.sexList.find((item) => item.value === cellValue)
            return item ? item.label : ''
        }

        const filterAgeMethod: VxeColumnPropTypes.FilterMethod = ({
            value,
            row,
        }) => {
            return row.age >= value
        }

        const getCurrentEvent = () => {
            const $table = xTable.value
            VXETable.modal.alert(JSON.stringify($table.getCurrentRecord()))
        }

        const toggleCheckboxRow = () => {
            const $table = xTable.value
            $table.setCheckboxRow([tableData[2], tableData[3]], true)
        }

        const cellStyle: VxeTablePropTypes.CellStyle = ({ row, column }) => {
            if (column.property === 'sex') {
                if (row.name === 'Test3') {
                    return {
                        backgroundColor: '#187',
                    }
                } else if (row.age === 26) {
                    return {
                        backgroundColor: '#2db7f5',
                    }
                }
            }
        }

        return {
            demo1,
            xTable,
            formatterSex,
            filterAgeMethod,
            getCurrentEvent,
            toggleCheckboxRow,
            cellStyle
        }
    },
})
</script>