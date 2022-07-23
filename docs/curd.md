## 增删改查

> 快速创建增删改查，3分钟完成增删改查表单多样化页面开发

### 配置属性

新建`columns.js`文件

```
export default [
    {
        title: '网站名称', // 请看 a-table 组件说明
        dataIndex: 'name', 
        key: 'name',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'name',
            label: '网站名称',
            element: 'a-input',
            props: {
                placeholder: '输入网站名称',
            },
            rules: [
                {
                    required: true, message: '网站名称为必填项', trigger: 'blur',
                },
            ],
        },
        formSearch: {
            name: 'name',
            label: '网站名称',
            element: 'a-input',
            props: {
                placeholder: '输入网站名称搜索',
                value: '',
            },
        },
    },
    {
        title: '网站链接',
        dataIndex: 'url',
        key: 'url',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'url',
            label: '网站链接',
            element: 'a-input',
            props: {
                placeholder: '输入网站链接',
            },
            rules: [
                {
                    required: true, message: '网站链接为必填项', trigger: 'blur',
                },
            ],
        },
        formSearch: {
            name: 'url',
            label: '网站链接',
            element: 'a-select',
            options: [],
            props: {
                placeholder: '输入网站网站链接',
                value: '',
            },
        },
    },
    {
        title: '网站描述',
        dataIndex: 'slogan',
        key: 'slogan',
        ellipsis: true,
        align: 'center',
        width: 100,
        formData: {
            name: 'slogan',
            label: '描述',
            element: 'a-textarea',
            props: {
                placeholder: '输入描述',
                maxlength: 300,
            },
            rules: [
                {
                    required: true, message: '输入描述为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        ellipsis: true,
        align: 'center',
        visible: false,
        layout: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
        },
        formData: {
            name: 'content',
            label: '内容',
            element: 'md-editor',
            autoLink: false,
            labelCol: {
                span: 2,
                offset: 0,
            },
            wrapperCol: {
                span: 21,
                offset: 0,
            },
            props: {
                placeholder: '输入内容',
                previewTheme: 'mk-cute',
                codeTheme: 'paraiso',
                fileSize: 1000,
            },
        },
    },
    {
        title: '关键词',
        dataIndex: 'keywords',
        key: 'keywords',
        align: 'center',
        ellipsis: true,
        formData: {
            name: 'keywords',
            label: '关键词',
            element: 'a-select',
            props: {
                placeholder: '输入关键词',
                defaultValue: Array(),
            },

        },
    },
    {
        title: '网站logo',
        dataIndex: 'logo',
        key: 'logo',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'logo',
            label: '网站logo',
            element: 'bag-upload-image',
            props: {
                placeholder: '上传图片',
            },
            rules: [
                {
                    required: true, message: '图片为必填项', trigger: 'blur',
                },
            ],
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: { customRender: 'action' },
    },
]

```

#### 说明

[And-Design-Vue组件官网](https://2x.antdv.com/components/overview/)

#### formData

> 如果columns中的每一项数据包含`formData`属性，说明是可以添加或者编辑

```ts
[
    {
        title: '网站名称', // 请看 a-table 组件说明
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        formData: {
            name: 'name', // 保存字段名
            label: '网站名称', // 名称
            element: 'a-input', // 组件名称
            props: {
                placeholder: '输入网站名称', // 提示文字
            },
            rules: [ // 校验规则
                {
                    required: true, message: '网站名称为必填项', trigger: 'blur',
                },
            ],
        },
    },
]
```

#### formSearch

> 如果columns中的每一项数据包含`formSearch`属性，说明是可以进数据筛选

```ts
[
    {
        title: '网站名称', // 请看 a-table 组件说明
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        align: 'center',
        formSearch: {
            name: 'name', // 表单字段名
            label: '网站名称', // 名称
            element: 'a-input', // 渲染组件
            props: {
                placeholder: '输入网站名称搜索', // 提示文字
            },
        },
    },
    {
        title: '节点类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: {customRender: 'type'},
        formData: {
            name: 'type',
            label: '节点类型',
            element: 'a-select',
            options: [], // 下拉选项值，{name:'',value:''}
            props: {
                placeholder: '选择节点类型',
            },
        },
    },
]
```

### 引入组件

```html

<template>
    <bag-curd-table :form="form" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
    import {defineComponent, reactive} from 'vue'
    import {cloneDeep} from 'lodash'
    import {curdTableHock, initTableHock} from 'vue-bag-admin'
    import columns from './columns'

    export default defineComponent({
        setup() {
            const {tableCurd} = curdTableHock()
            const form = reactive(initTableHock({
                columns, tableCurd, options: {
                    apiPrefix: '/web/leave', // 接口前缀
                },
            }))
            return {
                tableCurd,
                editForm: {...form},
                createForm: {...cloneDeep(form)},
            }
        },
    })
```

### 高级设置

```html

<template>
    <bag-curd-table :form="form" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
    import {defineComponent, reactive, ref} from 'vue'
    import {cloneDeep} from 'lodash'
    import {curdTableHock, initTableHock} from 'vue-bag-admin'
    import columns from './columns'

    export default defineComponent({
        setup() {
            const {tableCurd} = curdTableHock()
            const form = reactive(initTableHock({
                columns, tableCurd, options: {
                    apiPrefix: '/menu',
                    send: false
                },
            }))
            tableCurd.all.handle() // 手动触发请求
            tableCurd.all.beforeSuccess = (res) => {
                tableCurd.tableData = toTree(res); // 或者 return toTree(res) ;
                form.formItem.forEach((item) => {
                    if (item.formData.name === 'pid') {
                        item.formData.treeData = toTree(res) // 设置下拉选项
                    }
                })
            }

            tableCurd.all.search.formItem.forEach((item) => {
                if (item.name === 'url') {
                    setTimeout(() => {
                        item.options = [{name: '测试', value: 1111}] // 异步修改数据也更新的
                    }, 3000)
                }
            })

            tableCurd.create.beforeSubmit = (data) => {
                const _data = {...data}
                console.log('在提交之前，自定义form表单数据')
                return _data;
            }
            return {
                tableCurd,
                editForm: {...form},
                createForm: {...cloneDeep(form)},
            }
        },
    })
</script>
```
