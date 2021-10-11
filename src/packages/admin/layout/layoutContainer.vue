<template>
    <a-layout-content class="layout-container">
        <div class="layout-container-view">
            <div class="layout-container-view-content scroll">
                <router-view/>
            </div>
        </div>
    </a-layout-content>
</template>
<script>

</script>
<style lang="less" scoped>
.layout-container {
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;

    &-view {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;

        &-content {
            overflow: hidden auto;
            position: relative;
            z-index: 100;
            height: 100%;
            padding: 10px;
            border-radius: 3px;
            background-color: #ffffff;
        }
    }
}
</style>