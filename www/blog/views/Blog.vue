<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>博客文章</h1>
            <p>这里是Bag的作者写的一些博文</p>
        </div>
        <div class="article">
            <el-row :gutter="20">
                <el-col class="wow animate__animated animate__zoomIn" data-wow-duration="1.0s"
                        :data-wow-delay="index/8+'s'"
                        :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(item,index) in items" :key="index"
                >
                    <template v-if="index === 0">
                        <Article :item-data="item" :item-sum-data="items" />
                    </template>
                    <template v-else>
                        <Article :item-data="item" />
                    </template>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Article from '@www/blog/components/Article.vue'
import { v1IndexArticle } from '@www/blog/service'

export default defineComponent({
    components: {
        Article,
    },
    setup() {
        const items = ref([])
        v1IndexArticle().then((res) => {
            items.value = res.data
        })
        return {
            items,
        }
    },
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;

    &-title {
        margin-bottom: 30px;
        text-align: center;

        h1 {
            font-size: 50px;
            font-weight: bold;
        }
    }

    .action {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
}
</style>
