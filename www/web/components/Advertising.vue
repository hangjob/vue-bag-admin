<template>
    <div class="advertising" :style="{height}">
        <div class="advertising-body">
            <a href="">
                <img :src="images" alt="">
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    height: String,
    images: [String, Array],
})
</script>
<style lang="less" scoped>
.advertising {
    background-color: var(--bag-color-white);

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
