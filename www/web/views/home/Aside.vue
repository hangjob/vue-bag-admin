<template>
    <div class="aside">
        <web-card class="hot" title="最新更新">
            <template v-slot:body>
                <ul class="list">
                    <li v-for="(item,idx) in items" :key="idx">
                        <span>[小可爱]</span>
                        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻</a>
                    </li>
                </ul>
            </template>
        </web-card>
        <Advertising height="150px" :images="banner1" />
        <web-card class="hot" title="推荐资讯">
            <template v-slot:body>
                <ul class="list">
                    <li v-for="(item,idx) in items" :key="idx">
                        <span>{{ idx + 1 }}.</span>
                        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻，</a>
                    </li>
                </ul>
            </template>
        </web-card>
        <Advertising height="300px" :images="banner2" />
        <web-card class="hot" title="推荐资讯">
            <template v-slot:body>
                <ul class="list">
                    <li v-for="(item,idx) in items" :key="idx">
                        <span>{{ idx + 1 }}.</span>
                        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻，</a>
                    </li>
                </ul>
            </template>
        </web-card>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import banner1 from '@www/web/assets/image/banner-1.jpg'
import banner2 from '@www/web/assets/image/banner-2.jpg'

const items = ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
</script>
<style lang="less" scoped>
.aside {
    .hot {
        margin-bottom: 20px;

        .list {
            li {
                margin-bottom: 18px;

                &:last-child {
                    margin-bottom: 0;
                }

                span {
                    margin-right: 5px;
                }

                a {
                    color: var(--bag-text-color-black);
                    text-decoration: none;

                    &:hover {
                        color: var(--bag-text-hover-color-primary);
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
