<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item @click="handleClickCopy(icon.name)" v-for="(icon,idx) in $global.icons" span="3 m:2 l:1">
            <n-card
                :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="cursor:pointer;padding:20px;height:100%;text-align:center;display:flex;justify-content:center;align-items:center">
                <n-icon size="20" :color="$globalStore.theme.color">
                    <component :is="icon"></component>
                </n-icon>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
const handleClickCopy = (text) => {
    $global.helpers.clipboardCopy(text)
    $global.naive.message.success('复制   ' + text + '  成功')
}
</script>
