# 上线部署

Vue-Bag-Admin 分成前端宿主应用和后端 API。仓库默认带一套 Strapi 5 后端，所以部署时也分两段看：先前端，再后端。

## 1. 前端部署

前端由 Vite 打成静态文件，放到 Nginx 或其他静态服务器上就能跑。

### 构建静态文件

在项目的根目录执行：

```bash
# 只构建后台管理系统前端
pnpm --filter admin build
```

构建完成后，`apps/admin/dist` 里会生成 HTML、CSS 和 JS 文件。

### Nginx 部署配置

将 `dist` 目录下的内容上传到你的服务器（例如放到 `/usr/share/nginx/html/admin`）。

Vue-Bag-Admin 默认使用 Vue Router 的 **History 模式**。Nginx 需要把找不到的前端路径回退到 `index.html`，不然在非根路径刷新页面会 404。

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 前端静态文件目录
    root /usr/share/nginx/html/admin;
    index index.html;

    location / {
        # History 模式配置：找不到文件时默认指向 index.html
        try_files $uri $uri/ /index.html;
    }

    # （可选）配置 API 代理，解决跨域问题
    location /api/ {
        proxy_pass http://127.0.0.1:1337/; # 代理到你的后端地址
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 2. 后端部署 (Strapi)

如果你使用的是本项目自带的 Strapi 5 服务，部署步骤如下。

### 准备环境

服务器上先准备好这些：

- Node.js (v24.4.1 或更高版本)
- MySQL 8.0+ 数据库
- PM2 (`npm install -g pm2`)

### 生产环境构建

在根目录或者 `apps/strapi` 目录中，执行构建命令：

```bash
# 进入后端目录
cd apps/strapi

# 构建 Strapi
pnpm build
```

### 配置环境变量

在服务器的 `apps/strapi` 目录下，创建一个 `.env` 文件，填入生产环境的配置：

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys_here # 生成几段随机字符串，用逗号隔开
API_TOKEN_SALT=your_api_salt_here
ADMIN_JWT_SECRET=your_admin_jwt_here
TRANSFER_TOKEN_SALT=your_transfer_salt_here

# 数据库配置
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=vue_bag_admin_prod
DATABASE_USERNAME=root
DATABASE_PASSWORD=your_password
```

### 使用 PM2 启动服务

用 PM2 启动 Node.js 进程，服务崩溃后会自动重启：

```bash
# 启动 Strapi 服务，并命名为 "pm-backend"
pm2 start npm --name "pm-backend" -- run start

# 保存 PM2 进程列表，以便开机自启
pm2 save
```

跑完后重点看两处：

- 前端非根路径刷新不会 404
- Strapi 进程在 `pm2 list` 里处于 online
