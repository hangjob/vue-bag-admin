<template>
    <section class="pt-[90px] pb-[120px] text-center bg-[#000000]/[0.4] section-container">
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
            <n-grid-item span="12 m:6 l:3" v-for="item in compData.items">
                <div class="mt-[30px]">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s"
                         data-wow-delay="0.5">
                        <n-icon size="40" :color="item.color">
                            <component :is="item.icon"></component>
                        </n-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight font-bold text-[17px] text-white relative mt-[15px] mb-[20px]" data-wow-duration="1.0s"
                        data-wow-delay="0.5">
                        <n-number-animation show-separator :from="item.from" :to="item.to"/>
                    </h5>
                    <p class="text-[#d1d1d1]">{{item.title}}</p>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script setup>
import {PeopleOutline,PersonAddOutline,AtOutline,LeafOutline} from "@vicons/ionicons5"
const compData =  reactive({
    items:[
        {
            title:'Projects Completed',
            icon:markRaw(PeopleOutline),
            from:0,
            to:1800,
            color:"#e96656"
        },
        {
            title:'Happy Clients',
            icon:markRaw(PersonAddOutline),
            from:0,
            to:1800,
            color:"#34d293"
        },
        {
            title:'Mail Conversation',
            icon:markRaw(AtOutline),
            from:0,
            to:1800,
            color:"#3ab0e2"
        },
        {
            title:'Photos Taken',
            icon:markRaw(LeafOutline),
            from:0,
            to:1800,
            color:"#f7d861"
        }
    ]
})
</script>
<style lang="less" scoped>
.section-container {
    h5 {
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
}
</style>
