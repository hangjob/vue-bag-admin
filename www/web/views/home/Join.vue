<template>
    <div class="join">
        <bag-card title="加入我们">
            <template v-slot:body>
                <p class="join-slogan">
                    全栈导航一个分享互联网优秀资源的导航网站，专注分享产品运营、产品经理、UI设计师、前端开发工程师、后端开发工程师，为互联网职员收录国内外优质网站。互联网职员，找导航，就上
                    <span>全栈导航</span>
                </p>
                <div class="join-action">
                    <router-link to="">订阅公众号</router-link>
                    <router-link to="">写点什么</router-link>
                </div>
            </template>
        </bag-card>
    </div>
</template>
<style lang="less" scoped>
.join {
    &-slogan {
        color: #777;
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 1px;
        opacity: .7;
        text-align: justify;

        span {
            color: var(--bag-color-primary);
        }
    }

    &-action {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        padding-top: 15px;
        margin-top: 10px;
        margin-right: -15px;
        margin-left: -15px;
        a {
            display: inline-block;
            text-align: center;
            padding: 10px 30px;
            border: 1px solid rgba(0, 0, 0, .05);
            border-radius: 5px;
            color: var(--bag-text-color-brown);
            transition: all .3s;
            &:hover{
                color: var(--bag-color-white);
                background-color: var(--bag-text-hover-color-primary);
            }
        }
    }
}
</style>
