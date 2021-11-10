<template>
    <yxs-view class="about">
        <!--<canvas class="canvas" ref="canvas"></canvas>-->
        <a-row :gutter="[16,16]">
            <a-col :xs="24" :sm="24" :md="24" :lg="14" :xl="10">
                <a-card title="关于我">
                    <div class="hand">
                        <img src="@/packages/assets/yanghang.jpg" alt="">
                        <div class="hand-name">
                            <h6>羊先生</h6>
                            <a-button type="primary" shape="round" size="small">
                                <a-typography-link href="https://github.com/hangjob/vue-vite-admin-ts"  target="_blank">Like Me</a-typography-link>
                            </a-button>
                        </div>
                    </div>
                    <div class=""></div>
                </a-card>
            </a-col>
           
        </a-row>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent, getCurrentInstance, onMounted, ref, watch, nextTick} from 'vue'
import UserCanvasBg from './canvas';
import {useStore} from 'vuex';

export default defineComponent({
    name: 'about',
    setup() {
        const canvas = ref();
        const internalInstance: any = getCurrentInstance()

        const userCanvasBg = () => {
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
        }
        onMounted(() => {
            // userCanvasBg()
        })

        const $store = useStore()
        watch(() => $store.state.app.collapsed, (val, old) => {
            nextTick().then(() => {
                userCanvasBg();
            })
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

    .hand {
        display: flex;
        align-content: center;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        &-name {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h6 {
                font-weight: bold;
            }
        }
    }
}
</style>