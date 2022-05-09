<template>
    <img class="vegas" src="@www/blog/assets/bg5.jpg" alt="">
    <div>
        <Nav/>
        <div>
            <component :id="item.components" v-for="(item,idx) of menuList" :is="item.components" :key="idx"></component>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import Nav from '@www/blog/components/Nav.vue'
import menuList from "@www/blog/config/menu";
const files: any = import.meta.globEager('./views/*.vue')
const comps: any = []
for (const c of Object.keys(files)) {
    const component = files[c]?.default
    // @ts-ignore
    const name = c.match(/[a-zA-Z].*?(?=.vue)/)[0].split('/')[1]
    if (name) {
        comps[component.name || name] = component
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
            menuList
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
