# 发布于部署

## 构建

项目开发完成之后，可以执行 `npm run build` 命令进行构建，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件

:::info 二级目录部署
如果最终访问地址为域名非根节点，如 https://www.abc.com/app，则需要在 vite.config.ts 中设置 base 选项为
/app/，否则会出现资源引用错误.
:::

## 配置压缩
```bash
pnpm add -D vite-plugin-compression
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        viteCompression({
          threshold: 1024000 // 对大于 1mb 的文件进行压缩
        })
    ],
});

```

## Hash模式

```js{5}
import {createWebHashHistory} from "vue-router"
import {app, framework, plugins, router} from "vue-bag-admin"

framework.use(plugins.useRouterPlugin, {
    history:createWebHashHistory()
})

app.mount('#app')
```

## History模式

```js{5}
import {createWebHistory} from "vue-router"
import {app, framework, plugins, router} from "vue-bag-admin"

framework.use(plugins.useRouterPlugin, {
    history:createWebHistory(),
})

app.mount('#app')
```

#### 二级目录部署

```js{5}
import {createWebHistory} from "vue-router"
import {app, framework, plugins, router} from "vue-bag-admin"

framework.use(plugins.useRouterPlugin, {
    history:createWebHistory('/app/'), // [!code focus]
})

app.mount('#app')
```

#### Vite.config.js配置

```js
export default defineConfig({
    base: '/app/',
});
```

## Nginx配置

::: details 部署单页面Nginx配置
NGINX Config 支持 HTTP、HTTPS、PHP、Python、Node.js、WordPress、Drupal、缓存、逆向代理、日志等各种配置选项。在线生成 Web 服务器
Nginx 配置文件

```nginx configuration
server {
    gzip on;    # 开启gzip
    listen       80;   #监听端口
    server_name  www.abc.com;  #域名信息
    location / {
        root   /home/web/www;   #网站根目录
        index  index.html index.htm;  #默认首页类型
        try_files $uri $uri/  /index.html; # 替代原本常用的rewrite配置方式 功能更强大
        deny 192.168.2.11;   #禁止访问的ip地址，可以为all
        allow 192.168.3.44; #允许访问的ip地址，可以为all
    }
    
    location /api/ {
        rewrite ^/api/(.*)$ /$1 break; # 这个规则会捕获所有以/api/开始的路径，并移除/api部分，然后将剩下的部分作为新的路径。break关键字表示一旦匹配成功就停止进一步处理其他重写规则
        proxy_pass https://www.api.com; # 指定了代理目标，即上游服务器
        proxy_set_header Host $host; # 设置了代理请求时传递给后端服务器的HTTP头部,Host、X-Real-IP、X-Forwarded-For和X-Forwarded-Proto是常用的头部，用于传递客户端信息
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

如果你是二级目录部署

```nginx configuration
server {
    location /app/ { # app 目录名称
        root   /home/web/www/app; #网站根目录
        try_files $uri $uri/ /app/index.html; # 替代原本常用的rewrite配置方式 功能更强大
    }
}
```

[在线可视化nginx配置](https://www.digitalocean.com/community/tools/nginx?domains.0.routing.index=index.html&domains.0.routing.fallbackHtml=true&global.app.lang=zhCN)
:::
