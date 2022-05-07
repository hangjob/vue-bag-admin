<template>
    <div>
        <Nav />
        <div>
            <component v-for="(item,idx) of compsName" :is="item" :key="idx"></component>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
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
</style>
