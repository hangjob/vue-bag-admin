<template>
    <section class="section section-container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon size="50px" icon="mood"></vs-icon>
                    </div>
                    <h5>1234,6</h5>
                    <p class="indent">Projects Completed</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon size="50px" icon="mood"></vs-icon>
                    </div>
                    <h5>1534,6</h5>
                    <p class="indent">Projects Completed</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon size="50px" icon="mood"></vs-icon>
                    </div>
                    <h5>18234,6</h5>
                    <p class="indent">Projects Completed</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon size="50px" icon="mood"></vs-icon>
                    </div>
                    <h5>11234,6</h5>
                    <p class="indent">Projects Completed</p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section {
    padding-top: 120px;
    padding-bottom: 120px;
    background: rgba(0, 0, 0, 0.5);
    clear: both;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;

    h1 {
        font-size: 50px;
        font-weight: bold;
    }

    h5 {
        font-weight: bold;
        font-size: 17px;
        position: relative;
        margin-top: 15px;
        margin-bottom:20px;

        &::before {
            position: absolute;
            z-index: 1;
            content: "";
            width: 20%;
            height: 2px;
            background: #f7d861;
            bottom: -8px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
    .service-icon{
        .indent{
            color: #d1d1d1;
        }
    }
}
</style>
