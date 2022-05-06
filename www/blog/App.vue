<template>
    <div>
        <Nav />
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@www/blog/components/Nav.vue'
import Section1 from '@www/blog/views/Section1.vue'
import Section2 from '@www/blog/views/Section2.vue'
import Section3 from '@www/blog/views/Section3.vue'
import Section4 from '@www/blog/views/Section4.vue'

export default defineComponent({
    components: {
        Nav,
        Section1,
        Section2,
        Section3,
        Section4,
    },
    setup() {

    },
})
</script>
<style lang="less">
html, body {
    background: #f4f6f8;
    font-size: var(--bag-font-size-base);
}
</style>
