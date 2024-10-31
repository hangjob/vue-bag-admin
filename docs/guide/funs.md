# 全局方法

## 递归遍历树形结构

depthForEach

```javascript
depthForEach([], Function, children = 'children')
```

## 构建树形结构

buildTree 根据id 和pid 构建树形结构

```javascript
buildTree([], id, pid)
```

## 添加动态路由

addRoutes

```javascript
addRoutes(ctx, [])
```

## 获取加密的密钥

getCrypto

```javascript
getCrypto({iv, key})
```

## 对称加密

encrypt

```javascript
encrypt(str, iv, key)
```

## 对称解密

encrypt

```javascript
decrypt(str, iv, key)
```

## 去除重复的斜杠

removeRepeatBias

```javascript
removeRepeatBias(str, false) // 如果传入代表是链接地址
```

## 复制文本

clipboardCopy

```javascript
clipboardCopy(str)
```

## 消除浏览器报错

browserPatch， 解决浏览器事件报错行为，在入口文件调用即可

```javascript
browserPatch()
```

## 深度克隆

deepClone

```javascript
deepClone(obj)
```

## 深度合并

deepMerge

```javascript
deepMerge(target, source)
```

## 不刷新添加参数到URL

addParamsToUrl

```javascript
addParamsToUrl(url, params)
```
