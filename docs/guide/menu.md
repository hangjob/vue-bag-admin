# 接口说明

## 用户信息

### api替换
在实际业务中，可能的你用户信息接口不叫做userInfo
```javascript
createApp(App).use(install, {
    apis:{
        "/userInfo ":"/custom/userInfo",  // userInfo 是系统里面的  /custom/userInfo 换成你自己的
        "/menus":"...."
    }
}).use(router).mount("#app")
```

基础框架实现菜单动态加载，接口是`/api/userInfo`

```javascript
export default {
	url: "/userInfo",
	method: "post",
	response: () => {
		return {
			code: 1,
			data: {
				username: "管理员", // 名称
				permission: ["sys:permission:admin", "sys:permission:web"] // 权限控制
			}
		}
	}
}
```

## 菜单配置

基础框架实现菜单动态加载，接口是`/api/menus`

```javascript
export default {
    url: "/menus",
    method: "post",
    response: () => {
        return {
            code: 1,
            data: [
                {
                    "id": "", // 唯一值
                    "title": "",  // 显示名称
                    "icon": "", // 图标
                    "shows": true, // 是否显示
                    "path": "", // 路由
                    "order": 1, // 排序 倒序
                    "pid": "", // 父级ID，会自动解析树结构
                    "file": "", // 文件路径
                    "isIframe": false, // 是否嵌套打开
                    "url": "", // 外链url
                    "keepAlive": false, // 是否缓存
                    "tabHidden": false, // 是否隐藏tab
                    "tabFix": false, // 是否固定菜单
                    "httpFile": "" // 网络文件
                }
            ]
        }
    }
}
```
