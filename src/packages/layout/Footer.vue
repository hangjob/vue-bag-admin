<template>
    <n-layout-footer v-if="$globalStore.configs.isFooter" :inverted="false" class="text-center py-2" bordered>
        {{ $globalStore.webSite.footerText }}
    </n-layout-footer>
</template>
<script setup>

</script>
