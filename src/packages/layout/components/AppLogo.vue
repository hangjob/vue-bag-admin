<template>
    <div class="header-logo" :style="{width:app.collapsed ? '64px' : null}">
        <template v-if="app.collapsed">
             <img :src="app.configOptions.website.logo" alt="">
        </template>
        <template v-else>
             <img :src="app.configOptions.website.logo" alt="">
             <span>{{app.configOptions.website.title}}</span>
        </template>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue"
import appStore from "@/packages/pinia/app.ts"
export default defineComponent({
    setup(){
        const app = appStore()
        return {
            app
        }
    }
})
</script>
<style lang="less" scoped>
.header-logo {
    display: flex;
    align-items: center;
    width: 240px;
    justify-content: center;
    border-right: 1px solid var(--n-border-color);
    flex-shrink: 0;
    transition: all 0.3s;
    height: 50px;
    border-bottom: 1px solid var(--n-border-color);
    box-sizing: border-box;

    img {
        max-width: 100%;
        height: 32px;
    }

    span {
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        height: 32px;
        line-height: 32px;
        margin-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
