<template>
    <div>
        <Home/>
    </div>
</template>

<script lang="ts">
const compList = [
    {name: "主页", components: "Home"},
    {name: "特点", components: "Trait"},
    {name: "", components: "Viewing"},
    {name: "博文", components: "Blog"},
    {name: "序言", components: "Preface"},
    {name: "", components: "Quantity"},
    {name: "下载", components: "Download"},
    {name: "开发", components: "Develop"},
    {name: "", components: "EmailDwon"},
    {name: "评价", components: "Evaluate"},
    {name: "留言", components: "Message"},
    {name: "", components: "Footer"},
]
import {defineComponent} from "vue"
import Home from "@/app/web/view/Home.vue"

export default defineComponent({
    components: {
        Home
    },
    setup() {

    }
})
</script>
<style scoped>

</style>
