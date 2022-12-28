# 方法说明

## initCurd

> 生成一CURD份默认配置属性

```typescript
import initCurd from 'vue-bag-admin'

const defaultCurdTable = initCurd()
```

#### 属性说明

```javascript
const curdTable = {
    apiPrefix: '', // 请求前缀，curd
    $tableAttrs: { // a-table 组件的 $attrs ，继承所有属性和事件 https://antdv.com/components/table-cn#Table
        bordered: true,
        pagination: false,
        loading: false,
        rowKey: 'id',
        size: 'middle',
        scroll: { x: '1200px' },
        ...
    },
    $cModalAttrs: {  // a-modal 继承所有属性和事件 新增  https://antdv.com/components/modal-cn#API
        title: '新增',
        visible: false,
        width: '85%',
        maskClosable: false,
        ...
    },
    $eModalAttrs: {  // a-modal 继承所有属性和事件 编辑 https://antdv.com/components/modal-cn#API
        title: '编辑',
        visible: false,
        width: '85%',
        ...
    },
    $pageAttrs: { // a-pagination 组件的 $attrs ，继承所有属性和事件 https://antdv.com/components/pagination-cn
        current: 1,
        defaultPageSize: 10,
        total: 0,
        ...
    },
    all: {// 查询数据
        api: '',// 接口地址
        beforeRequest: null,// 请求成功之前 函数
        afterRequest: null,// 请求成功之后 函数
        isPage: false, // 是否开启分页
        isEmpty: true, // 请求接口时，是否过滤 空 null  undefined 的属性
    },
    create: { // 新增
        api: '',// 接口地址
        formItem: [], // 表单的每一项
        formState: {}, // 表单的formState值
        beforeRequest: null,// 请求成功之前
        afterRequest: null,// 请求成功之后
        isEmpty: false, // 请求接口时，是否过滤 空 null  undefined 的属性
    },
    edit: { // 编辑
        api: '',// 接口地址
        row: {
            record: {},// 当前行的数据
        },
        formItem: [],// 表单的每一项
        formState: {},// 表单的formState值
        beforeRequest: null,// 请求成功之前
        afterRequest: null,// 请求成功之后
        isEmpty: false, // 请求接口时，是否过滤 空 null  undefined 的属性
    },
    detail: { // 详情
        api: '', // 接口地址
        beforeRequest: null,// 请求成功之前
        afterRequest: null,// 请求成功之后
        isRequest: true, // 是否请求渲染编辑的数据，
        isEmpty: false, // 请求接口时，是否过滤 空 null  undefined 的属性
    },
    delete: { // 删除
        api: '', // 接口地址
        row: {
            record: {}, // 当前行的数据
        },
        beforeRequest: null,// 请求成功之前
        afterRequest: null,// 请求成功之后
        isEmpty: false, // 请求接口时，是否过滤 空 null  undefined 的属性
    },
    deletes: {// 删除多个
        api: '', // 接口地址
        beforeRequest: null,// 请求成功之前
        afterRequest: null,// 请求成功之后
        selectedRowKeys: [], // 批量选择的数据
        isEmpty: false, // 请求接口时，是否过滤 空 null  undefined 的属性
    },
    refreshTable // 刷新表格 方法 
}
```

## createTableHock

> 处理默认属性和用户自定义的，生成完成配置，响应数据，支持三个参数`columns`,`curdTable`,`options`

```javascript
import { createTableHock } from 'vue-bag-admin'
```

#### 参数

|  参数   | 说明  |
|  ----  | ----  |
| columns  | 配置单元格的列数，搜索表单、新增、编辑的表单 |
| curdTable  | 通过initCurd()参数生成属性 |
|options|配置附加功能|

### columns

> 遵循ant-design-vue表格设计的Column属性和方法，[https://antdv.com/components/table-cn#Column](https://antdv.com/components/table-cn#Column)

```javascript
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        width: 200,
        ...
    }
]
```

#### columns.curd、columns.curdSearch

```javascript
const columns = [
    {
        title: '关键词',
        dataIndex: 'name',
        ellipsis: true,
        align: 'center',
        width: 200,
        curd: { // 该属性代表的是新增和编辑
            el: 'a-input', // 配置该属性的时候说明，说明在新增或者编辑的时候，出现一个编辑字段，渲染方式对应的ant-design-vue的表单组件名称
            $formItemAttrs: { // 表单组件 a-form-item 的属性的和方法 https://antdv.com/components/form-cn
                autoLink: false,
                label: '关键词',
                name: 'name',
                rules: [{ required: true, message: '输入关键词' }],
            },
            slot: { // 如果配置该插槽了， 并且 el 属性为空，那么此刻当做个插槽渲染
                name: 'curdPname', // 插槽名字
            },
            $colAttrs: { // a-col 组件 的属性和方法 https://antdv.com/components/grid-cn#API
                xs: 24,
                sm: 24,
                md: 24,
                lg: 24,
                xl: 24,
            },
            $elAttrs: { placeholder: '输入关键词', value: '' }, // el 所对应的表单组件的 的属性的和方法 https://antdv.com/components/form-cn
        },
        curdSearch: { // 该属性代表的搜索
            el: 'a-input', // 配置该属性的时候说明，说明在新增或者编辑的时候，出现一个编辑字段，渲染方式对应的ant-design-vue的表单组件名称
            slot: { // 如果配置该插槽了， 并且 el 属性为空，那么此刻当做个插槽渲染
                name: 'curdPname', // 插槽名字
            },
            $formItemAttrs: { label: '用户名', name: 'name' }, // 表单组件 a-form-item 的属性的和方法 https://antdv.com/components/form-cn
            $elAttrs: { placeholder: '输入用户名', value: '' }, // el 所对应的表单组件的 的属性的和方法 https://antdv.com/components/form-cn
        }
    }
]
```
