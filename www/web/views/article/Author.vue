<template>
    <div class="author">
        <div class="author-head"
             style="background-image:url('https://www.vipbic.com/uploads/20220327/9816c6c457fb9e0bee39bd59cd625c84.jpg');"
        ></div>
        <div class="author-avatar">
            <a href="">羊</a>
        </div>
        <div class="author-basic">
            <h5>羊先生</h5>
            <p>这家伙很懒，什么也没写！</p>
        </div>
        <div class="author-mess">
            <div class="item">
                <h6>文章</h6>
                <p>1</p>
            </div>
            <div class="item">
                <h6>评论</h6>
                <p>12</p>
            </div>
            <div class="item">
                <h6>加入时间</h6>
                <p>1</p>
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({})
</script>
<style lang="less" scoped>
.author {
    background-color: var(--yh-color-white);
    border-radius: var(--yh-border-radius-base);
    padding-bottom:  var(--yh-padding-base);
    &-head {
        background-position: 0 50%;
        background-size: 100% auto;
        border-bottom: 1px solid #e1e8ed;
        border-radius: 4px 4px 0 0;
        height: 100px;
        width: 100%;
        transition: all .3s;
    }

    &-avatar {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            background-color: #e5a0bd;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin-top: -40px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 28px;
            color: #ffffff;
            overflow: hidden;
            transition: all .3s;
        }
    }

    &-basic {
        clear: both;
        text-align: center;
        width: 100%;
        margin: 10px 0 10px 0;

        h5 {
            font-size: 18px;
        }

        p {
            line-height: 20px;
            color: #777777;
        }
    }

    &-mess {
        display: flex;
        justify-content: space-around;
        .item{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            min-width: 100px;
            h6{
                color: #777;
                margin-bottom: 5px;
            }
            p{
                font-weight: bold;
            }
        }
    }
}
</style>
