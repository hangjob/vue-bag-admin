# 按钮权限

> 按钮权限和菜单绑定在一起，在菜单下设置按钮的属性，即可实现按钮根据不同的菜单的返回不同的按钮。菜单权限是跟角色绑定

### 配置

> 在用户接口`/user/userinfo`,数据返回，数据接口如下

```javascript
const res = {
    code: 1,
    data: {
        ...,
        rolesDetail: { // 需要有这一个属性
            btns: [{
                mid: 3,
                btn: [{ name: '删除', tag: 'del' }, { name: '编辑', tag: 'edit' }, { name: '新增', tag: 'create' }, ...]
            }],
            menus: [{ id: 3, name: '测试页', ... }]// 菜单信息
        }
    }
}
```

##### 系统配置默认按钮

```javascript
curdTable.btns = [
    {
        name: '刷新',
        type: 'primary',
        tag: 'refresh',
        effect: 1,
        role: true,
    },
    {
        name: '新增',
        type: 'primary',
        class: 'bag-button-color-green',
        tag: 'create',
        effect: 1,
        role: true,
    },
    {
        name: '删除',
        type: 'primary',
        danger: true,
        tag: 'del',
        effect: 1,
        role: true,
    },
    {
        name: '数据导出',
        type: 'primary',
        tag: 'export',
        effect: 2,
        role: true,
    },
    {
        name: '表格大小',
        type: 'primary',
        effect: 2,
        tag: 'size',
        class: 'bag-button-color-green',
        role: true,
    },
    {
        name: '编辑',
        type: 'primary',
        tag: 'edit',
        effect: 3,
        role: true,
    },
    {
        name: '删除',
        type: 'primary',
        danger: true,
        tag: 'del',
        effect: 3,
        role: true,
    },
]
```

继承andt组件按钮的所有属性和方法[https://antdv.com/components/button-cn#API](https://antdv.com/components/button-cn#API)

| 参数 | 说明 |
| ------------- | :-----------: |
| name | 按钮名字 | 
| type | andt组件的type值 |
| danger | andt组件的danger值 | 
| tag | 标识符 | 
| effect | 位置,1左上方,2右上方,3表格 | 
| role | 是否开启权限控制 |

#### 自定义添加按钮

```javascript
const defaultCurdTable = initCurd()
defaultCurdTable.btns.push(
    {
        name: '测试123',
        type: 'primary',
        click: () => {
            alert('测试123')
        },
        role: true,
        effect: 1,
    },
    {
        name: '测试456',
        click: () => {
            alert('测试456')
        },
        effect: 1,
    },
)
```
