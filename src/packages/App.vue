<template>
    <router-view/>
    <Contextmenu ref="contextmenu"/>
</template>
<script lang="ts">
import Contextmenu from '@/packages/extend/contextmenu/index.vue'
import {defineComponent, provide, ref} from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        Contextmenu
    },
    setup(props, context: any) {
        const contextmenu: any = ref(null)
        provide('appContextmenu', contextmenu)
        return {
            contextmenu
        }
    }
})
</script>
