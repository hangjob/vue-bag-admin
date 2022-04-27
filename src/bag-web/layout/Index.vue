<template>
    <header>
        <LayoutNav/>
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <LayoutFooter/>
    </footer>
</template>
<script setup lang="ts">
import LayoutNav from '@www/web/layout/Nav.vue'
import LayoutFooter from '@www/web/layout/Footer.vue'
</script>
