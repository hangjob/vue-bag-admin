<template>
    <bag-view>
        <div class="about">
            <p>
                今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了...<br/>

                <span>陌生人，你好呀，承蒙遇见，三生有幸，</span><br/>

                永远年轻，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡<br/>

                欢迎你的逗留，非常荣幸能在你的回忆里留下我的脚印，<br/>

                匆匆忙忙的人生，也许过客一场~~<br/>

                愿你雨天有伞，深夜有灯，一生温暖纯良，不舍爱与自由，与尘世的万千美好都能不期而遇。<br/>

                前路坎坷，我辈当不忘初心，<span>愿你归来仍是少年</span>！
            </p>
            <div class="icons">
                <HeartTwoTone @click="handleGithub" twoToneColor="#eb2f96" style="font-size: 45px;cursor: pointer"/>
            </div>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    setup() {
        const handleGithub = () => {
            window.open('https://github.com/hangjob/vue-bag-admin')
        }
        return {
            handleGithub
        }
    }
})
</script>
<style lang="less" scoped>
.about {
    margin-top: 30px;

    p {
        font-size: 18px;
        line-height: 45px;
        text-align: center;

        span {
            background: linear-gradient(to right, #2196f399, #cddc39);
            -webkit-background-clip: text;
            color: transparent;
        }
    }

    .icons {
        text-align: center;
        margin-top: 20px;
    }
}
</style>

