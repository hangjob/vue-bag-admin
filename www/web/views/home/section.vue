<template>
    <div class="section">
        <aside class="banner">
            <el-carousel trigger="click" :autoplay="true" :interval="5000" arrow="always" height="340px">
                <el-carousel-item v-for="item in banners" :key="item">
                    <div class="banner-item">
                        <img class="banner-item-img" :src="item.img" alt="">
                        <div class="banner-item-des">{{ item.text }}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </aside>
        <web-card class="hot" title="热门图集" :more="[{name:'查看更多'}]">
            <template v-slot:body>
                <el-row :gutter="15">
                    <el-col v-for="item in banners" :key="item" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                        <a class="hot-item" href="">
                            <div class="hot-item-inbox"><img :src="item.img" alt=""></div>
                            <h5>{{ item.text }}</h5>
                        </a>
                    </el-col>
                </el-row>
            </template>
        </web-card>
        <web-card class="hot" title="最近更新" :more="[{name:'网络工具'},{name:'媒体工具'},{name:'应用软件'}]">
            <template v-slot:body>
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <article class="article">
                            <div class="article-item" v-for="item in articles" :key="item">
                                <div class="article-item-body">
                                    <div class="article-item-body-left">
                                        <a href=""><img :src="item.img" alt=""></a>
                                    </div>
                                    <div class="article-item-body-right">
                                        <h3>{{ item.title }}</h3>
                                        <div class="intro">{{ item.text }}</div>
                                        <div class="action">
                                            <div class="action-tag hidden-xs-only">
                                                <it-tag :class="todo.class" v-for="todo in item.tag" :type="todo.type"
                                                        filled
                                                        style="margin-right: 5px"
                                                >{{ todo.name }}
                                                </it-tag>
                                            </div>
                                            <div class="action-time"><span>{{ item.time }}</span></div>
                                            <div class="action-user">
                                                <div class="praise hidden-xs-only hidden-sm-and-down">
                                                    <it-icon color="#546173" name="sentiment_satisfied" outlined />
                                                    {{ item.praise }} <span class="hidden-lg-only">点赞</span>
                                                </div>
                                                <div class="comment hidden-xs-only">
                                                    <it-icon color="#546173" name="draw" outlined />
                                                    {{ item.comment }} <span class="hidden-lg-only">评论</span>
                                                </div>
                                                <div class="preview hidden-xs-only">
                                                    <it-icon color="#546173" name="cruelty_free" outlined />
                                                    {{ item.preview }} <span class="hidden-lg-only">浏览</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </el-col>
                </el-row>
            </template>
        </web-card>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import banner1 from '@www/web/assets/image/banner-1.jpg'
import banner2 from '@www/web/assets/image/banner-2.jpg'
import banner3 from '@www/web/assets/image/banner-3.jpg'
import banner4 from '@www/web/assets/image/banner-4.jpg'

const banners = ref([
        { img: banner1, text: '不负光阴就是最好的努力，而努力就是最好的自己' },
        { img: banner2, text: '洁身自好，绝对理智，永远温柔，永远清醒' },
        { img: banner3, text: '别让平凡的生活，耗尽你所有的向往' },
        { img: banner4, text: '没有人可以回到过去，但谁都可以从现在开始' },
    ],
)
const articles = ref([
    {
        img: banner1,
        title: '小可爱，你有男朋友了嘛',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场,今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了.',
        preview: 6732,
        comment: 344,
        praise: 688,
        time: '2022年02月13日',
        tag: [{ name: '你好呀', type: 'primary' }, {
            name: '承蒙遇见',
            type: 'success',
            class: 'hidden-sm-and-down',
        }, { name: '永远年轻', type: 'warning', class: 'hidden-sm-and-down' }],
    },
    {
        img: banner2,
        title: '小生想找个女朋友',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场,今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了.',
        preview: 1732,
        comment: 344,
        praise: 388,
        time: '2022年02月13日',
        tag: [{ name: '你好呀', type: 'primary' }, { name: '永远年轻', type: 'warning', class: 'hidden-sm-and-down' }],
    },
    {
        img: banner3,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }, { name: '永远年轻', type: 'warning', class: 'hidden-sm-and-down' }],
    },
    {
        img: banner4,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }],
    },
    {
        img: banner1,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }],
    },
    {
        img: banner2,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }],
    },
    {
        img: banner3,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }],
    },
    {
        img: banner4,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }],
    },
    {
        img: banner4,
        title: '记录我平时阳光生活',
        text: '陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡，欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场',
        preview: 345,
        comment: 678,
        praise: 6288,
        time: '2022年02月13日',
        tag: [{ name: '承蒙遇见', type: 'success' }],
    },
])
</script>
<style lang="less" scoped>
.section {
    .banner {
        margin-top: var(--yh-margin-top);

        &-item {
            position: relative;
            height: 340px;
            border-radius: 3px;
            width: 100%;
            overflow: hidden;

            &-img {
                object-fit: cover;
                width: 100%;
                transition: all 0.3s;

                &:hover {
                    transform: scale(1.05);
                }
            }

            &-des {
                position: absolute;
                left: 0;
                background: rgba(0, 0, 0, 0.3);
                bottom: 0;
                width: 100%;
                color: var(--yh-text-color-white);
                padding: 10px;
            }
        }
    }

    .hot {
        &-item {
            width: 100%;
            display: block;
            text-decoration: none;

            &-inbox {
                height: 120px;
                overflow: hidden;

                &:hover img {
                    transform: scale(1.1);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: flex;
                    transition: all 0.3s;
                }
            }

            h5 {
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                font-weight: normal;
                padding-top: 15px;
                padding-bottom: 15px;
                color: var(--yh-text-color-brown);
            }
        }
    }

    .article {
        &-item {
            padding: 20px 0;
            border-bottom: 1px solid #efefef;

            &:first-child {
                padding-top: 0;
            }

            &:last-child {
                padding-bottom: 0;
                border-bottom: none;
            }

            &-body {
                display: flex;

                &-left {
                    width: 180px;
                    height: 120px;
                    flex-shrink: 0;
                    margin-right: 15px;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        border-radius: 3px;

                        &:hover {
                            img {
                                transform: scale(1.1);
                            }
                        }

                        img {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            object-fit: cover;
                            transition: all 0.3s;
                        }
                    }
                }

                &-right {
                    position: relative;
                    flex: 1;

                    h3 {
                        font-size: var(--yh-font-size-large);
                        color: var(--yh-text-color-black);

                        &:hover {
                            text-decoration: underline;
                            cursor: pointer;
                            color: var(--yh-text-hover-color-primary);
                        }
                    }

                    .intro {
                        height: 44px;
                        line-height: 22px;
                        color: #828a92;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                    }

                    .action {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        display: flex;
                        align-items: center;
                        width: 100%;

                        &-time {

                        }

                        &-user {
                            display: flex;
                            flex: 1;
                            justify-content: end;
                            align-items: center;

                            > div {
                                display: flex;
                                align-items: center;
                                margin-left: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
