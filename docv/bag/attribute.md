# 属性说明

### tableCurd

```javascript
  import { curdTableHock } from 'vue-bag-admin'
```

`tableCurd`通过 curdTableHock 函数派生出来，包含`all`,`detail`,`edit`,`create`等等属性

### createForm

```javascript
  import { curdTableHock } from 'vue-bag-admin'
```

`createForm` ， `editForm` 通过 curdTableHock 函数派生出来，返回的数据，作为添加、编辑的支撑

```javascript
 const form = reactive(initTableHock({
    columns, tableCurd, options: {
        apiPrefix: '/branch', // 增删改查的 接口的前缀
        send: false, // 是否自动挂载执行
    },
}))
```

`columns`为表格的列，`options`为附带参数

### columns

具体请看代码实际列子用法

### 钩子函数

```javascript
tableCurd.create.beforeSubmit = (formState) => {
    return formState // 返回在提交之前的表单值，可以通过返回新的表单值实现数据提交
}

tableCurd.all.beforeEach = (formStat, pagination) => {
    return { formState, pagination } // 在发送请求之前，可以通过返回新的数据值
}

tableCurd.all.beforeSuccess = (res) => {
    return res // 在数据返回之后，可返回组装的之后的新数据
}

tableCurd.edit.beforeSubmit = (formState) => {
    return formState // 返回在提交之前的表单值，可以通过返回新的表单值实现数据提交
}

tableCurd.delete.beforeSubmit = (formState) => {
    return formState // 返回在提交之前的表单值，可以通过返回新的表单值实现数据提交
}

tableCurd.deletes.beforeSubmit = (formState) => {
    return formState // 返回在提交之前的表单值，可以通过返回新的表单值实现数据提交
}

tableCurd.detail.beforeEach = (formStat) => {
    return formState // 在发送请求之前，可以通过返回新的数据值
}
```
