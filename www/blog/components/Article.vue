<template>
    <div class="article">
        <div class="item">
            <div class="item-img">
                <a href="javascript:;" class="scroll-box" v-if="itemSumData.length">
                    <template v-for="(todo,j) in itemSumData">
                        <img v-if="j < 12" :key="j" :src="todo.pic">
                    </template>
                </a>
                <a class="background" href="javascript:;" :style="{backgroundImage:'url(' + itemData.pic + ')'}" v-else
                ></a>
                <a class="item-img-body">
                    <div class="tpye">2020年2月25日</div>
                    <div class="title"><h3>闪灵CMS学校建站系统(含小程序)</h3></div>
                </a>
            </div>
            <div class="item-userimg">
                <img src="https://www.vipbic.com/uploads/20190321/e561b9dbf43336c22e277169027c8add.jpg">
            </div>
            <div class="item-meta">
                <div><span class="d"></span><span class="t">PHP源码</span></div>
                <div><span class="d"></span><span class="t">商务商城</span></div>
            </div>
            <div class="item-body">
                <p>115cms综合内容管理系统是一款采用当前最流行的ThinkPHP框架开发的高效开源的内容管</p>
            </div>
            <div class="item-det">
                <a class="btn" target="_blank">点击查看</a>
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    props: {
        itemData: {
            type: Object,
            default: {}
        },
        itemSumData: {
            type: Array,
            default: []
        }
    }
})
</script>
<style lang="less" scoped>
@keyframes auto-scroll {
    0%, 100% {
        transform: translate3d(-50%, -23%, 0) rotate(15deg)
    }
    50% {
        transform: translate3d(-50%, -77%, 0) rotate(15deg)
    }
}

.article {
    width: 100%;

    .item {
        display: flex;
        width: 100%;
        margin-right: 20px;
        flex-direction: column;
        background-color: #ffffff;
        margin-bottom: 30px;
        border-radius: 5px;
        height: 320px;
        position: relative;
        transition: all 0.3s;
        border: 1px solid #f3f2f2;
        overflow: hidden;

        &-img {
            position: relative;
            overflow: hidden;
            height: 165px;

            a {
                display: inline-block;
                overflow: hidden;
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 165px;
                    object-fit: cover;
                }
            }

            a.background {
                display: block;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 50%;
                position: absolute;
                left: 0;
                top: 0;
                overflow: hidden;
                opacity: 1;
                transition: opacity 1s ease;
            }

            a.scroll-box {
                transform: translate3d(-50%, -23%, 0) rotate(15deg);
                animation: auto-scroll 20s linear infinite;
                width: 100%;
                height: 640px;
                position: relative;
                left: 50%;
                top: 50%;

                img {
                    width: 125px;
                    margin: 7px;
                    border-radius: 5px;
                }

                &:hover {
                    animation-play-state: paused;
                }
            }

            &-body {
                position: relative;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.25);
                z-index: 10;
                vertical-align: middle;
                transition: all 0.3s;

                .tpye {
                    position: absolute;
                    right: 10px;
                    top: 5px;
                    font-size: 12px;
                    color: #f3f2f2;
                }

                .title {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 94%;

                    h3 {
                        font-size: 16px;
                        font-weight: 700;
                        color: #fff;
                        text-align: center;
                    }
                }
            }
        }

        &-meta {
            display: flex;
            align-items: center;
            flex-direction: row;
            padding: 5px 15px 0 15px;

            > div {
                display: flex;
                align-items: center;
                flex-direction: row;
                margin-right: 10px;
            }

            .d {
                display: block;
                border-radius: 50%;
                width: 6px;
                height: 6px;
                background-color: #e96656;
                margin-right: 5px;
            }

            .t {
                font-size: 12px;
            }

            & > div:last-of-type {
                .d {
                    background-color: #e96656;
                }
            }
        }

        &-body {
            padding: 5px 15px 0 15px;

            a {
                display: inline-block;
            }

            h5 {
                color: #333333;
                font-size: 18px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            p {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-top: 5px;
                line-height: 20px;
            }
        }

        &-userimg {
            position: relative;
            z-index: 9;
            display: block;
            width: 100px;
            height: 36px;
            margin-top: -14px;
            margin-left: -0px;
            transform: translateZ(0);
            z-index: 11;

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-position: right top;
                background-repeat: no-repeat;
                background-size: 100px 30px;
                background-image: url('https://www.vipbic.com/public/www/pc/img/arc.e1c8ae87.svg');
                top: -3px;
                left: 50%;
                transform: translate(-50%, 0);
                z-index: -1;
            }

            img {
                position: absolute;
                margin: auto;
                top: 0;
                right: 0;
                left: 0;
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
        }

        &-det {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 10px;
            left: 0;

            .btn {
                display: inline-block;
                padding: 8px 17px;
                color: #555;
                margin-top: 10px;
                border-radius: 5px;
                border: 1px solid #eaeaea;
                cursor: pointer;
                letter-spacing: 1px;
                transition: all 0.3s;

                &:hover {
                    border-color: #e96656;
                    background-color: #e96656;
                    color: #fff;
                }
            }
        }

        &:hover {
            transform: translateY(-5px);
        }
    }
}
</style>
