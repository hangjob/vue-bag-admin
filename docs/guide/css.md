# 原子化Css

> [!IMPORTANT] CSS
> 原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名

框架内部UI布局使用的是[tailwindcss官网](https://tailwindcss.com/)，一个工具优先的 CSS 框架，包含 flex, pt-4, text-center 和
rotate-90 等类，可以直接在你的标记中构建任何设计，在开发的过程中，我也推荐你使用它。

## 安装

```bash
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js

```javascript
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## 新建的`tailwind.css`文件

在main.js引入这个文件，并且里面的内容如下

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 使用

```vue

<button class="bg-sky-500 hover:bg-sky-700 ...">
Save changes
</button>
```

