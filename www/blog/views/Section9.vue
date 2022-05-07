<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>评价</h1>
            <p>以下内容来自于Bag用户对于本博客系统的评价.</p>
        </div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <div class="feedback-bok">
                    <div class="describe">
                        “小弟从1.9版本玩里程密到如今，也就是从小白到脱离小白的过程中学习到很多知识！
                        下面我要发表我内心的感言！
                        首先我要感谢里程密的管理员与群主（作者）的悉心教导，不仅在群里学习到了技术还学到了如何装一手好逼！
                        里程密是绝逼是一个非常强大灵活易操作的开源程序，简单易懂！还能无时无刻的和群里的小伙伴一起的讨论技术和如何装一手好逼！
                        小弟从小不爱说话，自从用了里程密以后我认识了许多小伙伴，从一个不爱说话的小伙子脱变成一个无言不欢的小伙子！
                        小白建站是您绝逼的选择，玩博客用里程密,无时无刻愉快的装逼！自从用了里程密，人也长高了，也变帅了，吃啥都有胃口了，也找着女朋友了。.”
                    </div>
                    <div class="client">
                        <vs-icon color="#e96656" size="50px" icon="alternate_email"></vs-icon>
                        <div class="client-info">
                            <h6>品茗</h6>
                            <p>非常强大</p>
                        </div>
                        <div class="client-head">
                            <img src="/src/packages/assets/image/yanghang.jpg" alt="">
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <div class="feedback-bok">
                    <div class="describe">
                        “里程密开源博客系统我也用了四个多月了！真的特别喜欢，个人介绍页面很装逼也别喜欢。后台简洁易操作，而且有大神的风范。让我用着不知不知觉感觉自己不再是小白了！@Dcz
                        人很好，不懂得地方都是问他的。他都会耐心解答（一般都说“问管理”）@Dcz 真的是很不错的人，反正推荐大家一定要试下这个程序，不然真的后悔。.”
                    </div>
                    <div class="client">
                        <vs-icon color="#e96656" size="50px" icon="alternate_email"></vs-icon>
                        <div class="client-info">
                            <h6>品茗</h6>
                            <p>非常强大</p>
                        </div>
                        <div class="client-head">
                            <img src="/src/packages/assets/image/yanghang.jpg" alt="">
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                <div class="feedback-bok">
                    <div class="describe">
                        “我是个拥有梦想技术小白，但是网络坑太多，别人分享的源码都是残次品，完整的都要收费！于是我在网络中学习，搜索百度，浏览分享网站等，终于我找到了我想要的里程密lcm开源博客系统，这款系统非常好，界面非常美观，最主要的的事:作者非常帅，不收费，群里技术交流。于是我快速搭建了一个属于自己的lcm博客，心里的酸爽！不过还是有点缺陷，我相信作者君会好好完善的！加油儿里程密，良心的系统！.”
                    </div>
                    <div class="client">
                        <vs-icon color="#e96656" size="50px" icon="alternate_email"></vs-icon>
                        <div class="client-info">
                            <h6>品茗</h6>
                            <p>非常强大</p>
                        </div>
                        <div class="client-head">
                            <img src="/src/packages/assets/image/yanghang.jpg" alt="">
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>

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
                }
            }

            &-head {
                width: 73px;
                height: 73px;
                border-radius: 50%;
                overflow: hidden;
                border: 3px solid #f6f6f6;

                img {
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
