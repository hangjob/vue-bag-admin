<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-curd-header">
                <a-row type="flex">
                    <slot name="header-action">
                        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="bag-curd-header-action">
                                <a-space :size="20">
                                    <template v-for="(item,idx) in tableCurd.btns">
                                        <a-button v-if="buttonPermissions(item)" v-debounce="{ func: item.func}"
                                                  :class="item.class" :type="item.type"
                                        >
                                            {{ buttonPermissions(item).name }}
                                        </a-button>
                                    </template>
                                </a-space>
                            </div>
                        </a-col>
                    </slot>
                    <slot name="header-prolate">
                        <a-col class="hidden-xs" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="bag-curd-header-prolate">
                                <a-row type="flex" justify="end">
                                    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                        <div>
                                            <template key="idx" v-for="(item,idx) in tableCurd.extBtns">
                                                <template v-if="item.ui === 'm'">
                                                    <a-popover v-if="item.name === 'Excel导出'" trigger="click"
                                                               placement="bottomRight"
                                                    >
                                                        <template #content>
                                                            <a-button type="primary"
                                                                      @click="exportTableData({tableCurd,columns})"
                                                                      ghost
                                                            >
                                                                Excel导出
                                                            </a-button>
                                                        </template>
                                                        <template #title>
                                                            <span>数据导出</span>
                                                        </template>
                                                        <a-button class="bag-button-color-daybreak" size="middle">数据导出
                                                        </a-button>
                                                    </a-popover>
                                                    <a-popover v-if="item.name === '表格大小'" trigger="click"
                                                               placement="bottomRight"
                                                    >
                                                        <template #content>
                                                            <a-radio-group v-model:value="tableSetting.size"
                                                                           button-style="solid"
                                                            >
                                                                <a-radio-button
                                                                    :value="item.value"
                                                                    :key="item.value"
                                                                    v-for="item in tableSetting.sizeOptions"
                                                                >
                                                                    {{ item.name }}
                                                                </a-radio-button>
                                                            </a-radio-group>
                                                        </template>
                                                        <template #title>
                                                            <span>表格大小</span>
                                                        </template>
                                                        <a-button style="margin:0 10px" class="bag-button-color-sunset"
                                                                  size="middle"
                                                        >表格大小
                                                        </a-button>
                                                    </a-popover>
                                                    <a-popover v-if="item.name === '显示表列'" trigger="click"
                                                               placement="bottomRight"
                                                    >
                                                        <template #content>
                                                            <div v-for="(item,idx) in columnsAll" :key="idx">
                                                                <a-checkbox
                                                                    v-model:checked="item.visible"
                                                                    :disabled="item.disabled"
                                                                    @change="({target})=>checkboxChange({target,item})"
                                                                >{{ item.title }}
                                                                </a-checkbox>
                                                            </div>
                                                        </template>
                                                        <template #title>
                                                            <span>显示表列</span>
                                                        </template>
                                                        <a-button class="bag-button-color-volcano" size="middle">显示表列
                                                        </a-button>
                                                    </a-popover>
                                                </template>
                                                <a-button v-else v-debounce="{ func: item.func}" :class="item.class"
                                                          :type="item.type"
                                                >
                                                    {{ item.name }}
                                                </a-button>
                                            </template>
                                        </div>
                                    </a-col>
                                </a-row>
                            </div>
                        </a-col>
                    </slot>
                </a-row>
                <a-row v-if="tableCurd.all.search.formItem.length">
                    <slot name="header-search">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <div class="bag-curd-header-search">
                                <a-form class="bag-curd-header-search-form" layout="inline"
                                        :model="tableCurd.all.search.formState"
                                >
                                    <a-form-item v-for="item in tableCurd.all.search.formItem" :label="item.label"
                                                 :name="item.name"
                                    >
                                        <component v-if="item.element === 'a-input'" :is="item.element"
                                                   v-model:value="tableCurd.all.search.formState[item.name]"
                                                   :placeholder="item.props.placeholder"
                                        ></component>
                                        <template v-if="item.element === 'a-select'">
                                            <a-select
                                                v-model:value="tableCurd.all.search.formState[item.name]"
                                                :mode="item.props.mode"
                                                style="width:120px"
                                                :placeholder="item.props.placeholder"
                                            >
                                                <a-select-option value="">请选择</a-select-option>
                                                <a-select-option v-for="(opt,idx) in item.options" :key="idx"
                                                                 :value="opt.value"
                                                >
                                                    {{ opt.name }}
                                                </a-select-option>
                                            </a-select>
                                        </template>
                                        <component v-if="item.element === 'a-radio-group'" :is="item.element"
                                                   v-model:value="tableCurd.all.search.formState[item.name]"
                                                   :placeholder="item.props.placeholder"
                                        >
                                            <a-radio :value="todo.value" :key="idx" v-for="(todo,idx) in item.options">
                                                {{ todo.name }}
                                            </a-radio>
                                        </component>
                                        <template v-if="item._slots">
                                            <slot :name="item._slots.customRender"
                                                  v-bind="{formState:tableCurd.all.search.formState,item}"
                                            ></slot>
                                        </template>
                                    </a-form-item>
                                    <a-form-item>
                                        <a-button @click="tableCurd.searchTable" type="primary">
                                            <template #icon>
                                                <SearchOutlined />
                                            </template>
                                            搜索
                                        </a-button>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-col>
                    </slot>
                </a-row>
            </div>
            <div class="bag-curd-body">
                <a-table :loading="tableCurd.loading" @change="tableCurd.tableChange" :pagination="tableCurd.pagination"
                         rowKey="id" :scroll="{ x: '85%' }" :columns="columns" :size="tableSetting.size"
                         :bordered="true"
                         :data-source="tableCurd.tableData" :row-selection="tableCurd.selection"
                >
                    <template #bodyCell="{ column, record }">
                        <template v-if="column._slots">
                            <a-space v-if="column._slots.customRender === 'action'">
                                <slot name="table-action" v-bind="{record}"></slot>
                                <a-button v-if="buttonPermissions({name:'编辑',tag:'edit'})" type="primary" size="small"
                                          @click="tableCurd.edit.change(record)"
                                >{{ buttonPermissions({ name: '编辑', tag: 'edit' }).name }}
                                </a-button>
                                <a-popconfirm
                                    v-if="buttonPermissions({name:'删除',tag:'del'})"
                                    :title="`你确定删除嘛？`"
                                    ok-text="确认"
                                    cancel-text="关闭"
                                    placement="topRight"
                                    @confirm="tableCurd.delete.submit(record)"
                                >
                                    <a-button type="primary" danger size="small">
                                        {{ buttonPermissions({ name: '删除', tag: 'del' }).name }}
                                    </a-button>
                                </a-popconfirm>
                            </a-space>
                            <slot v-else :name="column._slots.customRender" v-bind="{record}"></slot>
                        </template>
                    </template>
                </a-table>
            </div>
            <div class="bag-curd-footer">
            </div>
        </div>
    </div>
    <bag-modal v-model:visible="tableCurd.create.visible" title="新增" :width="tableCurd.create.width"
               @cancel="tableCurd.create.cancel"
               @ok="tableCurd.create.submit"
    >
        <bag-curd-create :tableCurd="tableCurd" :form="createForm" ref="curdCreate">
            <!-- 多层级插槽传递 -->
            <template v-for="(item) in createForm.formItem" v-slot:[item.formData.slotName]>
                <slot :name="item.formData.slotName" v-bind="{formState:createForm.formState,item}"></slot>
            </template>
        </bag-curd-create>
    </bag-modal>
    <bag-modal v-model:visible="tableCurd.edit.visible" title="编辑" :width="tableCurd.edit.width"
               @cancel="tableCurd.edit.cancel"
               @ok="tableCurd.edit.submit"
    >
        <bag-curd-create :tableCurd="tableCurd" :form="editForm" ref="curdEdit">
            <template v-for="(item) in editForm.formItem" v-slot:[item.formData.slotName]>
                <slot :name="item.formData.slotName" v-bind="{formState:editForm.formState,item}"></slot>
            </template>
        </bag-curd-create>
    </bag-modal>
