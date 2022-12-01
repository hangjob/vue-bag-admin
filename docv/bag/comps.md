# 内置组件

提供些基础内容组件，方便视觉感官统一

## bag-card

```html

<bag-card class="hot" :loading="loading" title="推荐资讯">
  <template v-slot:title>标题</template>
  <template v-slot:body>
    <ul class="list">
      <li v-for="(item,idx) in items" :key="idx">
        <span>{{ idx + 1 }}.</span>
        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻，</a>
      </li>
    </ul>
  </template>
</bag-card>
```

### props

|  属性      |      说明     |  默认 |
| :---------| :-----------: | :----: |
| loading     | 是否有加载状态  | false |
| class     |   添加自定义class    |    |

### slot

`title`,`body`，支持两个插槽

## bag-view

普通页面添加

```html

<bag-view>
  <div>
    <a href="">你好呀，承蒙遇见，三生有幸，永远年轻，</a>
  </div>
</bag-view>
```

### slot

`action`,`默认插槽`，支持两个插槽

## bag-iconfon

icon组件

```html

<bag-iconfon :class="className"></bag-iconfon>
```

## bag-upload-image

图片裁剪上传组件

```html

<bag-upload-image :fixedBox="false"
                  :autoCropWidth="500"
                  :autoCropHeight="500"
                  :isFileMore="false"
                  v-model:image="image"
></bag-upload-image>
```

### props

|  属性      |      说明     |  默认 |
| :---------| :-----------: | :----: |
| image     | 图片地址  |  |
| fileSize     |   图片最大值    |  512kb |
| fixedBox     |   固定截图框大小 不允许改变    | false   |
| autoCropWidth |     默认生成截图框宽度    |  850  |
| autoCropHeight |   默认生成截图框高度    |  350  |
| isFileMore    |   多图预览    |  true  |

