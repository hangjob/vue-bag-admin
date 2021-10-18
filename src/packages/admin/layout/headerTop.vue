<template>
    <!--  菜单路径  -->
    <a-layout-header class="layout-header_top">
        <a-breadcrumb style="height: 45px;line-height: 45px">
            <a-breadcrumb-item v-for="(item,idx) in list" :key="idx">{{item.name}}</a-breadcrumb-item>
        </a-breadcrumb>
    </a-layout-header>
</template>

<script lang="ts">
    import {defineComponent,computed} from 'vue'
    import {useStore} from 'vuex'
    export default defineComponent({
        setup() {
            const store = useStore();
            const list = computed(()=>store.getters.tabViewsPath);
            return{
                list
            }
        }
    })
</script>
<style lang="less" scoped>
    .layout-header_top {
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        padding: 0 16px;
    }
</style>
