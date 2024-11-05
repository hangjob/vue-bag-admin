<template>
    <n-card
        class="h-full"
        title="网页内嵌"
        :segmented="{content: true,footer:true}"
        header-style="padding:10px;font-size:14px"
        footer-style="padding:10px"
        content-style="padding:0px">
        <n-skeleton v-if="loading" text :repeat="6" />
        <iframe ref="iframe" src="https://cn.vitejs.dev/guide/" class="h-full w-full"></iframe>
    </n-card>
</template>
<script setup>
const loading = ref(true)
const iframe = ref(null)
onMounted(()=>{
    if (iframe.attachEvent){
        iframe.attachEvent("onload", function(){
            alert("Local iframe is now loaded.");
        });
    } else {
        iframe.onload = function(){
            alert("Local iframe is now loaded.");
        };
    }
})

</script>
