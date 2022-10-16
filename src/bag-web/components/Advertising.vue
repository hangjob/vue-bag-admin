<template>
    <div class="advertising" v-if="images" :style="{height}">
        <div class="advertising-body">
            <template v-if="Array.isArray(images)">
                <a :href="item.url" v-for="(item,idx) in images" :key="idx">
                    <img :src="getImageFullPath(item.image)" alt="">
                </a>
            </template>
            <template v-else>
                <a :href="images.url">
                    <img :src="getImageFullPath(images.image)" alt="">
                </a>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {inject} from "vue";

const props = defineProps({
    height: String,
    images: [String, Array, Object],
})
const {getImageFullPath} = inject<any>('bagGlobal')
</script>
<style lang="less" scoped>
.advertising {
    background-color: var(--yh-color-white);

    &-body {
        width: 100%;
        height: 100%;

        a {
            display: block;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 3px;
            }
        }
    }
}
</style>
