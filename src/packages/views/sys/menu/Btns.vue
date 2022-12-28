<template>
    <a-modal
        title="设置菜单页按钮"
        v-model:visible="compData.visible"
        width="75%"
        class="auth"
        :maskClosable="false"
    >
        <template #footer>
            <div style="display:flex">
                <div style="display:flex;flex:1">
                    <a-button class="bag-button-color-green" key="back" @click="compData.handleCreate">添加</a-button>
                </div>
                <div>
                    <a-button key="back" @click="compData.visible = false">取消</a-button>
                    <a-button key="submit" type="primary" :loading="compData.loading" @click="compData.handleSubmit">
                        确认
                    </a-button>
                </div>
            </div>
        </template>
        <a-table rowKey="id" :columns="compData.columns" :data-source="compData.dataSource" bordered>
            <template #bodyCell="{ column, text, record }">
                <template v-if="['name', 'tag'].includes(column.dataIndex)">
                    <div>
                        <a-input
                            v-if="compData.editableData[record.id]"
                            v-model:value="compData.editableData[record.id][column.dataIndex]"
                            style="margin: -5px 0"
                        />
                        <template v-else>
                            {{ text }}
                        </template>
                    </div>
                </template>
                <template v-else-if="column.dataIndex === 'action'">
                    <div class="editable-row-operations">
                        <span v-if="compData.editableData[record.id]">
                            <a-space>
                                <a-button type="primary" class="bag-button-color-green" size="small"
                                          @click="compData.handleSave(record.id,record)"
                                >保存</a-button>
                                <a-button type="primary" size="small" @click="compData.handleCancel(record.id)"
                                >取消</a-button>
                            </a-space>
                        </span>
                        <span v-else>
                            <a-space>
                                <a-button type="primary" size="small" @click="compData.handleEdit(record.id)"
                                >编辑</a-button>
                                <a-button type="primary" danger size="small" @click="compData.handleDelete(record)">删除</a-button>
                            </a-space>
                        </span>
                    </div>
                </template>
            </template>
        </a-table>
    </a-modal>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, reactive, ref, watch } from 'vue'
import { cloneDeep } from 'lodash'
import { string } from 'pm-utils'
import { apiAll, apiCreate, apiFind, apiUpdate,apiDelete } from '@/packages/service/btns'

export default defineComponent({
    setup(props, context) {
        const compData = reactive({
            visible: false,
            loading: false,
            row: {
                record: <any>{},
            },
            value: [],
            columns: [{ title: 'ID', dataIndex: 'id', align: 'center', width: 100 },
                { title: '名称', dataIndex: 'name', align: 'center', width: '30%' }, {
                    title: '标识符',
                    dataIndex: 'tag',
                    align: 'center',
                    width: '30%',
                },
                { title: '操作', dataIndex: 'action', align: 'center', width: '200px' },
            ],
            dataSource: <any>[],
            editableData: {},
            handleChange: () => {
            
            },
            handleSubmit: () => {
                console.log(compData.dataSource)
            },
            handleCreate() {
                compData.dataSource.push({ name: '', tag: '', key: string.randomId({ size: 21 }) })
            },
            handleOpen({ record }) {
                compData.visible = true
                compData.row.record = record
                this.getData()
            },
            handleSave(key, record) {
                Object.assign(compData.dataSource.filter(item => key === item.id)[0], compData.editableData[key])
                delete compData.editableData[key]
                const { name, tag } = record
                debugger
                apiFind({ id: record.id || '0' }).then((res) => {
                    if (!res) {
                        apiCreate({ name, tag, menu_id: compData.row.record.id }).then(()=>{
                            this.getData()
                        })
                    } else {
                        apiUpdate({ id: record.id, name, tag }).then(()=>{
                            this.getData()
                        })
                    }
                })
            },
            handleEdit(key) {
                compData.editableData[key] = cloneDeep(compData.dataSource.filter(item => key === item.id)[0])
            },
            handleCancel(key) {
                delete compData.editableData[key]
            },
            getData() {
                apiAll({ menu_id: compData.row.record.id }).then((res) => {
                    compData.dataSource = res
                })
            },
            handleDelete(record) {
                if(record.id){
                    apiDelete({id:record.id}).then(()=>{
                        this.getData()
                    })
                }
            },
        })
        return {
            compData,
        }
    },
})
</script>
<style lang="less" scoped>
.auth {
    &-body {
        padding: 20px;
    }
    
    &-action {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        left: 0;
        background-color: #fff;
        border-radius: 0 0 4px 4px;
    }
}
</style>
