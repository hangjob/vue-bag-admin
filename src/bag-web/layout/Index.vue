<template>
    <header>
        <LayoutNav />
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        <LayoutFooter />
    </footer>
</template>
<script setup lang="ts">
import LayoutNav from '@/bag-web/layout/Nav.vue'
import LayoutFooter from '@/bag-web/layout/Footer.vue'
</script>
