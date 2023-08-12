<template>
    <n-icon class="menu-visible-icon" size="18" color="#0e7a0d">
        <MenuUnfoldOutlined/>
    </n-icon>
</template>
<script>
import {defineComponent} from "vue"
import {MenuUnfoldOutlined} from "@vicons/antd"
export default defineComponent({
    components:{
        MenuUnfoldOutlined
    }
})
</script>
<style lang="less" scoped>
.menu-visible-icon{
   margin-right: 20px;
    cursor: pointer;
}
</style>
