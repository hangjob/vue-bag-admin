<template>
    <div>
        <a-descriptions bordered title="商品信息" size="small">
            <template #extra>
                <a-button type="primary">编辑</a-button>
            </template>
            <a-descriptions-item label="商品">iPhone 13 Pro</a-descriptions-item>
            <a-descriptions-item label="货源">苹果官方</a-descriptions-item>
            <a-descriptions-item label="Time">2021年10月1日 18:00:00</a-descriptions-item>
            <a-descriptions-item label="数量">1.00</a-descriptions-item>
            <a-descriptions-item label="折扣">$8299.00</a-descriptions-item>
            <a-descriptions-item label="官方价">$8900.00</a-descriptions-item>
            <a-descriptions-item label="商品信息">
                超先进双摄系统，精进再精进，超强耐用性，边边角角面面俱到， 超高速芯片，又一次超越自我，超劲续航大提升，每天一路挺你，超瓷晶面板，凭硬实力让玻璃面板服软，耐用的 平直边缘 设计
                <br/>
                全新超广角摄像头，让照片暗部表现更细腻。全新广角摄像头，光线 捕捉能力增加 47%，提升照片和视频的品质。 新增传感器位移式光学图像防抖功能，就算手不稳，画面照样稳。
            </a-descriptions-item>
        </a-descriptions>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
    setup() {

    },
});
</script>

