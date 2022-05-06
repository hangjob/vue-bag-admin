<template>
    <div>
        <Nav/>
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Nav from '@www/blog/components/Nav.vue'
import Section1 from '@www/blog/views/Section1.vue'
import Section2 from '@www/blog/views/Section2.vue'
import Section3 from '@www/blog/views/Section3.vue'
import Section4 from '@www/blog/views/Section4.vue'
import Section5 from '@www/blog/views/Section5.vue'
import Section6 from '@www/blog/views/Section6.vue'
import Section7 from '@www/blog/views/Section7.vue'
import Section8 from '@www/blog/views/Section8.vue'
import Section9 from '@www/blog/views/Section9.vue'
export default defineComponent({
    components: {
        Nav,
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6,
        Section7,
        Section8,
        Section9
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
