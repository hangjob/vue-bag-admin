<template>
    <section class="section section-container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <el-icon size="40" color="#e96656">
                            <DishDot />
                        </el-icon>
                    </div>
                    <h5  class="wow animate__animated animate__slideInRight" data-wow-duration="1.0s" data-wow-delay="0.5"><CountTo :startVal="0" :endVal="12288" :duration="1800"></CountTo></h5>
                    <p class="indent">Projects Completed</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <el-icon size="40" color="#34d293">
                            <CoffeeCup />
                        </el-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight" data-wow-duration="1.4s" data-wow-delay="0.5"><CountTo :startVal="0" :endVal="2288" :duration="1800"></CountTo></h5>
                    <p class="indent">Happy Clients</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <el-icon size="40" color="#3ab0e2">
                            <Burger />
                        </el-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight" data-wow-duration="1.4s" data-wow-delay="0.5"><CountTo :startVal="0" :endVal="18234" :duration="1800"></CountTo></h5>
                    <p class="indent">Mail Conversation</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <el-icon size="40" color="#f7d861">
                            <Dessert />
                        </el-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight" data-wow-duration="1.0s" data-wow-delay="0.5"><CountTo :startVal="0" :endVal="1093" :duration="1800"></CountTo></h5>
                    <p class="indent">Photos Taken</p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import {defineComponent} from 'vue'
import { CountTo } from 'vue3-count-to'
export default defineComponent({
    components: {
        CountTo
    },
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 90px;
    padding-bottom: 120px;
    background: rgba(0, 0, 0, 0.5);
    clear: both;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;

    h5 {
        font-weight: bold;
        font-size: 17px;
        position: relative;
        margin-top: 15px;
        margin-bottom:20px;

        &::before {
            position: absolute;
            z-index: 1;
            content: "";
            width: 20%;
            height: 2px;
            background: #f7d861;
            bottom: -8px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
    .service-icon{
        margin-top: 30px;
        .indent{
            color: #d1d1d1;
        }
    }
}
</style>
