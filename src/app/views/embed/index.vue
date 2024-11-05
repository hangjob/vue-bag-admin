<template>
    <n-card
        class="h-full"
        title="网页内嵌"
        :segmented="{content: true,footer:true}"
        header-style="padding:10px;font-size:14px"
        footer-style="padding:10px"
        content-style="padding:0px">
        <n-spin content-style="height:100%" class="h-full" :show="loading">
            <iframe ref="iframe" src="https://cn.vitejs.dev/guide/" class="h-full w-full"></iframe>
        </n-spin>
    </n-card>
</template>
<script setup>
const loading = ref(true)
const iframe = ref(null)
onMounted(() => {
    iframe.value.addEventListener("load", () => {
        loading.value = false
    })
})

</script>
