<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>评价</h1>
            <p>以下内容来自于Bag用户对于本博客系统的评价.</p>
        </div>
        <n-grid cols="24" x-gap="10"  y-gap="30" item-responsive responsive="screen">
            <n-grid-item span="24 m:12 l:8" v-for="(item,idx) in items" :key="idx">
                <div class="feedback-bok">
                    <div class="describe">
                        {{ item.message }}
                    </div>
                    <div class="client">
                        <n-icon color="#e96656" size="30">
                            <FastFood/>
                        </n-icon>
                        <div class="client-info">
                            <h6>{{ item.name }}</h6>
                            <p>{{ item.url ? item.url : item.createTime }}</p>
                        </div>
                        <div class="client-head">
                            <img src="@/packages/assets/logo-min.png" alt="">
                        </div>
                    </div>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script lang="ts" setup>
const items = [
    {
        name: "听雨闻风",
        createTime: "2022-09-17 13:17:25",
        message:
            "“我是个拥有梦想技术小白，但是网络坑太多，别人分享的源码都是残次品，完整的都要收费！于是我在Github搜索，终于我找到了我想要的里vue-bag-admin开源博客系统，这款系统非常好，界面非常美观，最主要的的是，作者也非常nice，不收费。于是我快速搭建了一个属于自己的lcm博客，心里的酸爽！不过还是有点缺陷，我相信作者君会好好完善的！加油Bag，良心的系统！.”"
    },
    {
        name: "昏睡的冥王星",
        createTime: "2022-03-23 09:13:23",
        message:
            "用起来还不错，简介的风格，不懂得地方阔以问作者。他都会耐心解答（一般的都说“问管理”）@羊先生 真的是很不错的人，反正推荐大家一定要试下这个程序，不然真的后悔。"
    },
    {
        name: "KenCoding",
        createTime: "2022-06-23 18:45:47",
        message: "在第一款使用的时候，需要自己做搭建表单还是自己写代码，后来作者用了模板配置化表单，很轻松的就能开发一个网页，作者之前是用thinkphp在写，后来用egg在写后端，前端技术的使用vue3+vite+ts构建，风格漂亮简单，功能齐全"
    },
]

</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #dbbf56;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
        margin-bottom: 40px;
    }

    h1 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .feedback-bok {
        background: #FFFFFF;
        padding: 25px;
        margin: 13px;
        text-align: left;
        border-radius: 4px;
        box-shadow: none;
        display: flex;
        z-index: 5;
        color: #333;
        flex-direction: column;

        .describe {
            font-size: 15px;
            color: #909090;
            line-height: 1.6;
        }

        .client {
            display: flex;
            margin-top: 30px;
            align-items: center;

            &-info {
                flex: 1;
                margin-left: 5px;

                p {
                    color: #909090;
                    margin-top: 5px;
                }
            }

            &-head {
                width: 73px;
                height: 73px;
                border-radius: 50%;
                overflow: hidden;
                border: 3px solid #f6f6f6;
                object-fit: cover;
                img {
                    width: 100%;
                    height: 100%;
                    padding: 20%;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
