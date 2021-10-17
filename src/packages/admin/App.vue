<template>
    <router-view/>
    <Contextmenu/>
</template>

<script lang="ts">
    import Contextmenu from '@/packages/admin/extend/contextmenu/index.vue'
    import {defineComponent} from 'vue'

    export default defineComponent({
        name: 'App',
        components: {
            Contextmenu
        }
    })
</script>
<style>
    html, body {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    #app {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
</style>
