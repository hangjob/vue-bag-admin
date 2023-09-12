<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>博客文章</h1>
            <p>这里是Bag的作者写的一些博文</p>
        </div>
        <div class="article">
            <n-grid cols="24" x-gap="10"  y-gap="30" item-responsive responsive="screen">
                <n-grid-item span="24 m:12 l:6" class="wow animate__animated animate__zoomIn" data-wow-duration="1.0s"
                        :data-wow-delay="index/8+'s'"
                        v-for="(item,index) in items" :key="index"
                >
                    <template v-if="index === 0">
                        <BagArticle :item-data="item" :item-sum-data="items"/>
                    </template>
                    <template v-else>
                        <BagArticle :item-data="item"/>
                    </template>
                </n-grid-item>
            </n-grid>
        </div>
    </section>
</template>
<script>
import {defineComponent, ref} from "vue"
import BagArticle from "@/app/web/components/Article.vue"
import {v1IndexArticle} from "@/app/web/service"

export default defineComponent({
    components: {
        BagArticle,
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
            margin-bottom: 10px;
        }
    }

    .action {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
}
</style>
