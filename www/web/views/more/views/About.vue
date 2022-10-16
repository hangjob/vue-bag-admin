<template>
    <div class="about">
        <bag-card style="margin-top:0" title="你好，我是羊先生">
            <template v-slot:body>
                <div class="site-box">
                    <p>今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了...</p>
                    <p>陌生人，你好呀，承蒙遇见，三生有幸，永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡</p>
                    <p>欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，匆匆忙忙的人生，也许过客一场~~</p>
                    <p style="color: rgb(105, 189, 255); font-weight: bold;">
                        愿你雨天有伞，深夜有灯，一生温暖纯良，不舍爱与自由，与尘世的万千美好都能不期而遇。</p>
                </div>
                <div class="preface">
                    <p>
                        Bag最初我只是设计的一个开源后台管理系统，后来发大家对管理系统还是很喜欢，但是往往对接企业项目，风格和使用规范又有些偏差或者很不符合现有业务，不能带动用户去使用它，如是我又开发了Bag-web，为大家提供一个博客网站，那么就可以去使用这个系统管理你自己的博客了。
                    </p>
                    <p>
                        感谢：本套开源代码使用了Vue3、Vite、Gulp、Ant-Design-Vue、Element-Plus、Axios...,以及网络上一些插件，在这里感谢这些框架和插件的开源，为本套程序带来了很强大的程序基础！
                    </p>
                </div>
            </template>
        </bag-card>
    </div>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from 'vue-router';

const route = useRoute();
</script>
<style lang="less" scoped>
.about {
    p {
        font-size: 15px;
        line-height: 50px;
        color: #585858;
    }

    .preface {
        margin-top: 20px;
    }
}
</style>
