<template>
    <section class="bg-[#dbbf56] py-[60px] section-container">
        <h1 class="text-[50px] text-white font-bold text-center">评价</h1>
        <p class="text-white mb-10 text-center">以下内容来自于Bag用户对于本博客系统的评价.</p>
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
            <n-grid-item span="12 m:6 l:4" v-for="(item) in compData.items">
                <div class="bg-white p-[25px] rounded-[4px] text-left text-[#333] flex flex-col">
                    <div class="text-[#909090] text-[15px]">
                        {{ item.message }}
                    </div>
                    <div class="flex mt-[30px] items-center">
                        <n-icon color="#e96656" size="30">
                            <PawOutline/>
                        </n-icon>
                        <div class="flex-1 ml-3">
                            <h6>{{ item.name }}</h6>
                            <p>{{ item.createTime }}</p>
                        </div>
                        <div class="client-head rounded-[50%] w-[50px] h-[50px] overflow-hidden">
                            <img class="vertical-mid" src="@/packages/assets/yanghang.jpg" alt="">
                        </div>
                    </div>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script setup>
import {PawOutline} from "@vicons/ionicons5"
const compData = reactive({
    items: [
        {
            message: '我是个拥有梦想技术小白，但是网络坑太多，别人分享的源码都是残次品，完整的都要收费！于是我在Github搜索，终于我找到了我想要的里vue-bag-admin开源博客系统，这款系统非常好，界面非常美观，最主要的的是，作者也非常nice，不收费。于是我快速搭建了一个属于自己的lcm博客，心里的酸爽！不过还是有点缺陷，我相信作者君会好好完善的！加油Bag，良心的系统！',
            name: '昏睡的冥王星',
            createTime: '2022-06-23 18:45:47'
        },
        {
            message: '用起来还不错，简介的风格，不懂得地方阔以问作者。他都会耐心解答（一般的都说“问管理”）@羊先生 真的是很不错的人，反正推荐大家一定要试下这个程序，不然真的后悔。',
            name: '昏睡的冥王星',
            createTime: '2022-06-23 18:45:47'
        },
        {
            message: '用起来还不错，简介的风格，不懂得地方阔以问作者。他都会耐心解答（一般的都说“问管理”）@羊先生 真的是很不错的人，反正推荐大家一定要试下这个程序，不然真的后悔。',
            name: '昏睡的冥王星',
            createTime: '2022-06-23 18:45:47'
        }
    ],
})
</script>
