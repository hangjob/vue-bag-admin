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
>如果columns中的每一项数据包含`formData`属性，说明是可以添加或者编辑
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
>如果columns中的每一项数据包含`formSearch`属性，说明是可以进数据筛选
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
]
```
### 引入组件

```html
<template>
    <bag-curd-table :form="form" :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {formHock,tableHock} from 'vue-bag-admin'
import columns from './columns' // 请看columns.js

export default defineComponent({
    setup() {
        const {tableCurd} = tableHock()
        const form = reactive(formHock({columns}))
        tableCurd.apiPrefix = '/web/website'
        tableCurd.all.handle() // 执行数据请求
        tableCurd.columns = columns.filter((item) => item.visible !== false) // 过滤表格不需要展示的列
        columns.filter(item => item.formSearch).map((item: any) => {
            // 设置需要表单的搜索的字段
            tableCurd.all.search.formState[item.formSearch.name] = item.formSearch.props?.defaultValue || ''
            tableCurd.all.search.formItem.push(item.formSearch)
        })
        tableCurd.all.search.formItem.forEach((item) => {
            if (item.name === 'url') {
                setTimeout(() => {
                    item.options = [{name: '测试', value: 1111}] // 异步修改数据也更新的
                }, 3000)
            }
        })
        return {
            tableCurd,
            columns: columns.filter((item) => item.visible !== false),
            form,
        }
    },
})
</script>
```
