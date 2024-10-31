# 常见问题

## 文件多层次该如何？

```javascript
const files = import.meta.glob(`@/app/views/*/**/*.vue`, {eager: true})
```
