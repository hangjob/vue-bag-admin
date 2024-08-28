# 发布于部署

### 构建

项目开发完成之后，可以执行 `npm run build` 命令进行构建，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件

:::info 二级目录部署
如果最终访问地址为域名非根节点，如 https://www.abc.com/app，则需要在 vite.config.ts 中设置 base 选项为
/app/，否则会出现资源引用错误.
:::

### hash模式


### history模式

```nginx configuration
# nginx配置
location /app/ {
	try_files $uri $uri/  /app/index.html;
}
```
