<template>
    <n-notification-provider>
        <n-message-provider>
            <img class="vergas" src="@/app/web/assets/bg1.jpg" alt="">
            <div>
                <Home/>
                <Trait/>
                <Viewing/>
                <Blog/>
                <Preface/>
                <Quantity/>
                <Download id="Download"/>
                <Develop/>
                <EmailDwon/>
                <Evaluate/>
                <Message/>
                <BagFooter/>
            </div>
        </n-message-provider>
    </n-notification-provider>
</template>

<script lang="ts">
import Wow  from "wow.js"
// const compList = [
//     {name: "主页", components: "Home"},
//     {name: "特点", components: "Trait"},
//     {name: "", components: "Viewing"},
//     {name: "博文", components: "Blog"},
//     {name: "序言", components: "Preface"},
//     {name: "", components: "Quantity"},
//     {name: "下载", components: "Download"},
//     {name: "开发", components: "Develop"},
//     {name: "", components: "EmailDwon"},
//     {name: "评价", components: "Evaluate"},
//     {name: "留言", components: "Message"},
//     {name: "", components: "Footer"},
// ]
import {defineComponent,onMounted} from "vue"
import Home from "@/app/web/view/Home.vue"
import Trait from "@/app/web/view/Trait.vue"
import Viewing from "@/app/web/view/Viewing.vue"
import Preface from "@/app/web/view/Preface.vue"
import Quantity from "@/app/web/view/Quantity.vue"
import Develop from "@/app/web/view/Develop.vue"
import Download from "@/app/web/view/Download.vue"
import EmailDwon from "@/app/web/view/EmailDwon.vue"
import Evaluate from "@/app/web/view/Evaluate.vue"
import Message from "@/app/web/view/Message.vue"
import BagFooter from "@/app/web/view/Footer.vue"
import Blog from "@/app/web/view/Blog.vue"

export default defineComponent({
    components: {
        Home,
        Trait,
        Viewing,
        Preface,
        Quantity,
        Download,
        EmailDwon,
        Evaluate,
        Message,
        BagFooter,
        Develop,
        Blog
    },
    setup() {
        onMounted(()=>{
            new Wow().init()
        })
    }
})
</script>
<style lang="less" scoped>

html, body {
    background-color: #f4f6f8;
    font-size: 14px;
}

.vergas {
    position: fixed;
    left: 0;
    right: 0;
    height: 850px;
    width: 100%;
    object-fit: cover;
}
</style>
