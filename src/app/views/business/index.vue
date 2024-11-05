<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="这里根据自有的业务，不需要展示菜单导航以及额外模块"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                自己的业务内容
                <n-button @click="$global.router.back()">返回</n-button>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>

</script>
