<template>
    <div class="p-4">
        <form-create :rule="searchAttribute.rule" v-model:api="searchAttribute.fApi"
                     :option="searchAttribute.options"/>
        <n-card style="height:100%" :segmented="{content: true,footer:true}"
                header-style="padding:10px;font-size:14px"
                footer-style="padding:10px;" content-style="padding:10px;height:100%">
            <template #header>
                <div class="flex justify-end items-center gap-x-3">
                </div>
            </template>
            <template #header-extra>
                <div class="flex justify-end items-center gap-x-3">
                    <n-button size="small" @click="onCreate">新增</n-button>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <n-popselect v-model:value="tableAttribute.size"
                                         :options="tableAttribute.densityOptions" trigger="click">
                                <n-icon size="20" :depth="2">
                                    <ResizeOutline/>
                                </n-icon>
                            </n-popselect>
                        </template>
                        <span>密度</span>
                    </n-popover>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <n-icon @click="tableAttribute.onRefresh" size="20" :depth="2">
                                <ReloadOutline/>
                            </n-icon>
                        </template>
                        <span>刷新</span>
                    </n-popover>
                    <n-popover trigger="hover">
                        <template #trigger>
                            <n-popselect v-model:value="tableAttribute.columnsModelValue"
                                         multiple
                                         :options="tableAttribute.columnsOptions"
                                         :render-label="(options)=>renderMultiCheckbox(tableAttribute.columnsModelValue,options)"
                                         trigger="click">
                                <n-icon size="20" :depth="2">
                                    <SettingsOutline/>
                                </n-icon>
                            </n-popselect>
                        </template>
                        <span>设置</span>
                    </n-popover>
                </div>
            </template>
            <template #footer>
                <n-pagination :item-count="101">
                    <template #prefix="{ itemCount, startIndex }">
                        从第 {{ startIndex }} 项开始, 共 {{ itemCount }} 项
                    </template>
                    <template #suffix="{ endIndex }">
                        从第 {{ endIndex }} 项结束
                    </template>
                </n-pagination>
            </template>
            <n-data-table
                v-model:checked-row-keys="tableAttribute.checkedRowKeys"
                :columns="tableAttribute.columns"
                :data="tableData"
                :loading="tableAttribute.loading"
                :size="tableAttribute.size"
                :pagination="false"
                :single-line="false"
            />
        </n-card>
    </div>
</template>

<script setup>
import {ReloadOutline, ResizeOutline, SettingsOutline} from "@vicons/ionicons5";
import {useTable, useFormCreate} from "@/packages/hook/useTable.js";

const tableData = [
    {no: 3, title: "Wonderwall", length: "4:18", key: 1},
    {no: 4, title: "Don't Look Back in Anger", length: "4:48", key: 2},
    {no: 12, title: "Champagne Supernova", length: "7:27", key: 3},
    {no: 3, title: "Wonderwall", length: "4:18", key: 4},
    {no: 4, title: "Don't Look Back in Anger", length: "4:48", key: 5},
];
const tableColumns = [
    {
        key: "no",
        title: '规则名称',
    },
    {
        key: "title",
        title: '服务调用次数',
    },
    {
        key: "length",
        title: '描述',
    },
    {
        key: "state",
        title: '状态',
    },
    {
        key: "scheduled",
        title: '上次调度时间',
    },
]

const formEdit = [
    {
        type: "input",
        title: "商品名称",
        field: "goods_name",
        value: "",
        props: {
            disabled: true,
        },
    },
    {
        type: "input",
        title: "商品名称",
        field: "goods_name",
        value: "",
    },
    {
        type: "InputNumber",
        field: "price",
        title: "价格",
        value: 1,
        props: {
            clearable: false
        },
    },
    {
        type: "autoComplete",
        title: "自动完成",
        field: "auto",
        value: "",
        inject: true,
        props: {},
    },
    {
        type: "radio",
        title: "是否包邮",
        field: "is_postage",
        value: "0",
        options: [
            {value: "0", label: "不包邮", disabled: false},
            {value: "1", label: "包邮", disabled: false},
            {value: "1", label: "补贴", disabled: true},
        ]
    },
    {
        type: "checkbox",
        title: "标签",
        field: "label",
        value: [],
        options: [
            {value: "1", label: "好用", disabled: true},
            {value: "2", label: "方便", disabled: false},
            {value: "3", label: "实用", disabled: false},
            {value: "4", label: "有效", disabled: false},
        ]
    },
    {
        type: "select",
        field: "cate_id",
        title: "产品分类",
        value: [],
        options: [
            {"value": "104", "label": "生态蔬菜", "disabled": false},
            {"value": "105", "label": "新鲜水果", "disabled": false},
        ],
        props: {
            multiple: true
        }
    },
    {
        type: "switch",
        title: "是否上架",
        field: "is_show",
        value: "1",
        props: {
            round: false,
        }
    },
    {
        type: "cascader",
        title: "所在区域",
        field: "address",
        value: [],
        props: {},
    },
    {
        type: "DatePicker",
        field: "section_day",
        title: "活动日期",
        value: null,
        props: {
            type: "datetimerange",
            placeholder: "请选择活动日期",
        }
    },
    {
        type: "upload",
        field: "pic",
        title: "轮播图",
        value: [],
        props: {
            action: "/upload.php",
            max: 2,
            onSuccess: function (res, file) {
                file.url = res.url;
            }
        }
    },
    {
        type: "TimePicker",
        field: "section_time",
        title: "活动时间",
        value: '00:00:00',
    }
]
const {renderMultiCheckbox, tableAttribute} = useTable(tableColumns, {
    onEdit() {
        const attribute = useFormCreate(formEdit, {
            form: {
                inline: false
            },
            rule: {
                col: {
                    span: 24
                },
            }
        })
        $globalStore.formCreate.title = '编辑'
        $globalStore.formCreate.rule = attribute.rule;
        $globalStore.formCreate.options = attribute.options;
        $globalStore.formCreate.fApi = attribute.fApi;
        $global.router.push({path: '/particulars', query: {rid: $globalStore.currentRouter?.meta?.id}})
    },
});


const onCreate = () => {
    const attribute = useFormCreate(formEdit, {
        form: {
            inline: false
        },
        rule: {
            col: {
                span: 24
            },
        }
    })
    $globalStore.formCreate.title = '新增'
    $globalStore.formCreate.rule = attribute.rule;
    $globalStore.formCreate.options = attribute.options;
    $globalStore.formCreate.fApi = attribute.fApi;
    $global.router.push({path: '/particulars', query: {rid: $globalStore.currentRouter?.meta?.id}})
}

const searchRule = [
    {
        field: 'goods_name',
        title: '商品名称1',
    },
    {
        field: 'goods_name2',
        title: '商品名称2',
    },
    {
        field: 'goods_name3',
        title: '商品名称',
    },
    {
        field: 'goods_name3',
        title: '商品名称',
    }
]
const searchAttribute = useFormCreate(searchRule, {
    resetBtn: true,
    submitBtn: true
})
</script>
