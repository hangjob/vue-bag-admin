<template>
    <div class="banner-box" v-if="detailData.images && detailData.images.length">
        <el-carousel trigger="click" height="250px">
            <el-carousel-item v-for="(item,idx) in detailData.images" :key="idx">
                <div class="banner">
                    <img :src="getImageFullPath(item)" alt="">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script lang="ts" setup>
import {inject} from "vue";

const props = defineProps({
    detailData: [Object],
})
const {getImageFullPath} = inject<any>('bagGlobal')

</script>
<style lang="less" scoped>
.banner-box {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    overflow: hidden;
}

.banner {
    height: 100%;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
