<template>
    <section class="section section-container">
        <div class="section-title">
            <h1 style="line-height:75px">有一种遇见，没有惊艳的开场，没有华丽的告白<br />一个快速能快速迭代管理系统框架</h1>
        </div>
        <div class="action">
            <el-row :gutter="30">
                <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                    <div class="demo">
                        <el-button target @click="handleSkip('/admin.html')" size="large" type="primary" icon="Pear">体验管理端
                        </el-button>
                    </div>
                </el-col>
                <!--                <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">-->
                <!--                    <div class="demo">-->
                <!--                        <el-button target :href="{url: '/web.html'}" size="large"-->
                <!--                                   type="success"-->
                <!--                                   icon="Mug"-->
                <!--                        >体验客户端-->
                <!--                        </el-button>-->
                <!--                    </div>-->
                <!--                </el-col>-->
                <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                    <div class="demo">
                        <el-button target @click="handleSkip('/doc/index.html')" size="large" type="warning"
                                   icon="IceTea"
                        >查看文档
                        </el-button>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                    <div class="demo">
                        <el-button @click="handleDownload" size="large" type="danger" icon="Apple">
                            下载程序
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { browser } from 'pm-utils'

const handleDownload = () => {
    browser.smoothScroll('#Download')
}
const handleSkip = (url)=>{
    window.location.href = url
}
</script>
<style lang="less" scoped>
.section {
    padding-top: 220px;
    padding-bottom: 220px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;
    
    &-title {
        h1 {
            font-size: 50px;
            font-weight: bold;
        }
    }
    
    .action {
        width: 60%;
        margin: 80px auto 0;
    }
    
    .demo {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
}
</style>
