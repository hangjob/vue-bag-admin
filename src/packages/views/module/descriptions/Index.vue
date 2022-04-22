<template>
    <bag-view>
        <a-descriptions bordered title="商品信息" size="small">
            <template #extra>
                <a-button type="primary">编辑</a-button>
            </template>
            <a-descriptions-item label="商品">iPhone 13 Pro</a-descriptions-item>
            <a-descriptions-item label="货源">苹果官方</a-descriptions-item>
            <a-descriptions-item label="Time">2021年10月1日 18:00:00</a-descriptions-item>
            <a-descriptions-item label="数量">1.00</a-descriptions-item>
            <a-descriptions-item label="折扣价">$8299.00</a-descriptions-item>
            <a-descriptions-item label="官方价">$8900.00</a-descriptions-item>
            <a-descriptions-item label="商品信息">
                超先进双摄系统，精进再精进，超强耐用性，边边角角面面俱到， 超高速芯片，又一次超越自我，超劲续航大提升，每天一路挺你，超瓷晶面板，凭硬实力让玻璃面板服软，耐用的 平直边缘 设计
                <br/>
                全新超广角摄像头，让照片暗部表现更细腻。全新广角摄像头，光线 捕捉能力增加 47%，提升照片和视频的品质。 新增传感器位移式光学图像防抖功能，就算手不稳，画面照样稳。
            </a-descriptions-item>
        </a-descriptions>
        <br/>
        <a-descriptions title="用户信息" layout="vertical" bordered>
            <template #extra>
                <a-button class="bag-button-color-green" type="primary">确认发货</a-button>
            </template>
            <a-descriptions-item label="姓名">羊先生</a-descriptions-item>
            <a-descriptions-item label="年龄">26</a-descriptions-item>
            <a-descriptions-item label="是否会员">YES</a-descriptions-item>
            <a-descriptions-item label="创建时间">2021-10-01 18:00:00</a-descriptions-item>
            <a-descriptions-item label="支付时间" :span="2">2021-10-01 18:30:00</a-descriptions-item>
            <a-descriptions-item label="订单状态" :span="3">
                <a-badge status="processing" text="订单已创建完毕，等待核验"/>
            </a-descriptions-item>
            <a-descriptions-item label="支付金额">$8299.00</a-descriptions-item>
            <a-descriptions-item label="已支付金额">$8200.00</a-descriptions-item>
            <a-descriptions-item label="红包抵扣">$299.00</a-descriptions-item>
            <a-descriptions-item label="地址">浙江省杭州市西湖区天堂软件园</a-descriptions-item>
        </a-descriptions>
    </bag-view>
</template>
<script>
import {defineComponent, ref} from 'vue'
import designer from './Designer.vue'

export default defineComponent({
    name:'module-descriptions',
    components: {
        designer
    },
    setup() {
        return {
            activeKey: ref('1'),
        };
    },
})
</script>
