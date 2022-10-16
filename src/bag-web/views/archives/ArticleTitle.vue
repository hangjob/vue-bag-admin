<template>
    <div class="article-title">
        <div class="items">
            <div class="item" v-for="item in 8">
                <el-icon><PictureRounded /></el-icon>
                <span>全部</span>
            </div>
        </div>
        <div class="submenu"></div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.article-title {
    margin-top: 30px;
    background-color: #fff;
    border-radius: 10px;

    .items {
        border-bottom: 1px solid #f3f5f7;
        display: flex;
        justify-content: center;
        .item {
            padding:20px 0;
            width:120px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

}
</style>
