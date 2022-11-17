<template>
    <bag-view>
        <Vue3Marquee class="example">
            <span
                v-for="(word, index) in helloArray"
                :key="index"
                class="word-style"
                :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
            >
              {{ word }}，
            </span>
        </Vue3Marquee>
        <Vue3Marquee
            class="example"
            :gradient="true"
            :gradientColor="[255, 255, 255]"
            :gradientWidth="`30%`">
            <img
                :src="img"
                v-for="img in imgArray"
                :key="img"
                class="image"
                width="100"
            />
        </Vue3Marquee>
        <Vue3Marquee class="example">
            <div class="card" v-for="avatar in avatarArray" :key="avatar">
                <img :src="avatar" width="100" height="100"/>
                <p style="margin-top: 10px; margin-bottom: 0px;">我并不希望生活可以过得顺利，但是我希望碰到困难的时候，自己是个合格的对手——羊先生</p>
            </div>
        </Vue3Marquee>
        <Vue3Marquee class="example" :pauseOnHover="true">
            <div class="card" v-for="avatar in avatarArray" :key="avatar">
                <img :src="avatar" width="100" height="100"/>
                <p style="margin-top: 10px; margin-bottom: 0px;">你赤手空拳来到人世间，为找到那片海不顾一切</p>
                <button class="btn">了解更多</button>
            </div>
        </Vue3Marquee>
        <Vue3Marquee class="example" :pauseOnClick="true">
            <img
                :src="img"
                v-for="img in imgArray"
                :key="img"
                class="image"
                width="100"
            />
        </Vue3Marquee>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue'
// @ts-ignore
import Vue3Marquee from "vue3-marquee";

export default defineComponent({
    name:'module-marquee',
    components: {
        Vue3Marquee
    },
    data() {
        return {
            helloArray: [
                "hello",
                "こんにちは",
                "bonjour",
                "안녕하세요",
                "Përshëndetje",
                "dzień dobry",
                "Здраво",
                "Kaixo",
                "Здравствуйте"
            ],
            imgArray: ["https://vuejs.org/images/vueschool.png", "https://vuejs.org/images/vehikl.png", "https://vuejs.org/images/retool.png",],
        }
    },
    setup() {
        const avatarArray = reactive<Array<any>>([]);

        for (let i = 0; i < 5; i++) {
            avatarArray.push(`https://avatars.dicebear.com/api/avataaars/${Math.random().toString(36).substr(2, 6)}.svg`);
        }

        return {
            avatarArray
        }
    }
})
</script>
<style lang="less" scoped>
.example {
    margin-bottom: 30px;
}

.word {
    font-size: 26px;
    margin: 0 10px;
}

.odd {
    color: rgb(68, 77, 84);
}

.card {
    width: 300px;
    border-radius: 3%;
    background-color: rgb(241, 241, 241);
    margin: 20px 40px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.even {
    color: rgb(137, 147, 156);
}

.image {
    font-size: 30px;
    margin: 0 10px;
}
</style>
