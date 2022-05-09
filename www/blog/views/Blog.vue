<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>博客文章</h1>
            <p>这里是Bag的作者写的一些博文</p>
        </div>
        <div class="article">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(item,index) in items" :key="index">
                    <template v-if="index === 0">
                        <Article :item-data="item" :item-sum-data="items"/>
                    </template>
                    <template v-else>
                        <Article :item-data="item"/>
                    </template>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
import {defineComponent, ref} from 'vue'
import Article from '@www/blog/components/Article.vue'

export default defineComponent({
    components: {
        Article
    },
    setup() {
        const items = ref([
            {pic: 'https://www.vipbic.com/uploads/20200712/3a87b040265a68f19022345d3b0cfea5.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200225/0396857c6dfb3429f6c73a98381d62aa.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200225/8d4c22123e88a73c71ebefff1e4f9b74.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200225/add2c7f093aaddcf5ab68d9c0f6202bd.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200712/3a87b040265a68f19022345d3b0cfea5.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200712/3a87b040265a68f19022345d3b0cfea5.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200225/0396857c6dfb3429f6c73a98381d62aa.jpg'},
            {pic: 'https://www.vipbic.com/uploads/20200225/8d4c22123e88a73c71ebefff1e4f9b74.jpg'},
        ]);
        return {
            items
        }
    }
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;
    text-align: center;

    &-title {
        margin-bottom: 30px;
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
