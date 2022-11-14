<template>
    <a-layout-sider theme="light" :width="250" v-model:collapsed="compData.collapsed" :trigger="null" collapsible>
        <div class="logo">{{ compData.title }}</div>
        <MenuSlider />
    </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import appPinia from '@/packages/pinia/app'
import MenuSlider from './MenuSlider'

export default defineComponent({
    name: 'Slider',
    components: {
        MenuSlider,
    },
    setup() {
        const appStore = appPinia()
        const { title } = appStore.configApp.webSite
        const compData = reactive({
            title,
            collapsed: false,
        })
        return {
            compData,
        }
    },
})
</script>
<style lang="less" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;
    background-color: #2f3447;
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
}
</style>
