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

const compData = reactive({
    items: [
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
            itemSumData: [
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
                { pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg'},
            ]
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },
        {
            pic: 'https://www.vipbic.com/uploads/20240420/a5867d4089a7c3de9ac39503195d7597.jpg',
            title: '管理系统',
            keywords: ['品茗科技'],
            category: {
                name: '技术'
            },
            member: {
                username: '信息'
            },
            time: 1728980006,
        },

    ]
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
