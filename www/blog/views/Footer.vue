<template>
    <section class="section section-container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <vs-icon size="34px" color="#46c93a" icon="qr_code"></vs-icon>
                    <p>微信号：<span>itnavs</span></p>
                </div>

            </el-col>
            <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="item">
                    <vs-icon size="34px" color="#34d293" icon="mark_email_unread"></vs-icon>
                    <p>470193837@qq.com</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="item">
                    <div>
                        <vs-icon color="#e96656" size="34px" icon="location_on"></vs-icon>
                        <p>备案号码：<span>鄂ICP备17016349号-3</span></p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #272727;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    &-title {
        text-align: center;
        margin-bottom: 40px;
    }
    h1 {
        font-size: 50px;
        font-weight: bold;
    }
    .item{
        margin-top: 20px;
        text-align: center;
    }
}
</style>
