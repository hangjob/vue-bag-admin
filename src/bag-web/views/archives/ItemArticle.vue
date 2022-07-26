<template>
    <div class="item-article">
        <div class="item-wrap">
            <div class="item-cont">
                <div class="item-top">
                    <a class="item-thumb" href="">
                        <img
                            src="https://image.uisdc.com/wp-content/uploads/2022/07/uisdcbanner-20220712.jpg" alt=""
                        >
                    </a>
                </div>
                <div class="item-main">
                    <h3 class="item-title">
                        <a href="">网页设计必看！盘点 6个 Dribbble 上的优质设计工作室</a>
                    </h3>
                    <div class="item-desc">
                        <span class="ellipsis-2">今天继续为大家推荐 6 个 Dribbbble 上的优质设计工作室账号，这些工作室都发布了上百个成熟的网页设计及 UI 设计的商业案例，在图文排版、配色以及品牌设计呈现上都有很多值得学习的地方。</span>
                    </div>
                </div>
                <div class="item-meta">
                    <div class="user">
                        <img
                            src="https://wx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM7kmycNDoicwXjTIRIU26xJCziaWG97RhwPR6DvB4cZzJbor0fu6ibTf75uHgtXSjpc52IibFjiahegr0Q/132"
                            alt=""
                        >
                        <span>羊先生</span>
                    </div>
                    <div class="tag">
                        <i class="tag-ico"></i>FWA
                    </div>
                </div>
            </div>
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
.item-article {
    .item-wrap {
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px;
        margin-top: 30px;
        .item-cont {
            .item-top {
                .item-thumb {
                    img {
                        height: 200px;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 10px;
                    }
                }
            }

            .item-main {
                .item-title {
                    margin-top: 20px;
                    margin-bottom: 10px;
                    font-size: 18px;
                    font-weight: bold;

                    a {
                        display: block;
                        color: #323232;
                    }
                }

                .item-desc {
                    background-color: #fafafa;
                    border-radius: 10px;
                    color: #8a8a8a;
                    padding: 20px;
                    transition: all .2s;
                }
            }

            .item-meta {
                display: flex;
                align-items: center;
                margin-top: 15px;

                .user {
                    flex: 1;
                    flex-shrink: 0;
                    height: 30px;

                    img {
                        width: 30px;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 10px;
                    }
                }

                .tag {

                }
            }
        }
    }
}
</style>
