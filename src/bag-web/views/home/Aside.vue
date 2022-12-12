<template>
    <div class="aside">
        <Join/>
        <bag-card class="hot" title="最新更新">
            <template v-slot:body>
                <ul class="list">
                    <li v-for="(item,idx) in items" :key="idx">
                        <span>[小可爱]</span>
                        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻</a>
                    </li>
                </ul>
            </template>
        </bag-card>
        <bag-advertising height="150px" :images="banners[0]"></bag-advertising>
        <bag-card class="hot" title="推荐资讯">
            <template v-slot:body>
                <ul class="list">
                    <li v-for="(item,idx) in items" :key="idx">
                        <span>{{ idx + 1 }}.</span>
                        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻，</a>
                    </li>
                </ul>
            </template>
        </bag-card>
        <bag-advertising height="300px" :images="banners[1]"></bag-advertising>
        <bag-card class="hot" title="推荐资讯">
            <template v-slot:body>
                <ul class="list">
                    <li v-for="(item,idx) in items" :key="idx">
                        <span>{{ idx + 1 }}.</span>
                        <a href="">你好呀，承蒙遇见，三生有幸，永远年轻，</a>
                    </li>
                </ul>
            </template>
        </bag-card>
    </div>
</template>
<script lang="ts" setup>
import {defineProps, inject, ref} from 'vue'
import Join from './Join.vue'
const props = defineProps({
    articleAll: { type: [Array], default: () => [] },
    banners:  { type: [Array], default: () => [] },
})
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
