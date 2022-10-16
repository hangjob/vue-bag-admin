<template>
    <bag-view>
        <div class="qrcode-container">
            <div class="qrcode"><img src="@/packages/assets/image/zfb.jpg" alt=""></div>
        </div>
    </bag-view>
</template>
<script lang="ts"></script>
<style lang="less">
.qrcode-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .qrcode {
        width: 25%;
        min-width: 100px;
        img {
            width: 100%;
        }
    }
}
</style>

