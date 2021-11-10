<template>
    <yxs-view class="about">
        <canvas class="canvas" ref="canvas"></canvas>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent, getCurrentInstance, onMounted, ref} from 'vue'
import UserCanvasBg from './canvas';

export default defineComponent({
    name: 'about',
    setup() {
        const canvas = ref();
        const internalInstance: any = getCurrentInstance()
        onMounted(() => {
            let ph = internalInstance.ctx.$el.parentElement.offsetHeight - 50;
            let pw = internalInstance.ctx.$el.parentElement.offsetWidth - 50;
            canvas.value.style.height = 340 + 'px';
            canvas.value.style.width = pw + 'px';
            new UserCanvasBg({
                el: canvas.value,
                userInfo: {
                    userhead: 'http://192.168.1.24:8290/src/packages/assets/yanghang.jpg',
                    username: '羊先生',
                    sex: '男',
                    userhome: '来自地球',
                    usertime: '2021年11月09日 下午1点52分',
                    description: '以前觉得挣钱不重要，现在才知道星辰和大海都需要门票，诗和远方的路费都很贵'
                },
                width: pw,
                height: 340,
            });
        })
        return {
            canvas
        }
    }
})
</script>
<style lang="less" scoped>
.about {
    overflow: hidden;

    .canvas {
        position: relative;
        border-radius: 5px 5px 0 0;
        color: #fff;
        background: #999 url("../../assets/userbg.png") no-repeat;
        background-size: cover;
    }
}
</style>