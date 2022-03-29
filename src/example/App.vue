<template>
     <a-button type="primary">Primary Button</a-button>
    <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
})
</script>
