<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:6">
            <n-card title="箭头" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel show-arrow>
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                        alt="">
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                        alt="">
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                        alt="">
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                        alt="">
                </n-carousel>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="自定义箭头以及控制点" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel show-arrow autoplay>
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    >
                    <template #arrow="{ prev, next }">
                        <div class="custom-arrow">
                            <button type="button" class="custom-arrow--left" @click="prev">
                                <n-icon><ArrowBack /></n-icon>
                            </button>
                            <button type="button" class="custom-arrow--right" @click="next">
                                <n-icon><ArrowForward /></n-icon>
                            </button>
                        </div>
                    </template>
                    <template #dots="{ total, currentIndex, to }">
                        <ul class="custom-dots">
                            <li
                                v-for="index of total"
                                :key="index"
                                :class="{ ['is-active']: currentIndex === index - 1 }"
                                @click="to(index - 1)"
                            />
                        </ul>
                    </template>
                </n-carousel>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:7">
            <n-card title="自定义过渡效果" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel
                    effect="custom"
                    :transition-props="{ name: 'creative' }"
                    show-arrow
                    style="width: 100%; height: 240px"
                >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    >
                </n-carousel>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:5">
            <n-card title="每屏显示数量" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel :slides-per-view="3" :space-between="20" :loop="false" draggable>
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    >
                </n-carousel>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:5">
            <n-card title="垂直" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel
                    direction="vertical"
                    dot-placement="right"
                    show-arrow
                    style="width: 100%; height: 240px"
                >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    >
                </n-carousel>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:7">
            <n-card title="自动播放" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-carousel autoplay>
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                    >
                    <img
                        class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    >
                </n-carousel>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
</script>
<style scoped>
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 10px;
}

.custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.custom-arrow button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
}

.custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition:
        width 0.3s,
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.custom-dots li.is-active {
    width: 40px;
    background: #fff;
}
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
    opacity: 0;
    transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
    transition: all 0.3s ease;
}
</style>
