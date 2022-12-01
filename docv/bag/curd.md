# 一键表单

快速实现，表格的增删改查

### 内置表单组件

`a-input`、`a-switch`、`a-textarea`、`a-date-picker` 、`a-select`、`bag-upload-image`、`md-editor`、`a-tree-select`

### 列子

```html

<template>
  <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
    <template #pname="{record}">
      <a-tag class="bag-button-color-green">{{record.pname}}</a-tag>
    </template>
  </bag-curd-table>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { cloneDeep } from 'lodash'
  import { initTableHock, curdTableHock } from 'vue-bag-admin'

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      ellipsis: true,
      align: 'center',
      width: 80,
    },
    {
      title: '组织名称',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      ellipsis: true,
      formData: { // 填写该字段说明需要编辑该字段
        name: 'name',
        label: '组织名称',
        element: 'a-input', // 输入框组件名称
        props: {
          placeholder: '输入组织名称',
        },
      },
    },
    {
      title: '上级名称',
      dataIndex: 'pname',
      key: 'pname',
      ellipsis: true,
      align: 'center',
      _slots: { customRender: 'pname' }, // pname 是插槽名
    },
    {
      title: '上级ID',
      dataIndex: 'pid',
      key: 'pid',
      ellipsis: true,
      align: 'center',
      width: 180,
      _slots: { customRender: 'pid' },
      formData: {
        name: 'pid',
        label: '上级ID',
        element: 'a-select',
        options: [{ name: '宋江', value: '及时雨' }, { name: '林冲', value: '豹子头' }], // 选择项
        props: {
          placeholder: '选择上级ID',
        },
      },
    },
    {
      title: '排序',
      dataIndex: 'order',
      key: 'order',
      ellipsis: true,
      align: 'center',
      width: 80,
      _slots: { customRender: 'order' },
      formData: {
        name: 'order',
        label: '排序',
        element: 'a-input',
        props: {
          placeholder: '输入排序',
        },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center',
      ellipsis: true,
      visible: false, // 不显示该列
      width: 200,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      align: 'center',
      ellipsis: true,
      width: 200,
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      dataIndex: 'action',
      width: 200,
      _slots: { customRender: 'action' },
    },
  ]

  export default defineComponent({
    setup() {
      const { tableCurd } = curdTableHock()
      const form = reactive(initTableHock({
        columns, tableCurd, options: {
          apiPrefix: '/branch',
        },
      }))

      tableCurd.all.beforeSuccess = (res) => {
        form.formItem.forEach((item) => {
          if (item.formData.name === 'pid') {
            item.formData.options = res // 在这里也阔以赋值
          }
        })
      }

      const editForm = cloneDeep(form)
      const createForm = cloneDeep(form)

      return {
        tableCurd,
        editForm,
        createForm,
      }
    },
  })
</script>
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
        slots: { customRender: 'type' },
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
  import { defineComponent, reactive } from 'vue'
  import { cloneDeep } from 'lodash'
  import { curdTableHock, initTableHock } from 'vue-bag-admin'
  import columns from './columns'

  export default defineComponent({
    setup() {
      const { tableCurd } = curdTableHock()
      const form = reactive(initTableHock({
        columns, tableCurd, options: {
          apiPrefix: '/web/leave', // 接口前缀
        },
      }))
      return {
        tableCurd,
        editForm: { ...form },
        createForm: { ...cloneDeep(form) },
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
  import { defineComponent, reactive, ref } from 'vue'
  import { cloneDeep } from 'lodash'
  import { curdTableHock, initTableHock } from 'vue-bag-admin'
  import columns from './columns'

  export default defineComponent({
    setup() {
      const { tableCurd } = curdTableHock()
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
            item.options = [{ name: '测试', value: 1111 }] // 异步修改数据也更新的
          }, 3000)
        }
      })

      tableCurd.create.beforeSubmit = (data) => {
        const _data = { ...data }
        console.log('在提交之前，自定义form表单数据')
        return _data;
      }
      return {
        tableCurd,
        editForm: { ...form },
        createForm: { ...cloneDeep(form) },
      }
    },
  })
</script>
```
