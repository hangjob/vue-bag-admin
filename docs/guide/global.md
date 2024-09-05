# 全局扩展

在框架内部已经扩展了一下属性，可以直接使用

```javascript
const ctx = new Framework({
    app, // vue对象
    pina,// pina状态管理
    helpers, // 工具函数
    radash, //  前端工具库 https://www.radash.wiki/
    hooksPlus, // vue-hooks-plus https://inhiblabcore.github.io/docs/hooks/
    dayjs, // 时间插件
    http, // 请求封装 https://alova.js.org/
    nprogress, // 进度条
});
// ctx['extend'] = 'xxx' // 可以这样扩展，贯穿整个框架
```

## [Radash官网](https://www.radash.wiki/)

Radash，最好用的前端工具库，是一个零依赖、模块化、高性能的 JS/TS 实用工具库

## [HooksPlus官网](https://inhiblabcore.github.io/docs/hooks/)

基础和高级的 hook， 高性能逻辑的抽象封装，满足大量场景，简洁的语法和易用的特性，轻松上手，详细的文档

## [Alova官网](https://alova.js.org/)

工作流精简的 ，下一代请求工具 ，极致地简化你的API集成工作流，仅需一步

## [Day.js官网](https://day.js.org/zh-CN/)

Day.js 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样

