<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="Discover" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <btn1/>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="Modern Button" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <btn2/>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="Go Back" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <btn3/>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="Join now" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <btn4/>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="Download" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <btn5/>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="Payments" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <btn6/>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import btn1 from "./btn1.vue"
import btn2 from "./btn2.vue"
import btn3 from "./btn3.vue"
import btn4 from "./btn4.vue"
import btn5 from "./btn5.vue"
import btn6 from "./btn6.vue"
</script>
