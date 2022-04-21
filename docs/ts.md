### 全局变量

> 避免在ts环境中使用全局变量编辑提示异常

在`typings`目录下

```ts
export {}
declare global {
    declare interface Window {
        __app__: any;
        $: any;
        less: any;
        WinBox: any;
        Player: any;
        utils: any;
    }
}
```