</template>
<script lang="ts">
/**
 * 该组件一键Curd
 */
import { defineComponent, watch, reactive, ref, shallowReactive } from 'vue'
import { columnsCheckbox, findNearestTarget, exportTableData } from './utils'
import { cloneDeep } from 'lodash'
import appPinia from '@/packages/pinia/app'
import userPinia from '@/packages/pinia/user'

const btnsReal = [{ tag: 'refresh', name: '刷新' }, { tag: 'create', name: '新增' },
    { tag: 'del', name: '删除' }, { tag: 'edit', name: '编辑' }]
export default defineComponent({
    name: 'bag-curd-table',
    props: {
        tableCurd: {
            type: Object,
            default: () => {
            },
        },
        createForm: {
            type: Object,
            default: () => {
                return { rules: {}, formItem: {}, formState: [] }
            },
        },
        editForm: {
            type: Object,
            default: () => {
                return { rules: {}, formItem: {}, formState: [] }
            },
        },
    },
    setup(props, { emit }) {
        const userStore = userPinia()
        const appStore = appPinia()
        const curdCreate = ref()
        const curdEdit = ref()
        const tableCurd = reactive(props.tableCurd)
        tableCurd.create.refForm = curdCreate // 添加组件
        tableCurd.edit.refForm = curdEdit // 编辑组件
        let columns = reactive(cloneDeep(tableCurd.columns))
        const columnsAll = reactive(columnsCheckbox({ tableCurd }))
        const buttonPermissions = (btnItem) => {
            let btnInfo = <any>{}
            let rolesDetail = userStore.userInfo.rolesDetail
            if (rolesDetail && rolesDetail.btns) {
                const btns = userStore.userInfo.rolesDetail.btns
                const currentBtn = btns.find((item) => item.mid == appStore.currentRouter.id)
                if (currentBtn) {
                    const find = currentBtn.btn.find((item) => item.tag === btnItem.tag)
                    if (find) {
                        btnInfo.name = find.name
                    }
                }
                if (btnItem.builtIn) {
                    btnInfo.name = btnItem.name
                }
            } else {
                btnInfo = btnItem
            }
            return btnInfo && Object.keys(btnInfo).length ? btnInfo : false
        }
        const tableSetting = reactive({
            size: 'middle',
            sizeOptions: [
                { name: '默认', value: 'default' },
                { name: '中等', value: 'middle' },
                { name: '比较小', value: 'small' },
            ],
        })
        const checkboxChange = ({ target, item }) => {
            if (target.checked) {
                const sortIndex = findNearestTarget(columns.map(todo => todo.sortIndex), item.sortIndex) // 找到最近的下标
                let findIndex = columns.findIndex((todo) => todo.sortIndex === sortIndex)
                if (item.sortIndex !== 0 && findIndex !== columns.length) {
                    findIndex += 1
                }
                columns.splice(findIndex, 0, { ...item })
            } else {
                const findIndex = columns.findIndex((todo) => todo.key === item.key)
                columns.splice(findIndex, 1)
            }
        }
        
        return {
            tableCurd,
            curdCreate,
            curdEdit,
            columnsAll,
            columns,
            tableSetting,
            checkboxChange,
            exportTableData,
            buttonPermissions,
        }
    },
})
</script>
<style lang="less" scoped>
.bag-curd {
    background-color: #ffffff;
    min-height: 100%;
    border-radius: 3px;
    
    &-container {
    
    }
    
    &-header {
        padding: 15px;
        
        &-action {
            margin-bottom: 10px;
        }
        
        &-prolate {
            text-align: right;
            margin-bottom: 10px;
        }
        
        &-search {
            margin-top: 5px;
        }
        
        .ant-form-inline .ant-form-item:last-of-type {
            margin-right: 0;
        }
    }
    
    &-body {
    
    }
}
</style>
