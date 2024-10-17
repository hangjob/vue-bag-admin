<template>
    <section class="section section-container">
        <div class="section-title">
            <h1 class="text-[50px] font-bold">博客文章</h1>
            <p class="text-[#808080] mb-10">这里是Bag的作者写的一些博文</p>
        </div>
        <div class="article">
            <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
                <template v-for="(item,index) in compData.items">
                    <n-grid-item class="wow animate__animated animate__zoomIn" span="12 m:4 l:3"
                                 data-wow-duration="1.0s"
                                 :data-wow-delay="index/8+'s'">
                        <Article :itemData="item" :itemSumData="item.itemSumData"/>
                    </n-grid-item>
                </template>
            </n-grid>
        </div>
    </section>
</template>
<script setup>
import Article from '@/blog/components/Article.vue'

const items = [
    {
        pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
        title: '终究是什么样的生活才能配到合适的人',
        keywords: ['生活乐趣', '新市古镇'],
        category: {
            name: '技术'
        },
        member: {
            username: '信息'
        },
        time: '2023-11-02',
        itemSumData: []
    },
    {
        pic: 'https://www.vipbic.com/uploads/20240310/f5db81efe20e314a6f2f6525553c43c3.jpg',
        title: '终究是什么样的生活才能配到合适的人',
        keywords: ['新市古镇'],
        category: {
            name: '生活乐趣'
        },
        member: {
            username: '羊先生'
        },
        time: '2024-03-10',
        url: 'https://www.vipbic.com/thread.html?id=800'
    },
    {
        pic: 'https://www.vipbic.com/uploads/20240413/7296c5af4c3d49fce47a29ba7db5d866.jpg',
        title: '30岁的年纪该何去何从',
        keywords: ['生活乐趣'],
        category: {
            name: '三十岁'
        },
        member: {
            username: ''
        },
        time: '2023-11-02',
        url:'https://www.vipbic.com/thread.html?id=801'
    },
    {
        pic: 'https://www.vipbic.com/uploads/20231111/9d3f37a78688be3dbe9a55ba174f1d82.jpg',
        title: '一个人-一座城，一个人做了很多事',
        keywords: ['生活乐趣'],
        category: {
            name: '写字'
        },
        member: {
            username: '羊先生'
        },
        time: '2023-11-11',
        url:'https://www.vipbic.com/thread.html?id=788'
    },
    {
        pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
        title: '两点一线的生活',
        keywords: ['生活乐趣'],
        category: {
            name: '大姐'
        },
        member: {
            username: '羊先生'
        },
        time: '2024-01-30',
        url:"https://www.vipbic.com/thread.html?id=795"
    },
    {
        pic: 'https://www.vipbic.com/uploads/20240110/33c50ac15376d0518dbbf881a51ab2e1.jpg',
        title: '关于《严选工具》的由来',
        keywords: ['生活乐趣'],
        category: {
            name: '严选工具'
        },
        member: {
            username: '羊先生'
        },
        time: '2024-01-10',
        url:'https://www.vipbic.com/thread.html?id=792'
    },
    {
        pic: 'https://www.vipbic.com/uploads/20230911/350a459094e011a812c0bcf011cf2729.jpg',
        title: '穷人的孩子成熟，只能用时间成本去试错',
        keywords: ['生活乐趣'],
        category: {
            name: '时间'
        },
        member: {
            username: '羊先生'
        },
        time: '2023-09-11',
        url:'https://www.vipbic.com/thread.html?id=780',
    },
    {
        pic: 'https://www.vipbic.com/uploads/20230826/28da20efd455f88002fa5c6bd6302d9b.jpg',
        title: '30岁还单身，应该怎么办？',
        keywords: ['生活乐趣'],
        category: {
            name: '拼了很久很久'
        },
        member: {
            username: '羊先生'
        },
        time: '2023-11-02',
        url:"https://www.vipbic.com/thread.html?id=785"
    },
]

const imgs = items.map(item => {
    return {pic: item.pic}
})
items[0].itemSumData = imgs;
const compData = reactive({
    items
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
