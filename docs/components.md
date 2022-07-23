### bag-card

> 布局卡片组件

###### props

```js
const props = {
    loading: {
        type: Boolean,
        default: false
    },
    class: {
        type: String || null,
        default: null
    }
}
```

### bag-curd-table

> 一键CURD组件，使用详见[一键表单](/curd.md)

### bag-upload-image

> 图片上传裁剪组件

###### props
```ts
const props = {
    image: {
        type: String,
        default: '', // 绑定的值
    },
    fileSize: {
        type: Number,
        default: 512, // 最大上传512kb
    },
    fixedBox: {
        type: Boolean,
        default: false,// 截图框固定大小
    },
    autoCropWidth: {
        type: Number,
        default: 850, // 裁剪框宽度
    },
    autoCropHeight: {
        type: Number,
        default: 350, // 裁剪框高度
    },
}
```

###### 用法
```html
<bag-upload-image v-model:image="image"></bag-upload-image>
<script lang="ts" setup>
    const image = ref('')
</script>
```
