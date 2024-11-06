<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:6">
            <n-card title="" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <div>
                    <img id="image" src="@/packages/assets/yanghang.jpg" alt="Image">
                </div>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
const image = ref(null)
import Cropper from 'cropperjs';
onMounted(() => {
    const cropper = new Cropper(document.getElementById('image'), {
        aspectRatio: 16 / 9, // 剪裁框的宽高比例
        autoCropArea: 0.8, // 自动剪裁区域的大小，相对于原始图片
        viewMode: 1, // 显示模式：0-剪裁框不可移动，1-剪裁框可移动，2-剪裁框自由移动
        movable: true, // 是否允许剪裁框移动
        zoomable: true, // 是否允许缩放图片
        rotatable: true, // 是否允许旋转图片
        guides: true, // 是否显示剪裁框虚线
        background: true, // 是否显示背景网格
        cropBoxMovable: true, // 是否允许剪裁框拖动
        cropBoxResizable: true, // 是否允许剪裁框缩放
        minCropBoxWidth: 100, // 剪裁框的最小宽度
    })
})
</script>
