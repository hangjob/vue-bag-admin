<template>
    <section class="section section-container">
        <h1>特点</h1>
        <p>相对于其他的博客系统，Bag一直保持着自己的风格.</p>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon icon="mood"></vs-icon>
                    </div>
                    <h5>简单易用</h5>
                    <p class="indent">框架后台完全傻瓜式操作，所有后台功能，即看即会，无需任何功底，无需掌握任何技术，谁都可以是个人站长.</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon icon="mood"></vs-icon>
                    </div>
                    <h5>简单易用</h5>
                    <p class="indent">框架后台完全傻瓜式操作，所有后台功能，即看即会，无需任何功底，无需掌握任何技术，谁都可以是个人站长.</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon icon="mood"></vs-icon>
                    </div>
                    <h5>简单易用</h5>
                    <p class="indent">框架后台完全傻瓜式操作，所有后台功能，即看即会，无需任何功底，无需掌握任何技术，谁都可以是个人站长.</p>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                <div class="service-icon">
                    <div class="circle">
                        <vs-icon size="70px" icon="mood"></vs-icon>
                    </div>
                    <h5>简单易用</h5>
                    <p class="indent">框架后台完全傻瓜式操作，所有后台功能，即看即会，无需任何功底，无需掌握任何技术，谁都可以是个人站长.</p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section {
    padding: 120px 30px;
    background: rgba(255, 255, 255, 1);
    position: relative;
    overflow: hidden;
    color: #333333;
    text-align: center;

    h1 {
        font-size: 50px;
        font-weight: bold;
    }

    h5 {
        font-weight: bold;
        font-size: 17px;
        position: relative;
        margin-top: 20px;
        margin-bottom: 30px;

        &::before {
            position: absolute;
            z-index: 1;
            content: "";
            width: 20%;
            height: 2px;
            background: #f7d861;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    p {
        font-size: 14px;
        color: #808080;
        line-height: 25px;
        text-align: center;
    }

    p.indent{
        text-indent: 28px;
    }

    .service-icon {
        margin-top: 40px;

        .circle {
            width: 145px;
            height: 145px;
            margin: auto;
            border-radius: 50%;
            border: 10px solid #ececec;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
