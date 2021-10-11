<template>
    <div class="layout-header_scroller">
        <div class="app-process_item">
            <span>组件预览</span>
            <a-icon type="loading"/>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({})
</script>
<style lang="less" scoped>
.layout-header_scroller{
    background-color: transparent;
    padding: 10px;
    .app-process_item {
        display: inline-flex;
        align-items: center;
        border-radius: 3px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #fff;
        font-size: 12px;
        margin-right: 10px;
        color: #909399;
        cursor: pointer;
    }
}
</style>