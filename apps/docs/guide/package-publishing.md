# 发包流程

这页把发包这件事直接拆成命令。临时想不起该跑什么时，看这里就够了。

当前仓库对外的发包对象主要有三类：

- `vue-bag-admin`：宿主运行时主包
- `@bag/plugin-shop`：官方商城示例插件
- `@bag/plugin-sys-setting`：官方系统设置示例插件

## 先确认边界

先把角色分清，不然后面很容易发混：

- `vue-bag-admin` 只负责聚合宿主运行时、请求层、UI 层和协议层
- `@bag/plugin-*` 保持独立业务插件包，单独版本化、单独发布
- 使用方接入时，默认是先装 `vue-bag-admin`，再按需装插件包

所以主包和插件包要分开发布，不是一条命令全包。

## 发布前检查

正式发之前，先过一遍这几步：

1. 确认版本号已经更新
2. 在根目录执行一次依赖安装
3. 先跑构建，确认产物能正常生成
4. 优先跑 `dry-run`，确认发布内容和文件列表
5. 再执行正式 `publish`

根目录安装依赖：

```bash
pnpm install
```

## 主包：vue-bag-admin

### 只构建

```bash
pnpm --filter vue-bag-admin build
```

这条命令会先把它依赖的内部包构建出来，然后再生成 `packages/vue-bag-admin/dist`。

### 本地打包成 tgz

如果你想先看看最终包里到底会带什么，或者想丢一个 tarball 给外部项目试装，直接跑这个：

```bash
pnpm run pack:vue-bag-admin
```

执行后会在 `packages/vue-bag-admin` 下生成类似 `vue-bag-admin-6.0.0.tgz` 的文件。

### 模拟发布

这一步不会真正上传，只是先把最终发布内容过一遍：

```bash
pnpm run release:dry-run:vue-bag-admin
```

### 正式发布

```bash
pnpm run release:vue-bag-admin
```

## 插件包：@bag/plugin-shop

### 构建

```bash
pnpm --filter @bag/plugin-shop build
```

### 本地打包成 tgz

```bash
pnpm --dir packages/plugin-shop pack
```

### 模拟发布

```bash
npm publish ./packages/plugin-shop --access public --dry-run
```

### 正式发布

```bash
npm publish ./packages/plugin-shop --access public
```

## 插件包：@bag/plugin-sys-setting

### 构建

```bash
pnpm --filter @bag/plugin-sys-setting build
```

### 本地打包成 tgz

```bash
pnpm --dir packages/plugin-sys-setting pack
```

### 模拟发布

```bash
npm publish ./packages/plugin-sys-setting --access public --dry-run
```

### 正式发布

```bash
npm publish ./packages/plugin-sys-setting --access public
```

## 常见发布顺序

如果这次同时动了主包和插件，稳一点的顺序是：

1. 先发布 `vue-bag-admin`
2. 再发布依赖它的 `@bag/plugin-*`
3. 再用外部项目做一次安装验证

可以按下面的顺序走一遍：

```bash
pnpm --filter vue-bag-admin build
pnpm --filter @bag/plugin-shop build
pnpm --filter @bag/plugin-sys-setting build

pnpm run release:dry-run:vue-bag-admin
npm publish ./packages/plugin-shop --access public --dry-run
npm publish ./packages/plugin-sys-setting --access public --dry-run
```

`dry-run` 看完没问题，再执行正式发布。

## 发包后怎么验证

发完以后，最好补一次真实验证。常用就两种：

- 用 `pack` 生成的 `.tgz` 在一个临时项目里安装验证
- 在外部使用方项目里把依赖版本切到刚发出的版本，再跑一次 `pnpm install && pnpm build`

如果你平时主要靠 `link:` 联调，这一步更别省。`link:` 能跑，不代表真正从 npm 装下来也一定没问题。

## 后面可以补的脚本

现在根目录已经有主包的发布脚本了，但两个插件包还是手动 `npm publish`。

如果后面你准备频繁发布插件，可以把这些脚本也补到根目录，例如：

- `pack:plugin-shop`
- `pack:plugin-sys-setting`
- `release:dry-run:plugin-shop`
- `release:dry-run:plugin-sys-setting`
- `release:plugin-shop`
- `release:plugin-sys-setting`

这样后面谁来维护，都不用再反复切目录找命令。
