<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:6">
            <n-card title="详情页面"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                {{$route.params}},
                {{$route.query}}
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
</script>
