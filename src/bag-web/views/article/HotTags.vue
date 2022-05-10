<template>
    <div class="HotTags">
        <div class="HotTags-head">
            <h4>热门标签</h4>
        </div>
        <div class="tags">
            <a href="">前端</a>
            <a href="">文档</a>
            <a href="">Vue</a>
            <a href="">在线工具</a>
            <a href="">UI框架</a>
            <a href="">字体下载</a>
            <a href="">Vue</a>
            <a href="">在线工具</a>
            <a href="">Windows</a>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    setup() {

    }
})
</script>
<style lang="less" scoped>
.HotTags {
    background-color: var(--bag-color-white);
    padding: 15px 15px 5px 15px;
    margin-top: 20px;
    &-head {

    }

    .tags {
        margin-top: 10px;
        a {
            color: #fff;
            margin: 0 10px 10px 0;
            font-size: 13px;
            padding: 3px 8px;
            border-radius: 3px;
            opacity: .75;
            background-color: #ff6464;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
        }
    }
}
</style>
