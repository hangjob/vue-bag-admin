<template>
    <img class="vegas" src="https://lcm.wang/Public/image/bg5.jpg" alt="">
    <div>
        <Nav/>
        <div>
            <!--            <component v-for="(item,idx) of compsName" :is="item" :key="idx"></component>-->
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section12/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section8/>
            <Section9/>
            <Section10/>
            <Section11/>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import Nav from '@www/blog/components/Nav.vue'

const files: any = import.meta.globEager('./views/*.vue')
const comps: any = []
for (const c of Object.keys(files)) {
    const component = files[c]?.default
    const name = c.match(/S.*?(?=.vue)/)
    if (name) {
        comps[component.name || name[0]] = component
    }
}
export default defineComponent({
    components: {
        Nav,
        ...comps,
    },
    setup() {
        onMounted(() => {

        })
        return {
            compsName: Object.keys(comps).map((item: string) => item),
        }
    },
})
</script>
<style lang="less">
html, body {
    background: #f4f6f8;
    font-size: var(--bag-font-size-base);
}

.vegas {
    position: fixed;
    left: 0;
    right: 0;
    height: 850px;
    width: 100%;
    object-fit: cover;
}
</style>
